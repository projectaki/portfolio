import { Technology } from './technology';

export interface Project {
  title: string;
  description: string;
  link: string;
  technologies: Technology[];
}
