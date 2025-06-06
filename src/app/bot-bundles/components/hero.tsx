'use client';

import { Button, Text, Title } from '@/shared/ui/components/atoms';

export const Hero = () => {
  return (
    <section className="relative flex h-[810px] flex-col items-center justify-center gap-9 px-6 pb-20 max-md:items-start max-md:justify-end">
      <section className="flex flex-col items-center justify-center gap-4 max-md:items-start max-md:justify-start">
        <Title
          size="6xl"
          zIndex="1"
          color="light"
          align="center"
          className="max-md:text-left"
        >
          Explore Our Bot Bundles
        </Title>
        <Text zIndex="2" weight="medium" color="light">
          Maximize savings with our exclusive bot bundles.
        </Text>
      </section>
      <Button variant="secondary" zIndex="2">
        Explore Bots
      </Button>
      <video
        src="/videos/bot-bundles/hero.mp4"
        autoPlay
        loop
        muted
        className="absolute right-0 bottom-0 h-full w-full object-cover grayscale filter"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/60" />
    </section>
  );
};
