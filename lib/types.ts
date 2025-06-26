import type { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface Skill {
  name: string;
  percentage: number;
  icon: ReactNode;
}

export interface Technology {
  name: string;
  category: string;
  icon: ReactNode;
}

export interface Project {
  title: string;
  description: string;
  image: StaticImageData | string;
  technologies: string[];
  github: string;
  live?: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface ExperienceItem {
  type: "work" | "education";
  title: string;
  company?: string;
  location: string;
  period: string;
  description?: string;
  achievements?: string[];
  technologies?: string[];
  icon: LucideIcon;
}
