import { Button, Text } from '@/shared/ui/components/atoms';

import type { Bot } from '../model';

export const BotCard = ({ description, name, price }: Bot) => (
  <article className="flex flex-col gap-6 rounded-lg bg-[#E5E5E5] p-10 max-md:gap-10">
    <section className="flex flex-col gap-2">
      <Text size="4xl" weight="bold">
        {name}
      </Text>
      <Text weight="medium">{description}</Text>
    </section>
    <section className="flex justify-between gap-2.5 max-md:flex-col">
      <Text size="4xl" weight="bold">
        €{price}
      </Text>
      <div className="flex items-center gap-2.5">
        <Button>Buy</Button>
        <Button variant="secondary">Explore</Button>
      </div>
    </section>
  </article>
);
