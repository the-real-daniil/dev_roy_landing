import Image from 'next/image';
import { siteConfig } from '@/shared/config/site';
import styles from './logo.module.css';

export function Logo() {
  return (
    <a className={styles.logo} href={siteConfig.links.home} aria-label={siteConfig.name}>
      <Image src={siteConfig.assets.logo} alt="" width={120} height={52} priority />
    </a>
  );
}
