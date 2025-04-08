import styles from './styles.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.about}>
            <h3 className={styles.logo}>
              Personal<span>Trainer</span>
            </h3>
            <p>
              Transformando vidas através do exercício físico com metodologia científica e acompanhamento personalizado.
            </p>
          </div>
          <div className={styles.links}>
            <h3>Links Rápidos</h3>
            <ul>
              <li><a href="#home">Início</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#testimonials">Depoimentos</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>
          <div className={styles.contactInfo}>
            <h3>Contato</h3>
            <ul>
              <li><i className="fas fa-phone"></i> (11) 99999-9999</li>
              <li><i className="fas fa-envelope"></i> contato@personaltrainer.com</li>
              <li><i className="fas fa-map-marker-alt"></i> Av. Paulista, 1000 - SP</li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {currentYear} Personal Trainer. Todos os direitos reservados.</p>
          <div className={styles.social}>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;