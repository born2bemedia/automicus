'use client';

import { Title } from '@/shared/ui/components/atoms';

export const YouCanAchieve = () => {
  return (
    <section className="relative m-1 h-[396px]">
      <section className="flex h-full items-end justify-center p-10">
        <Title color="light" zIndex="1" align="center" uppercase>
          What You Can Achieve with Our Bots
        </Title>
      </section>
      <video
        src="/videos/home/achieve.mp4"
        autoPlay
        loop
        muted
        className="absolute right-0 bottom-0 h-full w-full rounded-lg object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[46.15%] to-black to-100%" />
    </section>
  );
};
