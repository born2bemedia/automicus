'use client';

import { Button, Text, Title } from '@/shared/ui/components/atoms';

export const Hero = () => {
  return (
    <section className="relative h-[810px] w-full">
      <section className="flex h-full flex-col items-center justify-center gap-9 max-md:p-6">
        <section className="flex flex-col items-center justify-center gap-4">
          <Title size="8xl" zIndex="1" color="light" align="center">
            <span className="font-normal">Automate Smarter. </span>
            <br />
            Trade Better.
          </Title>
          <Text zIndex="2" color="light">
            Powerful trading bots designed to execute your strategy with
            precision.
          </Text>
        </section>
        <Button variant="secondary" zIndex="2">
          Explore Bots
        </Button>
      </section>
      <video
        src="/videos/home/hero.mp4"
        autoPlay
        loop
        muted
        className="absolute right-0 bottom-0 h-full w-full object-cover grayscale filter"
      />
      <div className="absolute inset-0 bg-black/40" />
    </section>
  );
};
