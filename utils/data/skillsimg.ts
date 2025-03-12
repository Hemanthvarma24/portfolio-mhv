import html from '@/app/assets/svg/skills/html.svg';
import css from '@/app/assets/svg/skills/css.svg';
import javascript from '@/app/assets/svg/skills/javascript.svg';
import typescript from '@/app/assets/svg/skills/typescript.svg';
import react from '@/app/assets/svg/skills/react.svg';
import nextJS from '@/app/assets/svg/skills/nextJS.svg';
import tailwind from '@/app/assets/svg/skills/tailwind.svg';
import git from '@/app/assets/svg/skills/git.svg';
import bootstrap from '@/app/assets/svg/skills/bootstrap.svg';
import figma from '@/app/assets/svg/skills/figma.svg';
import api from '@/app/assets/svg/skills/api.png';
import github from '@/app/assets/svg/skills/github-sign.png';

export const skillsImage = (skill: string) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'typescript':
      return typescript;
    case 'react':
      return react;
    case 'next js':
      return nextJS;
    case 'tailwind':
      return tailwind;
    case 'git':
      return git;
    case 'bootstrap':
      return bootstrap;
    case 'figma':
      return figma;
    case 'api':
      return api;
    case 'github':
      return github;
    default:
      return null;
  }
};
