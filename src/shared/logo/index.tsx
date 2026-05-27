import Image from 'next/image';
import clsx from 'clsx';
import { siteConfig } from '@/shared/config/site';
import styles from './logo.module.css';

type LogoProps = {
  inverted?: boolean;
};

export function Logo({ inverted = false }: LogoProps) {
  return (
    <a
      className={clsx(styles.logo, inverted && styles.inverted)}
      href={siteConfig.links.home}
      aria-label={siteConfig.name}
    >
      {inverted ? (
        <span className={styles.footerText}>«ДЕВ РОЙ»</span>
      ) : (
        <Image src={siteConfig.assets.logo} alt="" width={120} height={52} priority />
      )}
    </a>
  );
}
