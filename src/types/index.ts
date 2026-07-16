export interface ProjectImages {
  hero: string;
  gallery: string[];
}

export interface ProjectMetadata {
  area?: string;
  client?: string;
  team?: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  year: number;
  program?: string;
  description: string;
  images: ProjectImages;
  metadata?: ProjectMetadata;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export type ContactFormStatus = "idle" | "submitting" | "success" | "error";
