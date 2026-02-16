import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import GlassCard from '@components/ui/GlassCard/GlassCard';
import { SOCIAL_LINKS, CONTACT_INFO } from '@utils/constants';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <GlassCard className={styles.footerCard}>
          <div className={styles.content}>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Get In Touch</h3>
              <p className={styles.text}>
                I'm always open to new opportunities and collaborations.
                Feel free to reach out!
              </p>
              <a href={`mailto:${CONTACT_INFO.email}`} className={styles.email}>
                <FaEnvelope />
                <span>{CONTACT_INFO.email}</span>
              </a>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Connect</h3>
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
                <a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Twitter"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.copyright}>
            <p>
              © {currentYear} Your Name. Made with <FaHeart className={styles.heart} /> using React & Vite
            </p>
          </div>
        </GlassCard>
      </div>
    </footer>
  );
};

export default Footer;
