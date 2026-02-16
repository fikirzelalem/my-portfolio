import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import { projects } from '@data/projects';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
        <p className={styles.sectionDescription}>
          Here are some of my recent projects showcasing my skills and experience
        </p>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
