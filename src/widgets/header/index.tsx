import { navItems } from '@/shared/config/landing';
import { siteConfig } from '@/shared/config/site';
import { Button } from '@/shared/button';
import { Logo } from '@/shared/logo';
import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner} data-motion-reveal="down">
        <Logo />
        <nav className={styles.nav} aria-label="Основная навигация">
          {navItems.map((item, index) => (
            <a
              data-motion-delay={index + 1}
              data-motion-reveal="down"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button
          className={styles.cta}
          href={siteConfig.links.telegram}
          target="_blank"
          rel="noopener noreferrer"
        >
          Обсудить обучение
        </Button>
      </div>
    </header>
  );
}
