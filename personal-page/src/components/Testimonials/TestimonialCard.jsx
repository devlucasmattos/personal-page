import styles from './styles.module.css';

const TestimonialCard = ({ testimonial }) => {
  const renderStars = () => {
    return Array(5).fill(0).map((_, i) => (
      <span 
        key={i} 
        className={`${styles.star} ${i < testimonial.rating ? styles.filled : ''}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className={styles.card}>
      <div className={styles.rating}>{renderStars()}</div>
      <p className={styles.content}>"{testimonial.content}"</p>
      <div className={styles.author}>
        <div className={styles.imageWrapper}>
          <img 
            src={`/assets/images/${testimonial.image}`} 
            alt={testimonial.name} 
          />
        </div>
        <div className={styles.authorInfo}>
          <h4 className={styles.name}>{testimonial.name}</h4>
          <p className={styles.role}>{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;