import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { generateRssXml } from "./scripts/generateRss.js";
import { generateSitemapXml } from "./scripts/generateSitemap.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function readJson(relPath) {
  return JSON.parse(fs.readFileSync(path.resolve(__dirname, relPath), "utf-8"));
}

const ROUTES = {
  "/rss.xml": {
    contentType: "application/rss+xml; charset=utf-8",
    build: () => {
      const pkg = readJson("./package.json");
      const blog = readJson("./src/config/blog.json");
      return generateRssXml({ siteUrl: pkg.homepage, title: blog.title, description: blog.description });
    },
  },
  "/sitemap.xml": {
    contentType: "application/xml; charset=utf-8",
    build: () => {
      const pkg = readJson("./package.json");
      return generateSitemapXml({ siteUrl: pkg.homepage });
    },
  },
};

export default function seoPlugin() {
  return {
    name: "seo",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const route = ROUTES[req.url.split("?")[0]];
        if (!route) return next();
        res.setHeader("Content-Type", route.contentType);
        res.end(route.build());
      });
    },
    closeBundle() {
      const outDir = path.resolve(__dirname, "dist");
      fs.mkdirSync(outDir, { recursive: true });
      for (const [route, { build }] of Object.entries(ROUTES)) {
        fs.writeFileSync(path.join(outDir, path.basename(route)), build());
      }
    },
    transformIndexHtml() {
      const pkg = readJson("./package.json");
      const blog = readJson("./src/config/blog.json");
      const siteUrl = pkg.homepage;
      const image = blog.author?.avatar ?? "";
      const meta = (attrs) => ({ tag: "meta", attrs, injectTo: "head" });

      return [
        meta({ name: "description", content: blog.description }),
        meta({ property: "og:type", content: "website" }),
        meta({ property: "og:site_name", content: blog.title }),
        meta({ property: "og:title", content: blog.title }),
        meta({ property: "og:description", content: blog.description }),
        meta({ property: "og:url", content: siteUrl }),
        ...(image ? [meta({ property: "og:image", content: image })] : []),
        meta({ name: "twitter:card", content: "summary" }),
        meta({ name: "twitter:title", content: blog.title }),
        meta({ name: "twitter:description", content: blog.description }),
        ...(image ? [meta({ name: "twitter:image", content: image })] : []),
      ];
    },
  };
}
