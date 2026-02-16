import React from 'react';
import styles from './SkillCard.module.css';

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <div className={styles.skillCard}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} />
      </div>
      <h4 className={styles.skillName}>{skill.name}</h4>
      <span className={styles.skillLevel}>{skill.level}</span>
    </div>
  );
};

export default SkillCard;
