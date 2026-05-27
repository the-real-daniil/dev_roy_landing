import { faqItems, programSteps, tariffs } from '@/shared/config/landing';
import { siteConfig } from '@/shared/config/site';

function formatList(items: string[]) {
  return items.map((item) => `- ${item}`).join('\n');
}

function buildLlmsText() {
  const tariffLines = tariffs.map((tariff) => {
    const priceNote = tariff.priceNote ? `, ${tariff.priceNote}` : '';
    return `- ${tariff.title}: ${tariff.price}${priceNote}. ${tariff.footer}`;
  });

  const programLines = programSteps.map(
    (step) => `- ${step.id}. ${step.title}: ${step.description}`,
  );
  const faqLines = faqItems.map((item) => `- ${item.question} ${item.answer ?? ''}`);

  return `# ${siteConfig.name}

> ${siteConfig.description}

${siteConfig.name} - русскоязычная школа карьерного роста для frontend-разработчиков. Сайт описывает обучение, тарифы, программу, результаты учеников, причины доверять проекту, FAQ и способы связи.

## Основной URL

- ${siteConfig.url}

## Ключевые запросы

${formatList(siteConfig.keywords)}

## Что предлагает проект

${formatList([
  'Диагностика карьеры и индивидуальная стратегия развития.',
  'Подготовка к собеседованиям на frontend-позиции.',
  'Разбор резюме, позиционирования и поиска работы.',
  'Пробные собеседования с обратной связью.',
  'Сопровождение при трудоустройстве и на испытательном сроке.',
])}

## Программа

${programLines.join('\n')}

## Тарифы

${tariffLines.join('\n')}

## Контакты

- Email: ${siteConfig.contacts.email}
- Telegram: ${siteConfig.contacts.telegramHandle}
- Telegram URL: ${siteConfig.links.telegram}

## Важные страницы и файлы

- Главная страница: ${siteConfig.url}
- Sitemap: ${siteConfig.url}/sitemap.xml
- Robots: ${siteConfig.url}/robots.txt

## Краткий FAQ

${faqLines.join('\n')}
`;
}

export function GET() {
  return new Response(buildLlmsText(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
