import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  imageHeight: number;
}

export default function ProjectCard({ project, imageHeight }: ProjectCardProps) {
  return (
    <div className="proj-card">
      <div className="proj-img" style={{ height: imageHeight }}>
        <div className="proj-img-inner" style={{ height: imageHeight }}>
          <span className="proj-placeholder">{project.placeholderLabel}</span>
        </div>
      </div>
      <div style={{ padding: "20px 0 0" }}>
        <div className="proj-title">{project.title}</div>
        <div className="proj-meta">
          {project.location} &nbsp;·&nbsp; {project.year} &nbsp;·&nbsp; {project.program}
        </div>
      </div>
    </div>
  );
}
