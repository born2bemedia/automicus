import { useTranslations } from 'next-intl';

import { VideoHero } from '@/shared/ui/components/organisms';

export default function HelpCenter() {
  const t = useTranslations('helpCenter');

  return (
    <section>
      <VideoHero
        title={t('hero.title', { fallback: 'Learn. Trade. Succeed.' })}
        text={t('hero.text', {
          fallback:
            'Step-by-step tutorials and expert reviews to help you get the most out of Automicus bots.',
        })}
        videoUrl="/videos/help-center/hero.mp4"
        metaButton={{
          label: t('hero.btn', { fallback: 'Explore Bots' }),
          url: '/catalog',
        }}
      />
    </section>
  );
}
