import React from 'react';
import { NAV_LINKS } from '@utils/constants';
import styles from './Navigation.module.css';

const Navigation = ({ isOpen, onClose, isMobile }) => {
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (isMobile && onClose) {
        onClose();
      }
    }
  };

  return (
    <nav className={`${styles.nav} ${isMobile ? styles.mobile : ''} ${isOpen ? styles.open : ''}`}>
      <ul className={styles.navList}>
        {NAV_LINKS.map((link) => (
          <li key={link.id} className={styles.navItem}>
            <button
              onClick={() => handleClick(link.id)}
              className={styles.navLink}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
