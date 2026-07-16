import type { Project } from "@/types";
import ProjectCard from "@/components/ProjectCard";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const featured = projects.find((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);
  const [row1, row2] = [rest.slice(0, 2), rest.slice(2, 5)];

  return (
    <section id="projetos" style={{ padding: "120px 64px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          marginBottom: 72,
          paddingBottom: 32,
          borderBottom: "1px solid #E8E4DE",
        }}
      >
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 48,
            fontWeight: 300,
            letterSpacing: "-0.01em",
          }}
        >
          Projetos Selecionados
        </h2>
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#A8A49E",
          }}
        >
          2020 — 2025
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: 40,
          marginBottom: 40,
          alignItems: "start",
        }}
      >
        {row1.map((project) => (
          <ProjectCard key={project.id} project={project} imageHeight={420} />
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 40,
          marginBottom: 40,
          alignItems: "start",
        }}
      >
        {row2.map((project) => (
          <ProjectCard key={project.id} project={project} imageHeight={280} />
        ))}
      </div>

      {featured && (
        <div
          className="proj-card"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            alignItems: "center",
            padding: "48px 0",
            borderTop: "1px solid #E8E4DE",
            borderBottom: "1px solid #E8E4DE",
          }}
        >
          <div className="proj-img" style={{ height: 240 }}>
            <div className="proj-img-inner" style={{ height: 240 }}>
              <span className="proj-placeholder">{featured.placeholderLabel}</span>
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#F09419",
                marginBottom: 16,
              }}
            >
              Projeto em Destaque
            </div>
            <div className="proj-title" style={{ fontSize: 34, lineHeight: 1.1, marginBottom: 12 }}>
              {featured.title}
            </div>
            <div className="proj-meta" style={{ marginBottom: 24 }}>
              {featured.location} &nbsp;·&nbsp; {featured.year} &nbsp;·&nbsp; {featured.program}
            </div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                lineHeight: 1.8,
                color: "#6B6560",
                maxWidth: 420,
              }}
            >
              {featured.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
