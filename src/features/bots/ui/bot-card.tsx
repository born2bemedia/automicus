import { cn } from '@/shared/lib/utils';
import { Button, Chip, Text } from '@/shared/ui/components/atoms';
import { NavButton } from '@/shared/ui/components/molecules';

import type { Bot } from '../model';

export const BotCard = ({
  description,
  name,
  price,
  discount,
  layoutClassName,
  slug,
  variant = 'simplify',
}: Bot & {
  variant?: 'simplify' | 'full';
  layoutClassName?: string;
}) => {
  return variant === 'simplify' ? (
    <article
      className={cn(
        'flex flex-col gap-6 rounded-lg bg-[#E5E5E5] p-10 max-md:gap-10',
        layoutClassName,
      )}
    >
      <section className="flex flex-col gap-2">
        <Text size="4xl" weight="bold">
          {name}
        </Text>
        <Text weight="medium">{description}</Text>
      </section>
      <section className="flex justify-between gap-2.5 max-md:flex-col">
        <Text size="4xl" weight="bold">
          €{price.toLocaleString()}
        </Text>
        <div className="flex items-center gap-2.5">
          <Button>Buy</Button>
          <NavButton
            url={`/catalog/${slug}`}
            variant="secondary"
            size="md"
            fullWidth
          >
            Explore
          </NavButton>
        </div>
      </section>
    </article>
  ) : (
    <article
      className={cn(
        `z-10 flex min-h-[582px] max-w-[350px] flex-col justify-between gap-4 rounded-lg bg-[rgba(229,229,229,0.1)] p-10 backdrop-blur-[15px] max-md:w-full`,
        layoutClassName,
      )}
    >
      <section className="flex flex-col gap-2">
        <Text size="3xl" color="light" weight="bold">
          {name}
        </Text>
        <Text color="light" weight="medium">
          {description}
        </Text>
      </section>
      <section className="flex flex-col gap-9">
        <div className="flex gap-2.5">
          <Text size="5xl" color="light" weight="bold">
            €{price.toLocaleString()}
          </Text>
          <Chip>Save {discount}!</Chip>
        </div>
        <div className="flex items-center gap-2.5">
          <Button fullWidth>Buy</Button>
          <NavButton
            url={`/catalog/${slug}`}
            size="md"
            variant="secondary"
            fullWidth
          >
            Explore
          </NavButton>
        </div>
      </section>
    </article>
  );
};
