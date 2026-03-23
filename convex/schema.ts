import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  projects: defineTable({
    title: v.string(),
    description: v.string(),
    coverImage: v.string(),
    link: v.string(),
    tags: v.array(v.string()),
    featured: v.boolean(),
  }),
});
