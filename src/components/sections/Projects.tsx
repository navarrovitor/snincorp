import type { Project } from "@/types";
import ProjectCard from "@/components/ProjectCard";
import cardStyles from "@/components/ProjectCard.module.css";
import styles from "./Projects.module.css";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const featured = projects.find((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);
  const [row1, row2] = [rest.slice(0, 2), rest.slice(2, 5)];

  return (
    <section id="projetos" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Projetos Selecionados</h2>
        <span className={styles.range}>2020 — 2025</span>
      </div>

      <div className={styles.rowLarge}>
        {row1.map((project) => (
          <ProjectCard key={project.id} project={project} size="large" />
        ))}
      </div>

      <div className={styles.rowMedium}>
        {row2.map((project) => (
          <ProjectCard key={project.id} project={project} size="medium" />
        ))}
      </div>

      {featured && (
        <div className={`${cardStyles.card} ${styles.featured}`}>
          <div className={`${cardStyles.img} ${cardStyles.imgFeature}`}>
            <div className={cardStyles.imgInner}>
              <span className={cardStyles.placeholder}>{featured.placeholderLabel}</span>
            </div>
          </div>
          <div>
            <div className={styles.featuredEyebrow}>Projeto em Destaque</div>
            <div className={`${cardStyles.title} ${cardStyles.titleFeature}`}>
              {featured.title}
            </div>
            <div className={`${cardStyles.meta} ${cardStyles.metaFeature}`}>
              {featured.location} &nbsp;·&nbsp; {featured.year} &nbsp;·&nbsp; {featured.program}
            </div>
            <p className={styles.featuredDescription}>{featured.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}
