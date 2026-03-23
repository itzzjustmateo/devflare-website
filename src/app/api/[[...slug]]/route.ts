import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../../convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const app = new Elysia({ prefix: "/api" })
  .use(cors())
  .get("/projects", async () => {
    try {
      const projects = await convex.query(api.projects.get);
      return {
        success: true,
        data: projects,
      };
    } catch (error) {
      console.error("Error fetching projects from Convex:", error);
      return {
        success: false,
        error: "Failed to fetch projects",
      };
    }
  })
  .get("/health", () => ({ status: "ok" }));

export const GET = app.handle;
export const POST = app.handle;
export const PUT = app.handle;
export const PATCH = app.handle;
export const DELETE = app.handle;
export const OPTIONS = app.handle;
