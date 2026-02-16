import React from 'react';
import styles from './GlassCard.module.css';

const GlassCard = ({
  children,
  variant = 'medium',
  className = '',
  blur,
  ...props
}) => {
  const variantClass = styles[variant];
  const customStyle = blur ? { backdropFilter: `blur(${blur})`, WebkitBackdropFilter: `blur(${blur})` } : {};

  return (
    <div
      className={`${styles.glassCard} ${variantClass} ${className}`}
      style={customStyle}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
