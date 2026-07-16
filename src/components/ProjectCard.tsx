"use client";

import Image from "next/image";
import type { Project } from "@/types";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface ProjectCardProps {
  project: Project;
  onSelect?: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>();

  return (
    <article
      ref={ref}
      className={`group cursor-pointer transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <button
        type="button"
        onClick={() => onSelect?.(project)}
        className="block w-full text-left"
        aria-label={`View details for ${project.title}`}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-foreground/5">
          <Image
            src={project.images.hero}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="mt-4 space-y-1">
          <h3 className="text-lg font-medium">{project.title}</h3>
          <p className="text-sm text-foreground/60">
            {project.location} &middot; {project.year}
            {project.program ? ` · ${project.program}` : ""}
          </p>
          <p className="line-clamp-2 text-sm text-foreground/70">
            {project.description}
          </p>
        </div>
      </button>
    </article>
  );
}
