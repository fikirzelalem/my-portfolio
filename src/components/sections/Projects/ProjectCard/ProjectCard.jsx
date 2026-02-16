import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import GlassCard from '@components/ui/GlassCard/GlassCard';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <GlassCard className={styles.projectCard}>
      <div className={styles.imagePlaceholder}>
        <span>{project.title}</span>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.techStack}>
          {project.techStack.map((tech, index) => (
            <span key={index} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label="View live demo"
            >
              <FaExternalLinkAlt size={18} />
              <span>Live Demo</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label="View GitHub repository"
            >
              <FaGithub size={18} />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
};

export default ProjectCard;
