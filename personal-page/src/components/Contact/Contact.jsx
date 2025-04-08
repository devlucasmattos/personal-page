import ContactForm from './ContactForm';
import styles from './styles.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            Entre em <span className={styles.highlight}>Contato</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Agende sua avaliação gratuita ou tire suas dúvidas
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <i className="fas fa-phone"></i>
              <div>
                <h3>Telefone</h3>
                <p>(11) 99999-9999</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>contato@personaltrainer.com</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Localização</h3>
                <p>Av. Paulista, 1000 - São Paulo/SP</p>
              </div>
            </div>
            <div className={styles.social}>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          <div className={styles.formContainer}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;