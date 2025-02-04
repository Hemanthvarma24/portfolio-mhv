import type { IconType } from "react-icons"
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si"
import { TbApi } from "react-icons/tb"

interface SkillIconInfo {
  icon: IconType | string
  color: string
  viewBox?: string
}

export const skillToIconInfo: Record<string, SkillIconInfo> = {
  HTML: {
    icon: SiHtml5,
    color: "#E34F26",
  },
  javascript: {
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  React: {
    icon: SiReact,
    color: "#61DAFB",
  },
  "Next.js": {
    icon: SiNextdotjs,
    color: "#FFFFFF",
  },
  TypeScript: {
    icon: SiTypescript,
    color: "#3178C6",
  },
  "Tailwind CSS": {
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  "Node.js": {
    icon: SiNodedotjs,
    color: "#339933",
  },
  "REST APIs": {
    icon: TbApi,
    color: "#FF5733",
  },
  Git: {
    icon: SiGit,
    color: "#F05032",
  },
  Github: {
    icon: SiGithub,
    color: "#FFFFFF",
  },
  Figma: {
    icon: SiFigma,
    color: "#F24E1E",
  },
}

