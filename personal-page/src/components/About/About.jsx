import styles from './styles.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}></div>
        </div>
        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>
            Sobre <span className={styles.highlight}>Mim</span>
          </h2>
          <p className={styles.intro}>
            Meu nome é João Silva e sou Personal Trainer há mais de 8 anos.
          </p>
          <div className={styles.details}>
            <div className={styles.detailItem}>
              <h3>Minha Filosofia</h3>
              <p>
                Acredito em treinos inteligentes que respeitam a individualidade de cada aluno, 
                focando em resultados sustentáveis e saúde a longo prazo.
              </p>
            </div>
            <div className={styles.detailItem}>
              <h3>Minha Formação</h3>
              <ul className={styles.list}>
                <li>Bacharel em Educação Física</li>
                <li>Pós-graduação em Fisiologia do Exercício</li>
                <li>Certificação em Treinamento Funcional</li>
                <li>Especialização em Nutrição Esportiva</li>
              </ul>
            </div>
            <div className={styles.detailItem}>
              <h3>Minha Experiência</h3>
              <p>
                Já ajudei mais de 200 clientes a alcançarem seus objetivos, desde atletas 
                amadores até pessoas buscando qualidade de vida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;