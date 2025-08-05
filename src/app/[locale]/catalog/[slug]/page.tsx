import { getTranslations } from 'next-intl/server';

import { getBot } from '@/features/bots/api';
import { BotHeader, BotSuitableGrid, BotSummary } from '@/features/bots/ui';
import { BotWorks } from '@/features/bots/ui/bot-works';

import { CubesFooter } from '@/shared/ui/components/organisms';

export default async function CatalogPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;

  const { data } = await getBot({ slug, locale });

  const t = await getTranslations('botPage');

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
        title={t('footer.title')}
        text={t('footer.text')}
        metaButtons={[
          {
            label: t('footer.btn'),
            url: '/deals',
            variant: 'primary',
          },
          {
            label: t('footer.btn2'),
            url: '/bundles',
            variant: 'secondary',
          },
        ]}
      />
    </main>
  );
}
