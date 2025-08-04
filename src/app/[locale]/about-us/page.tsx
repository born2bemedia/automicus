import { getTranslations } from 'next-intl/server';

import { VideoHero } from '@/shared/ui/components/organisms';

import { AboutUsCards, StayConnected, WhyChooseUs } from './components';

export default async function AboutUsPage() {
  const t = await getTranslations('aboutUs.hero');

  return (
    <main>
      <VideoHero
        title={t('title', {
          fallback: 'Efficiency in Automation. Excellence in Trading.',
        })}
        text={t('text', {
          fallback: 'A team of experts driving smarter trading solutions.',
        })}
        videoUrl="/videos/about-us/hero.mp4"
        metaButton={{
          label: t('btn', { fallback: 'Get Assistance' }),
          url: '/contact',
        }}
      />
      <AboutUsCards />
      <WhyChooseUs />
      <StayConnected />
    </main>
  );
}
