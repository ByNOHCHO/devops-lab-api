import { describe, expect, it } from "vitest";
import request from "supertest";
import { createApp } from "./app";

describe("api", () => {
  const app = createApp();

  it("GET /health returns up", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "up" });
  });

  it("GET / returns service info", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.body.ok).toBe(true);
    expect(res.body.service).toBe("devops-lab-api123");
  });
});
