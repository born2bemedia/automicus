import type { useTranslations } from 'next-intl';

export const getTranslatedRoutes = (t: ReturnType<typeof useTranslations>) => [
  {
    label: t('catalog', { fallback: 'Catalog' }),
    url: '/catalog',
  },
  {
    label: t('botBundles', { fallback: 'Bot Bundles' }),
    url: '/bot-bundles',
  },
  {
    label: t('botReviews', { fallback: 'Bot Reviews' }),
    url: '/bot-reviews',
  },
  {
    label: t('deals', { fallback: 'Deals' }),
    url: '/deals',
  },
  {
    label: t('compareBots', { fallback: 'Compare Bots' }),
    url: '/compare-bots',
  },
  {
    label: t('aboutUs', { fallback: 'About Us' }),
    url: '/about-us',
  },
  {
    label: t('faq', { fallback: 'FAQ' }),
    url: '/faq',
  },
  {
    label: t('contact', { fallback: 'Contact' }),
    url: '/contact',
  },
  {
    label: t('helpCenter', { fallback: 'Help Center' }),
    url: '/help-center',
  },
];
