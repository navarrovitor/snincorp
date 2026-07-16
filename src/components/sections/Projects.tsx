"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/types";
import ProjectCard from "@/components/ProjectCard";
import ImageGallery from "@/components/ImageGallery";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const [activeProgram, setActiveProgram] = useState<string | "all">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const programs = useMemo(() => {
    const values = projects
      .map((project) => project.program)
      .filter((program): program is string => Boolean(program));
    return Array.from(new Set(values)).sort();
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeProgram === "all") return projects;
    return projects.filter((project) => project.program === activeProgram);
  }, [projects, activeProgram]);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">Selected Work</h2>
          <p className="mt-2 text-foreground/70">
            A collection of recent commercial, residential, and cultural projects.
          </p>
        </div>

        {programs.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveProgram("all")}
              className={`px-4 py-2 text-sm uppercase tracking-wide transition-colors ${
                activeProgram === "all"
                  ? "bg-foreground text-background"
                  : "border border-foreground/30 text-foreground/70 hover:border-foreground"
              }`}
            >
              All
            </button>
            {programs.map((program) => (
              <button
                key={program}
                type="button"
                onClick={() => setActiveProgram(program)}
                className={`px-4 py-2 text-sm uppercase tracking-wide transition-colors ${
                  activeProgram === program
                    ? "bg-foreground text-background"
                    : "border border-foreground/30 text-foreground/70 hover:border-foreground"
                }`}
              >
                {program}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="py-12 text-center text-foreground/60">
          No projects match this filter yet.
        </p>
      )}

      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto bg-background p-6 sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold">{selectedProject.title}</h3>
                <p className="mt-1 text-sm text-foreground/60">
                  {selectedProject.location} &middot; {selectedProject.year}
                  {selectedProject.program ? ` · ${selectedProject.program}` : ""}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="shrink-0 border border-foreground/30 px-3 py-1 text-sm hover:border-foreground"
              >
                Close
              </button>
            </div>

            <ImageGallery
              images={[
                selectedProject.images.hero,
                ...selectedProject.images.gallery,
              ]}
              alt={selectedProject.title}
            />

            <p className="mt-6 text-foreground/80">{selectedProject.description}</p>

            {selectedProject.metadata && (
              <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-foreground/10 pt-6 text-sm sm:grid-cols-3">
                {selectedProject.metadata.area && (
                  <div>
                    <dt className="uppercase tracking-wide text-foreground/50">Area</dt>
                    <dd className="mt-1">{selectedProject.metadata.area}</dd>
                  </div>
                )}
                {selectedProject.metadata.client && (
                  <div>
                    <dt className="uppercase tracking-wide text-foreground/50">Client</dt>
                    <dd className="mt-1">{selectedProject.metadata.client}</dd>
                  </div>
                )}
                {selectedProject.metadata.team && (
                  <div>
                    <dt className="uppercase tracking-wide text-foreground/50">Team</dt>
                    <dd className="mt-1">{selectedProject.metadata.team}</dd>
                  </div>
                )}
              </dl>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
