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
              <div className={styles.student}>
                <div>
                  <span className={styles.studentName}>
                    {result.name}, {result.age}
                  </span>
                  <div className={styles.title}>
                    {result.role}
                    <br />
                    {result.tariff}
                  </div>
                </div>
                <Image
                  className={styles.avatar}
                  src={result.avatarSrc}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.cardHeader}></div>
              <div className={styles.points}>
                <div className={styles.point}>
                  <span className={styles.pointLabel}>Точка А</span>
                  <ul className={styles.pointList}>
                    {result.pointA.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.point}>
                  <span className={styles.pointLabel}>Точка B</span>
                  <ul className={styles.pointList}>
                    {result.pointB.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={styles.meta}>
                <div className={styles.duration}>
                  Срок обучения: <span>{result.duration}</span>
                </div>
                <div className={styles.salary}>
                  Зарплата: <span>{result.salary}</span>
                </div>
              </div>
            </div>
            <a
              className={styles.link}
              href={result.reviewLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              смотреть весь отзыв
            </a>
          </article>
        ))}
      </div>
      <Button
        className={styles.all}
        data-motion-reveal="up"
        href={siteConfig.links.reviews}
        target="_blank"
        rel="noopener noreferrer"
      >
        Еще отзывы
      </Button>
    </section>
  );
}
