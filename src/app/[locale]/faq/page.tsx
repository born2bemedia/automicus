import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';

import { CubesFooter, VideoHero } from '@/shared/ui/components/organisms';

import { Answers } from './components';

export const metadata: Metadata = {
  title: 'FAQ | Automicus',
  description:
    'Explore our FAQ to learn more about Automicus trading bots, installation, usage, and troubleshooting. Get answers to common questions and improve your trading experience.',
  openGraph: {
    title: 'FAQ | Automicus',
    description:
      'Explore our FAQ to learn more about Automicus trading bots, installation, usage, and troubleshooting. Get answers to common questions and improve your trading experience.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | Automicus',
    description:
      'Explore our FAQ to learn more about Automicus trading bots, installation, usage, and troubleshooting. Get answers to common questions and improve your trading experience.',
  },
};

export default function FaqPage() {
  const t = useTranslations('faq');

  return (
    <main>
      <VideoHero
        title={t('hero.title', { fallback: 'Support for Smarter Trading.' })}
        text={t('hero.text', {
          fallback:
            'Find answers to common questions about top trading bots and Automicus.',
        })}
        videoUrl="/videos/faq/hero.mp4"
        metaButton={{
          label: t('hero.btn', { fallback: 'Contact Us' }),
          url: '/contact',
        }}
      />
      <Answers />
      <CubesFooter
        title={t('footer.title', { fallback: 'Need Help?' })}
        text={t('footer.text', {
          fallback:
            'Our resources are here to help, and our team is always ready to provide extra support.',
        })}
        metaButtons={[
          {
            label: t('footer.btn', { fallback: 'Contact Us' }),
            url: '/contact',
            variant: 'primary',
          },
          {
            label: t('footer.btn2', { fallback: 'Help Center' }),
            url: '/help-center',
            variant: 'secondary',
          },
        ]}
      />
    </main>
  );
}
