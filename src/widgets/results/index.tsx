import Image from 'next/image';
import { results } from '@/shared/config/landing';
import { siteConfig } from '@/shared/config/site';
import { anchors } from '@/shared/lib/anchor';
import { Button } from '@/shared/button';
import { SectionLabel } from '@/shared/section-label';
import styles from './results.module.css';

export function Results() {
  return (
    <section className={styles.section} id={anchors.results}>
      <div className={styles.header} data-motion-reveal="up">
        <SectionLabel>итог</SectionLabel>
        <h2>Результаты учеников</h2>
        <p>
          Обучение в «ДЕВ РОЙ» даёт возможность повысить уровень, найти достойную работу и стать
          увереннее
        </p>
      </div>
      <div className={styles.grid}>
        {results.map((result, index) => (
          <article
            className={styles.card}
            data-motion-delay={index + 1}
            data-motion-reveal="up"
            data-pointer-card="true"
            key={`${result.avatarSrc}-${result.salary}`}
          >
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <div className={styles.title}>
                  <h3>{result.tariff}</h3>
                  <strong>{result.role}</strong>
                </div>
                <Image
                  className={styles.avatar}
                  src={result.avatarSrc}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <p className={styles.description}>{result.text}</p>
              <div className={styles.salary}>
                Зарплата: <span>{result.salary}</span>
              </div>
            </div>
            <a className={styles.link} href={siteConfig.links.contact}>
              смотреть весь отзыв
            </a>
          </article>
        ))}
      </div>
      <Button className={styles.all} data-motion-reveal="up" href={siteConfig.links.contact}>
        Все отзывы
      </Button>
    </section>
  );
}
