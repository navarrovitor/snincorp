import fs from "fs";
import path from "path";
import type { Project } from "@/types";

const PROJECTS_DIR = path.join(process.cwd(), "data", "projects");

function readProjectFolder(folderName: string): Project {
  const filePath = path.join(PROJECTS_DIR, folderName, "metadata.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as Project;
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];

  const folders = fs
    .readdirSync(PROJECTS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  return folders
    .map(readProjectFolder)
    .sort((a, b) => b.year - a.year);
}

export function getProjectById(id: string): Project | undefined {
  return getAllProjects().find((project) => project.id === id);
}

export function getProjectsByProgram(program: string): Project[] {
  return getAllProjects().filter(
    (project) => project.program?.toLowerCase() === program.toLowerCase()
  );
}

export function getAllProgramTypes(): string[] {
  const programs = getAllProjects()
    .map((project) => project.program)
    .filter((program): program is string => Boolean(program));

  return Array.from(new Set(programs)).sort();
}

export function getAllProjectIds(): string[] {
  return getAllProjects().map((project) => project.id);
}
