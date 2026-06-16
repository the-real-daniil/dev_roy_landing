import styles from './hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero} data-motion-reveal="zoom" data-pointer-card="true">
      <h1 className={styles.header} data-motion-delay="2" data-motion-reveal="up">
        Пройдите обучение с сеньор-разработчиком и увеличьте свою зарплату
      </h1>
      <div className={styles.badge} data-motion-delay="1" data-motion-reveal="down">
        Менторство для фронтенд-разработчиков
      </div>
    </section>
  );
}
