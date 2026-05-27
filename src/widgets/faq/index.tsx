'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { faqItems } from '@/shared/config/landing';
import { siteConfig } from '@/shared/config/site';
import { anchors } from '@/shared/lib/anchor';
import { Button } from '@/shared/button';
import styles from './faq.module.css';

export function Faq() {
  const [openId, setOpenId] = useState<string | null>('03');

  return (
    <section className={styles.section} id={anchors.faq}>
      <div className={styles.side} data-motion-reveal="left">
        <h2>Ответы на ключевые вопросы</h2>
        <Button
          className={styles.sideButton}
          data-motion-reveal="up"
          href={siteConfig.links.contact}
          variant="ghost"
        >
          Обсудить обучение
        </Button>
      </div>
      <div className={styles.list}>
        {faqItems.map((item) => {
          const isOpen = openId === item.id;
          const answerId = `faq-answer-${item.id}`;

          return (
            <article
              className={styles.item}
              data-motion-delay={item.id}
              data-motion-reveal="up"
              data-open={isOpen}
              data-pointer-card="true"
              key={item.id}
            >
              <div className={styles.question}>
                <span>{item.id}</span>
                <h3>{item.question}</h3>
                <button
                  aria-controls={answerId}
                  aria-expanded={isOpen}
                  aria-label={isOpen ? 'Свернуть ответ' : 'Открыть ответ'}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  type="button"
                  className={styles.answerButton}
                >
                  {isOpen ? <Minus size={22} /> : <Plus size={22} />}
                </button>
              </div>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.p
                    animate={{ height: 'auto', opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -8 }}
                    id={answerId}
                    initial={{ height: 0, opacity: 0, y: -8 }}
                    transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {item.answer}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </section>
  );
}
