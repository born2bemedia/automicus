import { getBot } from '@/features/bots/api';
import { BotHeader, BotSuitableGrid, BotSummary } from '@/features/bots/ui';
import { BotWorks } from '@/features/bots/ui/bot-works';

import { CubesFooter } from '@/shared/ui/components/organisms';

export default async function CatalogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data } = await getBot((await params).slug);
  return (
    <main>
      <BotHeader
        name={data.name}
        description={data.description}
        excerpt={data.excerpt}
        features={data.features}
        price={data.price}
      />
      <BotSuitableGrid suitableFor={data.suitableFor} />
      <BotWorks values={data.howItWorks} />
      <BotSummary name={data.name} text={data.summary} />
      <CubesFooter
        title="Need More?"
        text="Explore our Bundles and Special Deals to maximize your trading potential and save on multiple bots."
        metaButtons={[
          {
            label: 'Check Deals',
            url: '/deals',
            variant: 'primary',
          },
          {
            label: 'Check Bundles',
            url: '/bundles',
            variant: 'secondary',
          },
        ]}
      />
    </main>
  );
}
