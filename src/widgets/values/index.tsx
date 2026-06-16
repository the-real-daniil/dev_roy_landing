import Image from 'next/image';
import { siteConfig } from '@/shared/config/site';
import { Button } from '@/shared/button';
import { HexIcon } from '@/shared/hex-icon';
import { SectionLabel } from '@/shared/section-label';
import styles from './values.module.css';

const items = [
  {
    iconSrc: '/icons/value-diagnostics.svg',
    iconWidth: 42,
    iconHeight: 42,
    title: 'Диагностика',
    text: 'текущего уровня, сильных и слабых сторон',
  },
  {
    iconSrc: '/icons/value-preparation.svg',
    iconWidth: 41,
    iconHeight: 44,
    title: 'Подготовка',
    text: 'плана развития и стратегий прохождения собеседований',
  },
  {
    iconSrc: '/icons/value-result.svg',
    iconWidth: 42,
    iconHeight: 42,
    title: 'Результат',
    text: 'это ваша карьера и высокая зарплата',
  },
];

export function Values() {
  return (
    <section className={styles.section}>
      <div className={styles.label} data-motion-reveal="left">
        <SectionLabel>ценности</SectionLabel>
      </div>
      <div className={styles.inner}>
        <h2 className={styles.title} data-motion-reveal="up">
          Три простых этапа для роста в карьере
        </h2>
        <p className={styles.lead} data-motion-delay="1" data-motion-reveal="up">
          «ДЕВ РОЙ» - пространство, где результат важнее маркетинга, качество - выше масштаба,
          человек - ценнее воронки.
        </p>
        <div className={styles.grid}>
          {items.map((item, index) => (
            <article
              className={styles.card}
              data-motion-delay={index + 1}
              data-motion-reveal="up"
              data-pointer-card="true"
              key={item.title}
            >
              <HexIcon className={styles.icon}>
                <Image src={item.iconSrc} alt="" width={item.iconWidth} height={item.iconHeight} />
              </HexIcon>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
          <Button
            className={styles.bigButton}
            data-motion-reveal="up"
            href={siteConfig.links.telegram}
            target="_blank"
            rel="noopener noreferrer"
            data-motion-delay="4"
            data-pointer-card="true"
          >
            Обсудить обучение
          </Button>
        </div>
      </div>
    </section>
  );
}
