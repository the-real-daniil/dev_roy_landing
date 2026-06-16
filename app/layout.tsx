import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { siteConfig } from '@/shared/config/site';
import '@/app/globals.css';

const openGraphImage = {
  url: siteConfig.assets.openGraphImage,
  width: 591,
  height: 716,
  alt: 'Даниил Лаптев выступает на мероприятии',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: siteConfig.links.home,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.links.home,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website',
    images: [openGraphImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.assets.openGraphImage],
  },
  icons: {
    icon: siteConfig.assets.icon,
    shortcut: siteConfig.assets.icon,
    apple: siteConfig.assets.appleIcon,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.assets.logo}`,
  description: siteConfig.description,
  email: siteConfig.contacts.email,
  sameAs: [siteConfig.links.telegram, siteConfig.links.youtube],
  founder: {
    '@type': 'Person',
    name: 'Даниил Лаптев',
    jobTitle: 'Сеньор фронтенд разработчик',
    sameAs: siteConfig.links.telegram,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: siteConfig.contacts.email,
    contactType: 'customer support',
    availableLanguage: ['ru'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
