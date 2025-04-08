import { useState, useEffect } from 'react';
import Nav from './Nav';
import styles from './styles.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${mobileMenuOpen ? styles.menuOpen : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#">
            <span className={styles.logoText}>Personal</span>
            <span className={styles.logoHighlight}>Trainer</span>
          </a>
        </div>

        <Nav isOpen={mobileMenuOpen} />
        
        <div className={styles.cta}>
          <a href="#contact" className={styles.ctaButton}>
            Agende Agora
          </a>
        </div>

        <button 
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Menu mobile"
        >
          <span className={styles.hamburger}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;