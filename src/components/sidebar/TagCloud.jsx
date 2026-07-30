import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTags } from "../../lib/posts";
import blog from "../../config/blog.json";

export default function TagCloud() {
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  const allTagsRef = useRef(getTags());
  const allTags = allTagsRef.current;
  const initialCount = blog.sidebar.tagInitialCount ?? 10;
  const moreCount = blog.sidebar.tagMoreCount ?? 10;
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [showButton, setShowButton] = useState(false);
  const tagBodiesRef = useRef([]);
  const spawnMoreRef = useRef(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;
    if (!allTags.length) return;

    let animId;

    const existingScript = document.querySelector('script[src*="matter-js"]');
    const script = existingScript || document.createElement("script");

    const init = () => {
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
        { bg: "#2E1F12", text: "#C9A882" },
        { bg: "#3D2B1A", text: "#D4C4B0" },
        { bg: "#5C3D22", text: "#E8D5BA" },
        { bg: "#7C4E2D", text: "#F5EDE3" },
        { bg: "#A87850", text: "#1E160E" },
      ] : [
        { bg: "#F5EDE3", text: "#7C4E2D" },
        { bg: "#E8D5BA", text: "#5C3D22" },
        { bg: "#D4C4B0", text: "#3D2B1A" },
        { bg: "#C9A882", text: "#2E1F12" },
        { bg: "#A87850", text: "#F5EDE3" },
      ];

      const engine = Engine.create({ gravity: { y: 0.5 } });
      const world = engine.world;

      const wallOpts = { isStatic: true };
      let currentH = 240;
      const ground = Bodies.rectangle(W/2, currentH+25, W, 50, wallOpts);
      World.add(world, [
        ground,
        Bodies.rectangle(-25, currentH/2, 50, currentH*4, wallOpts),
        Bodies.rectangle(W+25, currentH/2, 50, currentH*4, wallOpts),
        Bodies.rectangle(W/2, -25, W, 50, wallOpts),
      ]);

      // 높이 확장 함수
      const expandHeight = (newH) => {
        currentH = newH;
        canvas.height = newH;
        canvas.style.height = newH + "px";
        Matter.Body.setPosition(ground, { x: W/2, y: newH + 25 });

        // 바닥 중앙에서 충격파
        const epicenterX = W / 2;
        const epicenterY = newH;
        for (const body of tagBodiesRef.current) {
          const dx = body.position.x - epicenterX;
          const dy = body.position.y - epicenterY;
          const dist = Math.sqrt(dx*dx + dy*dy) || 1;
          const force = 0.05 / dist;
          Matter.Body.applyForce(body, body.position, {
            x: dx * force,
            y: dy * force,
          });
        }
      };

      const counts = allTags.map(t => t.count);
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
      function measureTag(text, fontSize) {
        ctx.font = `500 ${fontSize}px sans-serif`;
        return ctx.measureText(text).width;
      }

      function spawnTags(tags, fromTop = false, delay = 0) {
        const tagMeta = tags.map((tag) => {
          const fontSize = getFontSize(tag.count);
          const th = fontSize + 14;
          const tw = measureTag(`#${tag.name}`, fontSize) + 20;
          return { tag, fontSize, th, tw };
        }).sort((b, a) => b.tag.count - a.tag.count);

        if (!fromTop) {
          let curX = 10, curY = 10, rowH = 0;
          const newBodies = [];
          const newConstraints = [];

          tagMeta.forEach(({ tag, fontSize, th, tw }) => {
            if (curX + tw > W - 10) { curX = 10; curY += rowH + 6; rowH = 0; }
            const x = curX + tw / 2;
            const y = curY + th / 2;
            curX += tw + 6;
            rowH = Math.max(rowH, th);

            const body = Bodies.rectangle(x, y, tw, th, {
              restitution: 0.2, friction: 0.8, frictionAir: 0.02,
              chamfer: { radius: th / 2 },
            });
            body.tagName = tag.name;
            body.tw = tw; body.th = th;
            body.fontSize = fontSize;
            body.colorIdx = getColorIdx(tag.count);
            World.add(world, body);
            tagBodiesRef.current.push(body);
            newBodies.push(body);

            const leftC = Constraint.create({ pointA: { x: x - tw/2, y }, bodyB: body, pointB: { x: -tw/2, y: 0 }, stiffness: 1, length: 0 });
            const rightC = Constraint.create({ pointA: { x: x + tw/2, y }, bodyB: body, pointB: { x: tw/2, y: 0 }, stiffness: 1, length: 0 });
            World.add(world, [leftC, rightC]);
            newConstraints.push([leftC, rightC]);
          });

          setTimeout(() => {
            const sorted = newBodies.map((body, i) => ({ body, idx: i }))
              .sort((a, b) => (a.body.position.x + a.body.position.y) - (b.body.position.x + b.body.position.y));

            sorted.forEach(({ idx }, i) => {
              const [leftC, rightC] = newConstraints[idx];
              const body = newBodies[idx];
              const releaseFirst = Math.random() > 0.5 ? leftC : rightC;
              const releaseSecond = releaseFirst === leftC ? rightC : leftC;

              setTimeout(() => {
                World.remove(world, releaseFirst);
                setTimeout(() => {
                  World.remove(world, releaseSecond);
                  Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.1);
                }, 800 + Math.random() * 400);
              }, i * 150);
            });
          }, delay);
        } else {
          tagMeta.forEach(({ tag, fontSize, th, tw }, i) => {
            setTimeout(() => {
              const x = 20 + Math.random() * (W - 40);
              const body = Bodies.rectangle(x, -th, tw, th, {
                restitution: 0.6, friction: 0.1, frictionAir: 0.02,
                chamfer: { radius: th / 2 },
                angle: (Math.random() - 0.5) * 0.3,
              });
              body.tagName = tag.name;
              body.tw = tw; body.th = th;
              body.fontSize = fontSize;
              body.colorIdx = getColorIdx(tag.count);
              World.add(world, body);
              tagBodiesRef.current.push(body);
            }, i * 200);
          });
        }
      }

      spawnMoreRef.current = (tags, extraH) => {
        expandHeight(currentH + extraH);
        spawnTags(tags, true, 0);
      };

      let borderOpacity = 0;

      spawnTags(allTags.slice(0, initialCount), false, 1000);

      // 첫 고정 해제 시점에 테두리 fade-in 시작
      const borderDelay = 1000; // spawnTags delay와 동일
      setTimeout(() => {
        const fadeStart = performance.now();
        const fadeDuration = initialCount * 50 + 1000;
        const fade = () => {
          const elapsed = performance.now() - fadeStart;
          borderOpacity = Math.min(elapsed / fadeDuration, 1);
          if (borderOpacity < 1) requestAnimationFrame(fade);
        };
        requestAnimationFrame(fade);
      }, borderDelay);

      // 마지막 태그 떨어지고 1초 후 버튼 표시
      const totalDelay = 1000 + initialCount * 150 + 1500 + 1000;
      setTimeout(() => setShowButton(true), totalDelay);

      const mouse = Mouse.create(canvas);
      const mc = MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.8, damping: 0.1, render: { visible: false } }
      });
      World.add(world, mc);

      let mouseDownPos = null, dragging = false;
      canvas.addEventListener("mousedown", (e) => { mouseDownPos = { x: e.offsetX, y: e.offsetY }; dragging = false; });
      canvas.addEventListener("mousemove", (e) => {
        if (!mouseDownPos) return;
        if (Math.sqrt((e.offsetX-mouseDownPos.x)**2 + (e.offsetY-mouseDownPos.y)**2) > 5) dragging = true;
      });
      canvas.addEventListener("mouseup", (e) => {
        if (!dragging && mouseDownPos) {
          const rect = canvas.getBoundingClientRect();
          const mx = e.offsetX * (W / rect.width);
          const my = e.offsetY * (H / rect.height);
          for (const body of tagBodiesRef.current) {
            const { x, y } = body.position;
            if (mx >= x - body.tw/2 && mx <= x + body.tw/2 && my >= y - body.th/2 && my <= y + body.th/2) {
              navigate(`/tags/${body.tagName}`);
              break;
            }
          }
        }
        mouseDownPos = null; dragging = false;
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
        ctx.roundRect(0, 0, W, currentH, 8);
        ctx.clip();
        ctx.fillStyle = isDark ? "#1c1917" : "#ffffff";
        ctx.fillRect(0, 0, W, currentH);

        for (const body of tagBodiesRef.current) {
          const { x, y } = body.position;
          const palette = COLORS[body.colorIdx];
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(body.angle);
          drawRoundedRect(-body.tw/2, -body.th/2, body.tw, body.th, body.th/2);
          ctx.fillStyle = palette.bg;
          ctx.fill();
          if (Math.cos(body.angle) < 0) ctx.rotate(Math.PI);
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
          ctx.roundRect(0.5, 0.5, W-1, currentH-1, 8);
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

    if (window.Matter) {
      init();
    } else {
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js";
      script.onload = init;
      if (!existingScript) document.body.appendChild(script);
    }

    return () => {
      if (animId) cancelAnimationFrame(animId);
      tagBodiesRef.current = [];
      initializedRef.current = false;
    };
  }, []);

  const hasMore = visibleCount < allTags.length;

  const handleMore = () => {
    const next = Math.min(visibleCount + moreCount, allTags.length);
    const newTags = allTags.slice(visibleCount, next);
    setVisibleCount(next);
    // 태그 평균 높이 * 예상 행 수로 확장
    const extraH = Math.ceil(newTags.length / 4) * 40;
    if (spawnMoreRef.current) spawnMoreRef.current(newTags, extraH);
  };

  return (
    <div className="flex flex-col gap-2">
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "240px", borderRadius: "8px", display: "block" }}
      />
      {hasMore && showButton && (
        <button
          onClick={handleMore}
          style={{ animation: "fadeIn 0.5s ease" }}
          className="text-xs text-stone-400 dark:text-stone-500 hover:text-brown-500 dark:hover:text-brown-300 transition-colors text-center py-1"
        >
          +{Math.min(moreCount, allTags.length - visibleCount)}개 더 보기
        </button>
      )}
    </div>
  );
}
