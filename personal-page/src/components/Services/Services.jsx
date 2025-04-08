import styles from './styles.module.css';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Treino Personalizado',
      description: 'Programa 100% individualizado com acompanhamento presencial',
      features: [
        'Avaliação física completa',
        'Plano de treino mensal',
        'Acompanhamento nutricional básico',
        'Ajustes semanais'
      ],
      price: 'R$ 300/mês'
    },
    {
      id: 2,
      title: 'Treino em Dupla',
      description: 'Ideal para casais ou amigos com objetivos similares',
      features: [
        'Avaliação física individual',
        'Treinos compartilhados',
        'Economia para ambos',
        'Motivação em dobro'
      ],
      price: 'R$ 200/mês por pessoa'
    },
    {
      id: 3,
      title: 'Treino Online',
      description: 'Para quem prefere treinar em casa ou na academia',
      features: [
        'Plano de treino mensal',
        'Videochamadas semanais',
        'Acesso à plataforma exclusiva',
        'Suporte via WhatsApp'
      ],
      price: 'R$ 150/mês'
    }
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            Meus <span className={styles.highlight}>Serviços</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Ofereço diferentes modalidades para atender suas necessidades e objetivos
          </p>
        </div>
        <div className={styles.cardsContainer}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;