import { getBots } from '@/features/bots/api';
import { BotGroup } from '@/features/bots/ui/bot-group';

import { CubesFooter, VideoHero } from '@/shared/ui/components/organisms';

export default async function CatalogPage() {
  const { data } = await getBots();

  return (
    <main>
      <VideoHero
        title="Explore Our Bots"
        text="Advanced automation for smarter, faster trading."
        videoUrl="/videos/catalog/hero.mp4"
        metaButton={{
          label: 'Get Assistance',
          url: '/contact',
        }}
      />
      <BotGroup bots={data.docs} limit={2} />
      <CubesFooter
        title="Special Deals & Bundles"
        text="Automicus offers exclusive discounts and curated bot bundles to help you save more while automating your trading."
        metaButtons={[
          {
            label: 'Check Deals',
            url: '/catalog',
            variant: 'primary',
          },
          {
            label: 'Check Bundles',
            url: '/bot-bundles',
            variant: 'secondary',
          },
        ]}
      />
    </main>
  );
}
