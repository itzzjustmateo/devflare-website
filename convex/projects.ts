import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

/**
 * Get all projects.
 */
export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("projects").collect();
  },
});

/**
 * Seed initial projects data.
 */
export const seed = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query("projects").collect();
    if (existing.length > 0) return;

    const initialProjects = [
      {
        title: "SnakeRoyale",
        description: "A competitive multiplayer snake game built for Minecraft servers.",
        coverImage: "https://images.unsplash.com/photo-1614728263952-84ea206f99b6?q=80&w=2000&auto=format&fit=crop",
        link: "https://github.com/itzzjustmateo/SnakeRoyale",
        tags: ["Java", "Minecraft", "Plugin", "Paper", "Battle Royale", "Minigame"],
        featured: true,
      },
      {
        title: "CraftGuard",
        description: "Advanced protection and management plugin for Minecraft communities.",
        coverImage: "https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?q=80&w=2000&auto=format&fit=crop",
        link: "https://github.com/itzzjustmateo/CraftGuard",
        tags: ["Java", "Paper", "Security", "Plugin", "Minecraft"],
        featured: true,
      },
      {
        title: "Vesper Launcher",
        description: "A sleek, highly optimized Minecraft launcher built for power users. Forget bloated UIs. Just raw speed and modularity.",
        coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop",
        link: "https://launcher.devflare.de",
        tags: ["Tauri", "Rust", "Minecraft", "Launcher"],
        featured: false,
      },
    ];

    for (const project of initialProjects) {
      await ctx.db.insert("projects", project);
    }
  },
});
