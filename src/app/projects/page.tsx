"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ExternalLinkIcon, Code2Icon, LayoutIcon, DatabaseIcon } from "lucide-react";

interface Project {
  _id: string;
  title: string;
  description: string;
  coverImage: string;
  link: string;
  tags: string[];
  featured: boolean;
}

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const json = await response.json();
        if (json.success) {
          setProjects(json.data);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
        {/* Header */}
        <header className="mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-400">
            <LayoutIcon size={12} />
            <span>Showcase</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
            Selected Work
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl font-light">
            A collection of my recent projects, from high-performance Minecraft plugins to modern web applications.
          </p>
        </header>

        {/* Projects Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-video rounded-2xl bg-white/5 animate-pulse border border-white/5" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}

        {/* Footer Note */}
        <section className="mt-32 border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-neutral-500">
            <DatabaseIcon size={18} />
            <span className="text-sm">Powered by Convex & ElysiaJS</span>
          </div>
          <Link
            href="https://github.com/IMDevFlare"
            target="_blank"
            className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium"
          >
            <span>See more on GitHub</span>
            <ExternalLinkIcon size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </section>
      </main>
    </div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group relative flex flex-col bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:bg-white/[0.04] transition-all duration-500 hover:border-white/15 h-full">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
        
        {/* Floating Tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-semibold text-white/80 uppercase tracking-widest">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-white group-hover:text-white/90 transition-colors">
            {project.title}
          </h3>
          <Link
            href={project.link}
            target="_blank"
            className="p-2 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0"
          >
            <ExternalLinkIcon size={16} />
          </Link>
        </div>
        
        <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">
          {project.description}
        </p>

        <div className="mt-auto flex items-center gap-2 text-xs font-mono text-white/30 lowercase">
          <Code2Icon size={12} />
          <span>{project.tags.join(" • ")}</span>
        </div>
      </div>

      {/* Hover Background Glow */}
      <div className="absolute -inset-[1px] bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-3xl" />
    </div>
  );
};

export default ProjectsPage;
