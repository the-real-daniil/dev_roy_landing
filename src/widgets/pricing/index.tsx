import { CheckCircle2, Info } from 'lucide-react';
import { tariffs } from '@/shared/config/landing';
import { siteConfig } from '@/shared/config/site';
import { anchors } from '@/shared/lib/anchor';
import { Button } from '@/shared/button';
import styles from './pricing.module.css';

export function Pricing() {
  return (
    <section className={styles.section} id={anchors.pricing}>
      <div className={styles.heading} data-motion-reveal="up">
        <h2>Как попасть на обучение</h2>
        <p>Карьера в IT - это система, а не удача. Начинайте сейчас.</p>
      </div>
      <div className={styles.grid}>
        {tariffs.map((tariff, index) => (
          <article
            className={styles.card}
            data-featured={tariff.featured}
            data-motion-delay={index + 1}
            data-motion-reveal="up"
            data-pointer-card="true"
            key={tariff.title}
          >
            {tariff.marker ? <span className={styles.marker}>{tariff.marker}</span> : null}
            <h3>{tariff.title}</h3>
            <div className={styles.body}>
              <ul className={styles.list}>
                <strong className={styles.strong}>Что входит в пакет:</strong>
                {tariff.features.map((feature) => (
                  <li className={styles.listItem} key={feature}>
                    <CheckCircle2 aria-hidden="true" size={24} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className={styles.price}>
                <strong>{tariff.price}</strong>
                {tariff.priceNote ? (
                  <span className={styles.tariffNote}>{tariff.priceNote}</span>
                ) : null}
              </div>
              <div className={styles.footBox}>
                <Button
                  endAdornment={null}
                  className={styles.tariffButton}
                  href={siteConfig.links.contact}
                  variant={tariff.buttonVariant}
                >
                  Начать
                </Button>
                <p className={styles.footer}>{tariff.footer}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.note} data-motion-reveal="right">
        <Info aria-hidden="true" size={18} />
        <span>Выплату % от зарплаты можно разбить на 3 месяца</span>
      </div>
    </section>
  );
}
