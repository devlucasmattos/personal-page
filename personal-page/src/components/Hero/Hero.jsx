import styles from './styles.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.textContainer}>
          <h1 className={styles.heroTitle}>
            Transforme seu <span className={styles.highlight}>corpo</span> em 12 semanas
          </h1>
          <p className={styles.heroSubtitle}>
            Treinos personalizados para alcançar seus objetivos físicos com segurança e eficiência
          </p>
          <div className={styles.ctaContainer}>
            <a href="#contact" className={styles.primaryCta}>
              Agende sua avaliação gratuita
            </a>
            <a href="#about" className={styles.secondaryCta}>
              Conheça minha metodologia ↓
            </a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            {/* Imagem será colocada via background no CSS */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;