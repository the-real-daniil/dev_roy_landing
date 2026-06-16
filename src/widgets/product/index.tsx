import {
  BookOpen,
  ClipboardCheck,
  GitPullRequest,
  ImageIcon,
  MapPin,
  MessagesSquare,
  Send,
  Users,
  Video,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { productFeatures } from '@/shared/config/landing';
import { SectionLabel } from '@/shared/section-label';
import { Screenshot } from './screenshot';
import styles from './product.module.css';

const featureIcons: Record<string, LucideIcon> = {
  '01': Send,
  '02': Video,
  '03': Users,
  '04': BookOpen,
  '05': GitPullRequest,
  '06': ClipboardCheck,
  '07': MessagesSquare,
  '08': MapPin,
};

export function Product() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.side} data-motion-reveal="left">
          <SectionLabel>что внутри</SectionLabel>
        </div>
        <div className={styles.intro}>
          <h2 className={styles.title} data-motion-reveal="up">
            Как это выглядит?
          </h2>
          <p className={styles.lead} data-motion-reveal="up">
            Это не записанный курс, а живое сопровождение. Вы получаете ментора, сообщество и
            систему, которые ведут вас до оффера. Каждый элемент приближает вас к результату.
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        {productFeatures.map((feature, index) => {
          const Icon = featureIcons[feature.id] ?? ImageIcon;

          return (
            <article
              className={styles.card}
              data-motion-delay={(index % 4) + 1}
              data-motion-reveal="up"
              data-pointer-card="true"
              key={feature.id}
            >
              <figure className={styles.media}>
                {feature.image ? (
                  <Screenshot src={feature.image} alt={feature.media} width={1788} height={1930} />
                ) : (
                  <div className={styles.placeholder} aria-hidden="true">
                    <ImageIcon size={34} strokeWidth={1.6} />
                    <span>{feature.media}</span>
                  </div>
                )}
                <figcaption className={styles.badge}>
                  <Icon size={20} strokeWidth={1.8} />
                  {feature.highlight ?? `0${index + 1}`}
                </figcaption>
              </figure>
              <div className={styles.copy}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
