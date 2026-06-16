import Image from 'next/image';
import { ArrowRight, Dot } from 'lucide-react';
import { siteConfig } from '@/shared/config/site';
import { Button } from '@/shared/button';
import { SectionLabel } from '@/shared/section-label';
import styles from './trust.module.css';

const facts = [
  'Работал в топовых компаниях: Яндекс, Лаборатория Касперского, крупный международный финтех',
  'Прошел путь от стажера до старшего разработчика',
  'Действующий разработчик, понимаю актуальные требования рынка, регулярно хожу на собеседования',
];

export function Trust() {
  return (
    <section className={styles.section}>
      <div className={styles.label} data-motion-reveal="up">
        <div>
          <SectionLabel>доверие</SectionLabel>
        </div>
        <h2 className={styles.title}>Почему мне стоит доверять</h2>
      </div>

      <div className={styles.grid}>
        <figure className={styles.person} data-motion-reveal="left" data-pointer-card="true">
          <Image
            className={styles.stage}
            src="/images/daniil-stage.png"
            alt="Даниил Лаптев выступает на мероприятии"
            width={591}
            height={716}
          />
          <figcaption>
            <strong>Даниил Лаптев</strong>
            <span>Сеньор фронтенд разработчик & руководитель карьерной школы</span>
          </figcaption>
        </figure>
        <div className={styles.content}>
          <div className={styles.metrics}>
            <div
              className={styles.metric}
              data-motion-delay="1"
              data-motion-reveal="zoom"
              data-pointer-card="true"
            >
              <strong>6</strong>
              <span>лет в IT</span>
            </div>
            <div
              className={styles.metric}
              data-motion-delay="2"
              data-motion-reveal="zoom"
              data-pointer-card="true"
            >
              <strong>30+</strong>
              <span>трудоустроенных учеников</span>
            </div>
            <div
              className={`${styles.metric} ${styles.hot}`}
              data-motion-delay="3"
              data-motion-reveal="zoom"
              data-pointer-card="true"
            >
              <strong>400к+</strong>
              <span>зарплата</span>
            </div>
          </div>
          <ol className={styles.facts}>
            {facts.map((fact, index) => (
              <li data-motion-delay={index + 1} data-motion-reveal="up" key={fact}>
                <span>0{index + 1}</span>
                {fact}
              </li>
            ))}
            <div className={styles.links} data-motion-reveal="up">
              <a
                href={siteConfig.links.youtubeInterviews}
                target="_blank"
                rel="noopener noreferrer"
              >
                Смотри записи моих собесов
                <div className={styles.arrow}>
                  <Dot />
                  <Dot />
                  <ArrowRight aria-hidden="true" size={42} strokeWidth={1.6} />
                </div>
              </a>
              <Button
                className={styles.contactButton}
                href={siteConfig.links.telegram}
                target="_blank"
                rel="noopener noreferrer"
                variant="solid"
              >
                Телеграм-канал
              </Button>
              <Button
                className={styles.contactButton}
                href={siteConfig.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                variant="solid"
              >
                YouTube-канал
              </Button>
            </div>
          </ol>
        </div>
      </div>
    </section>
  );
}
