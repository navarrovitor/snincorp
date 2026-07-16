export interface Project {
  id: string;
  title: string;
  location: string;
  year: number;
  program: string;
  placeholderLabel: string;
  description?: string;
  featured?: boolean;
}
