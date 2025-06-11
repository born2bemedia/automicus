'use client';

import { Button, Divider, Text, Title } from '@/shared/ui/components/atoms';
import { FeatureList } from '@/shared/ui/components/molecules';

import type { Bot } from '../model';
import { BotTitle } from './bot-title';

export const BotHeader = ({
  description,
  excerpt,
  features,
  name,
  price,
}: Pick<Bot, 'name' | 'description' | 'features' | 'price' | 'excerpt'>) => {
  return (
    <header className="flex items-center gap-10 p-10 max-md:flex-col max-md:p-6">
      <BotTitle name={name} excerpt={excerpt} />
      <section className="flex w-[58%] flex-col gap-10 max-md:w-full">
        <div className="flex flex-col gap-2.5">
          <Title color="light">{name}</Title>
          <Text color="light" weight="medium">
            {description}
          </Text>
        </div>
        <Divider />
        <Title as="h3" color="light" weight="bold">
          €{price}
        </Title>
        <Divider />
        <section className="flex flex-col gap-4">
          <Text size="xl" weight="bold" color="light">
            Technical Features:
          </Text>
          <FeatureList values={features} />
        </section>
        <Button size="md">Add to Card</Button>
      </section>
    </header>
  );
};
