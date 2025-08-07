'use client';

import Image from 'next/image';

import { cn } from '@/shared/lib/utils';
import { Text, Title } from '@/shared/ui/components/atoms';

import type { Bot } from '../model';

export const BotTitle = ({
  name,
  excerpt,
  className,
  titleClassName,
  subTitleClassName,
}: Pick<Bot, 'name' | 'excerpt'> & {
  className?: string;
  titleClassName?: string;
  subTitleClassName?: string;
}) => (
  <section
    className={cn(
      'relative flex h-[582px] w-[42%] flex-col items-center justify-center gap-5 rounded-lg bg-[rgba(229,229,229,0.10)] p-10 backdrop-blur-[15px] max-md:h-[334px] max-md:w-full',
      className,
    )}
  >
    <Title color="light" align="center" zIndex="1">
      <span
        className={cn('text-primary text-[64px] font-bold', titleClassName)}
      >
        {name.split(' ')[0]}
      </span>{' '}
      <br />
      <span className={cn('text-[36px] font-medium', subTitleClassName)}>
        {name.split(' ').slice(1).join(' ')}
      </span>
    </Title>
    <Text color="light" zIndex="1">
      {excerpt}
    </Text>
    <Image
      className="rounded-lg object-cover"
      src="/images/bot-page/bg.svg"
      alt="vector"
      fill
    />
  </section>
);
