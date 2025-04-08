import { useState, useEffect } from 'react';
import styles from './styles.module.css';

const ResultsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const results = [
    {
      id: 1,
      before: '/assets/images/results/before-1.jpg',
      after: '/assets/images/results/after-1.jpg',
      name: 'Ana Clara',
      period: '3 meses de treino'
    },
    {
      id: 2,
      before: '/assets/images/results/before-2.jpg',
      after: '/assets/images/results/after-2.jpg',
      name: 'Carlos Eduardo',
      period: '5 meses de treino'
    },
    {
      id: 3,
      before: '/assets/images/results/before-3.jpg',
      after: '/assets/images/results/after-3.jpg',
      name: 'Mariana Santos',
      period: '4 meses de treino'
    }
  ];

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === results.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [results.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className={styles.carouselSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Resultados <span className={styles.highlight}>Reais</span>
        </h2>
        <p className={styles.sectionSubtitle}>
          Veja a transformação dos nossos alunos
        </p>
        
        <div className={styles.carousel}>
          <div 
            className={styles.carouselInner}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {results.map((result) => (
              <div key={result.id} className={styles.slide}>
                <div className={styles.comparisonContainer}>
                  <div className={styles.imageWrapper}>
                    <img src={result.before} alt={`${result.name} antes`} />
                    <div className={styles.label}>Antes</div>
                  </div>
                  <div className={styles.imageWrapper}>
                    <img src={result.after} alt={`${result.name} depois`} />
                    <div className={styles.label}>Depois</div>
                  </div>
                </div>
                <div className={styles.resultInfo}>
                  <h3>{result.name}</h3>
                  <p>{result.period}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.indicators}>
            {results.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsCarousel;