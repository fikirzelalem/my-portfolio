import React from 'react';
import styles from './Button.module.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon,
  onClick,
  className = '',
  ...props
}) => {
  const variantClass = styles[variant];
  const sizeClass = styles[size];
  const classes = `${styles.button} ${variantClass} ${sizeClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
