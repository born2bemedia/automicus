import { CompareBots } from '@/features/compare-bots/ui/compare-bots';

import { CubesFooter, VideoHero } from '@/shared/ui/components/organisms';

export default function CompareBotsPage() {
  return (
    <main>
      <VideoHero
        title="Compare Our Top Trading Bots."
        text="Explore key features and find the perfect bot for your trading style and goals."
        metaButton={{ label: 'Explore Bots', url: '/catalog' }}
        videoUrl="/videos/compare-bots/hero.mp4"
      />
      <CompareBots />
      <CubesFooter
        title="Special Deals & Bundles"
        text="Automicus offers exclusive discounts and curated bot bundles to help you save more while automating your trading."
        metaButtons={[
          { label: 'Check Deals', url: '/deals', variant: 'primary' },
          { label: 'Check Bundles', url: '/bot-bundles', variant: 'secondary' },
        ]}
        altVideoUrl="/videos/compare-bots/footer.mp4"
      />
    </main>
  );
}
