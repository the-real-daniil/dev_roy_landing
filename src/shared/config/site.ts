import { anchors } from '@/shared/lib/anchor';

const email = 'iwant@therealdaniil.ru';
const telegramUrl = 'https://t.me/the_real_daniil';
const youtubeUrl = 'https://youtube.com';

export const siteConfig = {
  name: 'ДЕВ РОЙ',
  title: 'ДЕВ РОЙ - школа карьерного роста',
  description:
    'Обучение с сеньор-разработчиком для роста фронтенд-разработчиков и выхода на новую зарплату.',
  keywords: [
    'ДЕВ РОЙ',
    'карьерный рост фронтенд разработчика',
    'подготовка к собеседованию frontend',
    'ментор frontend',
    'обучение frontend разработчиков',
    'резюме frontend разработчика',
    'пробные собеседования frontend',
  ],
  url: 'https://therealdaniil.ru',
  locale: 'ru_RU',
  contacts: {
    email,
    telegramHandle: '@the_real_daniil',
  },
  links: {
    home: '/',
    contact: `#${anchors.contact}`,
    email: `mailto:${email}`,
    telegram: telegramUrl,
    youtube: youtubeUrl,
  },
  assets: {
    icon: '/icon.svg',
    logo: '/images/devroy-logo.png',
    openGraphImage: '/images/daniil-stage.png',
    appleIcon: '/icon.svg',
  },
};

export const footerLinks = {
  socials: {
    email: { label: 'Email', href: siteConfig.links.email },
    telegram: { label: 'Telegram', href: siteConfig.links.telegram },
  },
  legal: [
    { label: 'Политика конфиденциальности', href: siteConfig.links.contact },
    { label: 'Публичная оферта', href: siteConfig.links.contact },
  ],
};
