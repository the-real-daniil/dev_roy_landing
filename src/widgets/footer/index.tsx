import { Mail, Send } from 'lucide-react';
import { footerLinks, siteConfig } from '@/shared/config/site';
import { anchors } from '@/shared/lib/anchor';
import { Logo } from '@/shared/logo';
import styles from './footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer} id={anchors.contact}>
      <div className={styles.grid}>
        <div className={styles.brand} data-motion-reveal="left">
          <Logo inverted />
          <div className={styles.socials}>
            <a
              className={styles.social}
              aria-label={footerLinks.socials.email.label}
              href={footerLinks.socials.email.href}
            >
              <Mail size={24} />
            </a>
            <a
              className={styles.social}
              aria-label={footerLinks.socials.telegram.label}
              href={footerLinks.socials.telegram.href}
            >
              <Send size={24} />
            </a>
          </div>
        </div>
        <div data-motion-delay="1" data-motion-reveal="up">
          <h2 className={styles.title}>Контакты</h2>
          <p className={styles.contact}>Email: {siteConfig.contacts.email}</p>
          <p className={styles.contact}>Telegram: {siteConfig.contacts.telegramHandle}</p>
        </div>
        <div data-motion-delay="2" data-motion-reveal="up">
          <h2 className={styles.title}>Полезное</h2>
          {footerLinks.legal.map((link) => (
            <a className={styles.paragraph} href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <p className={styles.copy}>© 2026 «ДЕВ РОЙ» - Все права защищены</p>
    </footer>
  );
}
