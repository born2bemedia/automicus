'use client';

import { Text, Title } from '@/shared/ui/components/atoms';
import { NavButton } from '@/shared/ui/components/molecules';

export const ContactUs = () => {
  return (
    <section className="relative m-1 flex h-[350px] items-center justify-center p-10 max-md:p-6">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col gap-2.5 text-center">
          <Title size="7xl" color="light" zIndex="1" align="center" uppercase>
            Special Deals & Bots
          </Title>
          <span className="z-10 mx-auto w-[554px] text-center max-md:w-full">
            <Text weight="medium" color="light">
              Automicus offers exclusive discounts and curated bot bundles to
              help you save more while automating your trading.
            </Text>
          </span>
        </div>
        <section className="flex items-center gap-5">
          <NavButton url="/deals" size="md" variant="primary">
            Check Deals
          </NavButton>
          <NavButton url="/bots" size="md" variant="secondary">
            Check All Bots
          </NavButton>
        </section>
      </div>
      <video
        src="/videos/bot-bundles/contact.mp4"
        autoPlay
        loop
        muted
        className="absolute right-0 bottom-0 h-full w-full rounded-lg object-cover grayscale filter"
      />
      <div className="absolute inset-0 bg-black/40" />
    </section>
  );
};
