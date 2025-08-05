import { getTranslations } from 'next-intl/server';

import { getBotBundles } from '@/features/bots/api';
import { BotBundleGroup } from '@/features/bots/ui';

import { VideoHero } from '@/shared/ui/components/organisms';

import { ContactUs } from './components';

export default async function BotBundlesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { data } = await getBotBundles({ params: { locale } });

  const t = await getTranslations('botBundles.hero');

  return (
    <main>
      <VideoHero
        title={t('title', { fallback: 'Explore Our Bot Bundles' })}
        text={t('text', {
          fallback: 'Maximize savings with our exclusive bot bundles.',
        })}
        videoUrl="/videos/bot-bundles/hero.mp4"
        metaButton={{
          label: t('btn', { fallback: 'Get Assistance' }),
          url: '/contact',
        }}
      />
      <BotBundleGroup bundles={data.docs} />
      <ContactUs />
    </main>
  );
}
