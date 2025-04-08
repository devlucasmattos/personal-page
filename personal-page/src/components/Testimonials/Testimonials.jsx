import styles from './styles.module.css';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Silva",
      role: "Cliente há 1 ano",
      content: "Perdi 12kg em 3 meses com o treino e acompanhamento do João. Melhor decisão que tomei para minha saúde!",
      rating: 5,
      image: "client-1.jpg"
    },
    {
      id: 2,
      name: "Ana Oliveira",
      role: "Cliente há 8 meses",
      content: "Nunca me senti tão forte e confiante. Os treinos são desafiadores mas sempre com segurança.",
      rating: 5,
      image: "client-2.jpg"
    },
    {
      id: 3,
      name: "Ricardo Santos",
      role: "Cliente há 6 meses",
      content: "Como atleta amador, o João me ajudou a melhorar meu desempenho em 40%. Profissional incrível!",
      rating: 4,
      image: "client-3.jpg"
    }
  ];

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            Histórias de <span className={styles.highlight}>Sucesso</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Veja o que meus clientes dizem sobre os resultados alcançados
          </p>
        </div>
        <div className={styles.cardsContainer}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;