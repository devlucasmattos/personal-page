import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Nav = ({ isOpen }) => {
  return (
    <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#home" className={styles.navLink}>
            Início
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#about" className={styles.navLink}>
            Sobre
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#services" className={styles.navLink}>
            Serviços
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#testimonials" className={styles.navLink}>
            Depoimentos
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#contact" className={styles.navLink}>
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;