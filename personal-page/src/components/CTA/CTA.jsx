import styles from './styles.module.css';

const CTA = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Pronto para transformar seu corpo?</h2>
          <p className={styles.subtitle}>Agende sua avaliação gratuita hoje mesmo!</p>
          <div className={styles.buttons}>
            <a href="#contact" className={styles.primaryButton}>
              <i className="fab fa-whatsapp"></i> Agendar por WhatsApp
            </a>
            <a href="tel:+5511999999999" className={styles.secondaryButton}>
              <i className="fas fa-phone"></i> Ligar agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;