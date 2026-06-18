import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve("dist_preview");
const port = 4173;
const host = "127.0.0.1";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".mp4": "video/mp4",
  ".json": "application/json; charset=utf-8",
};

http
  .createServer((req, res) => {
    const urlPath = decodeURIComponent((req.url ?? "/").split("?")[0]);
    const filePath = path.join(root, urlPath === "/" ? "/index.html" : urlPath);

    fs.readFile(filePath, (error, data) => {
      if (error) {
        res.statusCode = 404;
        res.end("Not found");
        return;
      }

      res.setHeader("Content-Type", mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream");
      res.end(data);
    });
  })
  .listen(port, host, () => {
    console.log(`http://${host}:${port}`);
  });
