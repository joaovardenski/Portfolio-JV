import { images } from "../constants";

export interface Skill {
  name: string;
  bgColor: string;
  icon: string;
}

export const skillsData: Skill[] = [
  {
    name: "React",
    bgColor: "#dbeafe",
    icon: images.react,
  },
  {
    name: "TypeScript",
    bgColor: "#dde7ff",
    icon: images.typescript,
  },
  {
    name: "TailwindCSS",
    bgColor: "#d1fae5",
    icon: images.tailwind,
  },
  {
    name: "Node.js",
    bgColor: "#e0f2fe",
    icon: images.node,
  },
  {
    name: "Laravel",
    bgColor: "#ffe4e6",
    icon: images.laravel,
  },
  {
    name: "Python",
    bgColor: "#fef3c7",
    icon: images.python,
  },
  {
    name: "SQL",
    bgColor: "#e0e7ff",
    icon: images.sql,
  },
  {
    name: "Git",
    bgColor: "#fce7f3",
    icon: images.git,
  },
  {
    name: "GitHub",
    bgColor: "#e5e7eb",
    icon: images.github,
  },
  {
    name: "Docker",
    bgColor: "#eff6ff",
    icon: images.docker,
  },
  {
    name: "Figma",
    bgColor: "#f0fdf4",
    icon: images.figma,
  },
];
