import { problems } from '@/shared/config/landing';
import { SectionLabel } from '@/shared/section-label';
import styles from './problems.module.css';

export function Problems() {
  return (
    <section className={styles.section}>
      <div className={styles.side} data-motion-reveal="left">
        <SectionLabel>проблематика</SectionLabel>
        <div className={styles.bottom}>
          <p>
            Хотите совершить карьерный скачок?
            <br />
            <span>Листайте ниже!</span>
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <h2 className={styles.heading} data-motion-reveal="up">
          Пора что-то менять, если:
        </h2>
        <div className={styles.list}>
          {problems.map((problem, index) => (
            <article
              className={styles.row}
              data-motion-delay={index + 1}
              data-motion-reveal={index % 2 === 0 ? 'right' : 'left'}
              data-pointer-card="true"
              key={problem.id}
            >
              <span className={styles.number}>{problem.id}</span>
              <h3 className={styles.title}>{problem.title}</h3>
              <p className={styles.description}>{problem.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
