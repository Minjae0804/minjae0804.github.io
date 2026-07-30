import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getTags } from "../../lib/posts";

export default function TagCloud() {
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  const tags = getTags();

  useEffect(() => {
    if (!tags.length) return;

    let animId;

    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js";
    script.onload = () => {
      const Matter = window.Matter;
      const { Engine, Bodies, World, Mouse, MouseConstraint, Constraint } = Matter;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const W = canvas.offsetWidth;
      const H = 240;
      canvas.width = W;
      canvas.height = H;
      const ctx = canvas.getContext("2d");

      const isDark = document.documentElement.getAttribute("data-theme") === "dark";

      const COLORS = isDark ? [
        { bg: "#2E1F12", border: "#5C3D22", text: "#C9A882" },
        { bg: "#3D2B1A", border: "#7C4E2D", text: "#D4C4B0" },
        { bg: "#5C3D22", border: "#A87850", text: "#E8D5BA" },
        { bg: "#7C4E2D", border: "#C9A882", text: "#F5EDE3" },
        { bg: "#A87850", border: "#D4C4B0", text: "#1E160E" },
      ] : [
        { bg: "#F5EDE3", border: "#C9A882", text: "#7C4E2D" },
        { bg: "#E8D5BA", border: "#A87850", text: "#5C3D22" },
        { bg: "#D4C4B0", border: "#7C4E2D", text: "#3D2B1A" },
        { bg: "#C9A882", border: "#5C3D22", text: "#2E1F12" },
        { bg: "#A87850", border: "#3D2B1A", text: "#F5EDE3" },
      ];

      const engine = Engine.create({ gravity: { y: 1 } });
      const world = engine.world;
      const wallOpts = { isStatic: true };
      World.add(world, [
        Bodies.rectangle(W/2, H+25, W, 50, wallOpts),
        Bodies.rectangle(-25, H/2, 50, H*2, wallOpts),
        Bodies.rectangle(W+25, H/2, 50, H*2, wallOpts),
        Bodies.rectangle(W/2, -25, W, 50, wallOpts),
      ]);

      const counts = tags.map(t => t.count);
      const minCount = Math.min(...counts);
      const maxCount = Math.max(...counts);

      function getFontSize(count) {
        const ratio = maxCount === minCount ? 0.5 : (count - minCount) / (maxCount - minCount);
        return Math.round(11 + ratio * 10);
      }
      function getColorIdx(count) {
        const ratio = maxCount === minCount ? 0.5 : (count - minCount) / (maxCount - minCount);
        return Math.min(Math.floor(ratio * COLORS.length), COLORS.length - 1);
      }
      function measureText(text, fontSize) {
        ctx.font = `500 ${fontSize}px sans-serif`;
        return ctx.measureText(text).width;
      }

      const tagMeta = tags.map((tag) => {
        const fontSize = getFontSize(tag.count);
        const th = fontSize + 14;
        const tw = measureText(`#${tag.name}`, fontSize) + 20;
        return { tag, fontSize, th, tw };
      });

      // 플로우 배치
      const tagBodies = [];
      const tagConstraints = []; // [leftConstraint, rightConstraint]
      let curX = 10;
      let curY = 10;
      let rowH = 0;

      tagMeta.forEach(({ tag, fontSize, th, tw }) => {
        if (curX + tw > W - 10) {
          curX = 10;
          curY += rowH + 6;
          rowH = 0;
        }
        const x = curX + tw / 2;
        const y = curY + th / 2;
        curX += tw + 6;
        rowH = Math.max(rowH, th);

        const body = Bodies.rectangle(x, y, tw, th, {
          restitution: 0.2, friction: 0.6, frictionAir: 0.02,
          chamfer: { radius: th / 2 },
        });
        body.tagName = tag.name;
        body.tw = tw;
        body.th = th;
        body.fontSize = fontSize;
        body.colorIdx = getColorIdx(tag.count);
        World.add(world, body);
        tagBodies.push(body);

        // 좌우 고정 constraint
        const leftC = Constraint.create({
          pointA: { x: x - tw / 2, y },
          bodyB: body,
          pointB: { x: -tw / 2, y: 0 },
          stiffness: 1,
          length: 0,
        });
        const rightC = Constraint.create({
          pointA: { x: x + tw / 2, y },
          bodyB: body,
          pointB: { x: tw / 2, y: 0 },
          stiffness: 1,
          length: 0,
        });
        World.add(world, [leftC, rightC]);
        tagConstraints.push([leftC, rightC]);
      });

      // 우하단부터 정렬
      let borderOpacity = 0;
      setTimeout(() => {
        const sorted = tagBodies.map((body, i) => ({ body, idx: i }))
          .sort((a, b) => (b.body.position.x + b.body.position.y) - (a.body.position.x + a.body.position.y));

        sorted.forEach(({ idx }, i) => {
          const [leftC, rightC] = tagConstraints[idx];
          const body = tagBodies[idx];
          const releaseFirst = Math.random() > 0.5 ? leftC : rightC;
          const releaseSecond = releaseFirst === leftC ? rightC : leftC;

          // 한쪽 먼저 해제
          setTimeout(() => {
            World.remove(world, releaseFirst);
          }, i * 100);

          // 나머지 해제
          setTimeout(() => {
            World.remove(world, releaseSecond);
            Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.1);
          }, i * 100 + 1000);
        });

        // 테두리 fade-in
        const lastDelay = sorted.length * 80 + 1600;
        setTimeout(() => {
          const fadeStart = performance.now();
          const fadeDuration = 500;
          const fade = () => {
            const elapsed = performance.now() - fadeStart;
            borderOpacity = Math.min(elapsed / fadeDuration, 1);
            if (borderOpacity < 1) requestAnimationFrame(fade);
          };
          requestAnimationFrame(fade);
        }, lastDelay);
      }, 1000);

      // 마우스
      const mouse = Mouse.create(canvas);
      const mc = MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.8, damping: 0.1, render: { visible: false } }
      });
      World.add(world, mc);

      let mouseDownPos = null;
      let dragging = false;

      canvas.addEventListener("mousedown", (e) => {
        mouseDownPos = { x: e.offsetX, y: e.offsetY };
        dragging = false;
      });
      canvas.addEventListener("mousemove", (e) => {
        if (!mouseDownPos) return;
        const dx = e.offsetX - mouseDownPos.x;
        const dy = e.offsetY - mouseDownPos.y;
        if (Math.sqrt(dx*dx + dy*dy) > 5) dragging = true;
      });
      canvas.addEventListener("mouseup", (e) => {
        if (!dragging && mouseDownPos) {
          const rect = canvas.getBoundingClientRect();
          const scaleX = W / rect.width;
          const scaleY = H / rect.height;
          const mx = e.offsetX * scaleX;
          const my = e.offsetY * scaleY;
          for (const body of tagBodies) {
            const { x, y } = body.position;
            const hw = body.tw / 2;
            const hh = body.th / 2;
            if (mx >= x - hw && mx <= x + hw && my >= y - hh && my <= y + hh) {
              navigate(`/tags/${body.tagName}`);
              break;
            }
          }
        }
        mouseDownPos = null;
        dragging = false;
      });

      function drawRoundedRect(x, y, w, h, r) {
        ctx.beginPath();
        ctx.moveTo(x+r, y); ctx.lineTo(x+w-r, y);
        ctx.quadraticCurveTo(x+w, y, x+w, y+r);
        ctx.lineTo(x+w, y+h-r);
        ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
        ctx.lineTo(x+r, y+h);
        ctx.quadraticCurveTo(x, y+h, x, y+h-r);
        ctx.lineTo(x, y+r);
        ctx.quadraticCurveTo(x, y, x+r, y);
        ctx.closePath();
      }

      function drawFrame() {
        Engine.update(engine, 16);
        ctx.clearRect(0, 0, W, H);

        ctx.save();
        ctx.beginPath();
        ctx.roundRect(0, 0, W, H, 8);
        ctx.clip();
        ctx.fillStyle = isDark ? "#1c1917" : "#ffffff";
        ctx.fillRect(0, 0, W, H);

        for (const body of tagBodies) {
          const { x, y } = body.position;
          const palette = COLORS[body.colorIdx];
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(body.angle);
          drawRoundedRect(-body.tw/2, -body.th/2, body.tw, body.th, body.th/2);
          ctx.fillStyle = palette.bg;
          ctx.fill();
          const isFlipped = Math.cos(body.angle) < 0;
          if (isFlipped) ctx.rotate(Math.PI);
          ctx.fillStyle = palette.text;
          ctx.font = `500 ${body.fontSize}px sans-serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(`#${body.tagName}`, 0, 0);
          ctx.restore();
        }

        ctx.restore();

        if (borderOpacity > 0) {
          ctx.beginPath();
          ctx.roundRect(0.5, 0.5, W - 1, H - 1, 8);
          ctx.strokeStyle = isDark
            ? `rgba(41,37,36,${borderOpacity})`
            : `rgba(240,236,232,${borderOpacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        animId = requestAnimationFrame(drawFrame);
      }

      drawFrame();
    };
    document.body.appendChild(script);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, [tags]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "240px", borderRadius: "8px", display: "block" }}
    />
  );
}
