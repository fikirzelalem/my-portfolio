import React from 'react';
import { HiArrowDown } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import GlassCard from '@components/ui/GlassCard/GlassCard';
import Button from '@components/ui/Button/Button';
import { SOCIAL_LINKS } from '@utils/constants';
import styles from './Hero.module.css';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <GlassCard className={styles.heroCard}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Hi, I'm <span className={styles.highlight}>Your Name</span>
            </h1>
            <h2 className={styles.subtitle}>Software Developer</h2>
            <p className={styles.description}>
              I build amazing web experiences with modern technologies.
              Passionate about creating elegant solutions to complex problems.
            </p>

            <div className={styles.buttonGroup}>
              <Button variant="primary" size="lg" onClick={scrollToProjects}>
                View My Work
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToContact}>
                Get In Touch
              </Button>
            </div>

            <div className={styles.socialLinks}>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </GlassCard>

        <button className={styles.scrollIndicator} onClick={scrollToProjects} aria-label="Scroll down">
          <HiArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
