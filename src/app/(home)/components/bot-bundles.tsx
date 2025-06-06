'use client';

import type { BotBundle } from '@/features/bots/model';
import { BotBundleCard } from '@/features/bots/ui';

import { Button, Title } from '@/shared/ui/components/atoms';

export const BotBundles = ({ bundles }: { bundles: BotBundle[] }) => {
  return (
    <section className="flex flex-col gap-10 px-10 pt-10 pb-20 max-md:p-6">
      <header className="flex items-center justify-between">
        <Title color="light" uppercase>
          Bot Bundles
        </Title>
        <div className="max-md:hidden">
          <Button variant="secondary">All Bot Bundles</Button>
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
