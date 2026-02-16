import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiTailwindcss,
  SiVite,
  SiWebpack,
  SiExpress,
  SiNextdotjs,
  SiGraphql,
} from 'react-icons/si';

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: FaReact, level: 'Advanced' },
      { name: 'TypeScript', icon: SiTypescript, level: 'Intermediate' },
      { name: 'HTML5', icon: FaHtml5, level: 'Advanced' },
      { name: 'CSS3', icon: FaCss3Alt, level: 'Advanced' },
      { name: 'JavaScript', icon: FaJsSquare, level: 'Advanced' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Intermediate' },
      { name: 'Next.js', icon: SiNextdotjs, level: 'Intermediate' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: FaNodeJs, level: 'Intermediate' },
      { name: 'Express', icon: SiExpress, level: 'Intermediate' },
      { name: 'Python', icon: FaPython, level: 'Intermediate' },
      { name: 'MongoDB', icon: SiMongodb, level: 'Intermediate' },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 'Beginner' },
      { name: 'GraphQL', icon: SiGraphql, level: 'Beginner' },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', icon: FaGitAlt, level: 'Advanced' },
      { name: 'Docker', icon: FaDocker, level: 'Beginner' },
      { name: 'Vite', icon: SiVite, level: 'Intermediate' },
      { name: 'Webpack', icon: SiWebpack, level: 'Beginner' },
      { name: 'Redis', icon: SiRedis, level: 'Beginner' },
    ],
  },
];
