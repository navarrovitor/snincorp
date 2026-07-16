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
    .map((entry) => entry.name)
    .sort();

  return folders.map(readProjectFolder).sort((a, b) => b.year - a.year);
}
