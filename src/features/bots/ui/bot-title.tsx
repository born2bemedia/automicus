'use client';

import Image from 'next/image';

import { Text, Title } from '@/shared/ui/components/atoms';

import type { Bot } from '../model';

export const BotTitle = ({ name, excerpt }: Pick<Bot, 'name' | 'excerpt'>) => (
  <section className="relative flex h-[582px] w-[42%] flex-col items-center justify-center gap-5 rounded-lg bg-[rgba(229,229,229,0.10)] p-10 backdrop-blur-[15px] max-md:h-[334px] max-md:w-full">
    <Title color="light" align="center" zIndex="1">
      <span className="text-primary text-[64px] font-bold">
        {name.split(' ')[0]}
      </span>{' '}
      <br />
      <span className="text-[36px] font-medium">
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
