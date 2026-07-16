import type { Project } from "@/types";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  size: "large" | "medium";
}

const IMAGE_SIZE_CLASS = {
  large: styles.imgLarge,
  medium: styles.imgMedium,
};

export default function ProjectCard({ project, size }: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div className={`${styles.img} ${IMAGE_SIZE_CLASS[size]}`}>
        <div className={styles.imgInner}>
          <span className={styles.placeholder}>{project.placeholderLabel}</span>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.title}>{project.title}</div>
        <div className={styles.meta}>
          {project.location} &nbsp;·&nbsp; {project.year} &nbsp;·&nbsp; {project.program}
        </div>
      </div>
    </div>
  );
}
