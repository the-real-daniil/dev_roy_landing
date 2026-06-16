import type { NextConfig } from 'next';

const isDev = process.env.NODE_ENV === 'development';

// В dev-режиме Next.js (HMR / React Refresh) использует eval, поэтому
// в development необходим 'unsafe-eval'. В production он не нужен.
const scriptSrc = isDev
  ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
  : "script-src 'self' 'unsafe-inline'";

const securityHeaders = [
  // Запрещаем встраивание сайта в iframe (защита от clickjacking)
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  // Запрещаем браузеру угадывать MIME-тип (защита от MIME-sniffing)
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Ограничиваем передачу Referer на внешние ресурсы
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Отключаем доступ к чувствительным API браузера (сайту они не нужны)
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  },
  // Принудительный HTTPS на 2 года, включая поддомены
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  // CSP: загрузка ресурсов только с собственного домена.
  // 'unsafe-inline' для script/style необходим из-за inline-скриптов
  // гидрации Next.js и инлайн-стилей; frame-ancestors дублирует X-Frame-Options.
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      scriptSrc,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self'",
      "connect-src 'self'",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      'upgrade-insecure-requests',
    ].join('; '),
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
