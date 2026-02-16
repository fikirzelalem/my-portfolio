import React from 'react';
import { HiDownload } from 'react-icons/hi';
import GlassCard from '@components/ui/GlassCard/GlassCard';
import Button from '@components/ui/Button/Button';
import { RESUME_URL } from '@utils/constants';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>

        <GlassCard className={styles.aboutCard}>
          <div className={styles.content}>
            <div className={styles.imageWrapper}>
              <div className={styles.imagePlaceholder}>
                <span>Your Photo</span>
              </div>
            </div>

            <div className={styles.bio}>
              <h3 className={styles.bioTitle}>Software Developer</h3>
              <p className={styles.bioText}>
                I'm a passionate software developer with experience in building
                modern web applications. I love creating elegant solutions to
                complex problems and am always eager to learn new technologies.
              </p>
              <p className={styles.bioText}>
                With a strong foundation in React, JavaScript, and modern web
                technologies, I focus on writing clean, maintainable code that
                delivers exceptional user experiences.
              </p>
              <p className={styles.bioText}>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>

              <Button
                variant="primary"
                icon={<HiDownload />}
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default About;
