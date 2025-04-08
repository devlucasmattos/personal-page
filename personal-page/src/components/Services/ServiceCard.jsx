import styles from './styles.module.css';

const ServiceCard = ({ service }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{service.title}</h3>
        <p className={styles.cardDescription}>{service.description}</p>
      </div>
      <div className={styles.cardBody}>
        <ul className={styles.featuresList}>
          {service.features.map((feature, index) => (
            <li key={index} className={styles.featureItem}>
              <span className={styles.checkIcon}>✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.cardFooter}>
        <span className={styles.price}>{service.price}</span>
        <button className={styles.ctaButton}>Saiba mais</button>
      </div>
    </div>
  );
};

export default ServiceCard;