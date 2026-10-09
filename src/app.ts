import express from "express";

export function createApp() {
  const app = express();

  app.get("/", (_req, res) => {
    res.json({ ok: true, service123: "devops-lab-api" });
  });

  app.get("/health", (_req, res) => {
    res.json({ status: "up" });
  });

  return app;
}
