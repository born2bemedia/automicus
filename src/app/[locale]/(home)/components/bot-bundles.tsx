'use client';

import { useTranslations } from 'next-intl';

import type { BotBundle } from '@/features/bots/model';
import { BotBundleCard } from '@/features/bots/ui';

import { Button, Title } from '@/shared/ui/components/atoms';

import { Link } from '@/i18n/navigation';

export const BotBundles = ({ bundles }: { bundles: BotBundle[] }) => {
  const t = useTranslations('home.botBundles');

  return (
    <section className="flex flex-col gap-10 px-10 pt-10 pb-20 max-md:p-6">
      <header className="flex items-center justify-between">
        <Title color="light" uppercase>
          {t('title', { fallback: 'Bot Bundles' })}
        </Title>
        <div className="max-md:hidden">
          <Link href="/bot-bundles">
            <Button variant="secondary">
              {t('allBundles', { fallback: 'All Bot Bundles' })}
            </Button>
          </Link>
        </div>
      </header>
      <section className="flex flex-col gap-1">
        {bundles.map((bundle, i) => (
          <BotBundleCard key={bundle.name + i} {...bundle} />
        ))}
      </section>
    </section>
  );
};
