import { anchors } from '@/shared/lib/anchor';

const email = 'iwant@therealdaniil.ru';
const telegramUrl = 'https://t.me/the_real_daniil';
const youtubeUrl = 'https://www.youtube.com/@the.real.daniil.23';
const youtubeInterviewsUrl =
  'https://youtube.com/playlist?list=PLfwvG6fycyyNhTB7h-O6Nj1rJBYfvvbzo&si=vSCcs6bdYfIZzDKk';
const reviewsUrl = 'https://t.me/the_real_daniil_feedback';
const offerUrl = 'https://disk.yandex.ru/i/L8Cm9uYTlL23pA';
const privacyPolicyUrl = 'https://disk.yandex.ru/i/1h1KkzWkpSNKAg';

export const siteConfig = {
  name: 'ДЕВ РОЙ',
  title: 'ДЕВ РОЙ — школа карьерного роста для фронтед-разработчиков',
  description: 'Обучение для роста фронтенд-разработчиков и выхода на новую зарплату.',
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
    youtubeInterviews: youtubeInterviewsUrl,
    reviews: reviewsUrl,
    offer: offerUrl,
    privacyPolicy: privacyPolicyUrl,
  },
  assets: {
    icon: '/icon.svg',
    logo: '/icons/devroy-logo.svg',
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
    { label: 'Политика конфиденциальности', href: siteConfig.links.privacyPolicy },
    { label: 'Публичная оферта', href: siteConfig.links.offer },
  ],
};
