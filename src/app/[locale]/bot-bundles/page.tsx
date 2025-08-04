import { getBotBundles } from '@/features/bots/api';
import { BotBundleGroup } from '@/features/bots/ui';

import { VideoHero } from '@/shared/ui/components/organisms';

import { ContactUs } from './components';

export default async function BotBundlesPage() {
  const { data } = await getBotBundles();

  return (
    <main>
      <VideoHero
        title="Explore Our Bot Bundles"
        text="Maximize savings with our exclusive bot bundles."
        videoUrl="/videos/bot-bundles/hero.mp4"
        metaButton={{
          label: 'Get Assistance',
          url: '/contact',
        }}
      />
      <BotBundleGroup bundles={data.docs} />
      <ContactUs />
    </main>
  );
}
