import React from 'react';
import GlassCard from '@components/ui/GlassCard/GlassCard';
import SkillCard from './SkillCard/SkillCard';
import { skills } from '@data/skills';
import styles from './Skills.module.css';

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
        <p className={styles.sectionDescription}>
          Technologies and tools I use to bring ideas to life
        </p>

        <div className={styles.skillsContainer}>
          {skills.map((category, index) => (
            <GlassCard key={index} className={styles.categoryCard}>
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <div className={styles.skillsGrid}>
                {category.items.map((skill, skillIndex) => (
                  <SkillCard key={skillIndex} skill={skill} />
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
