'use client';

import { Text, Title } from '@/shared/ui/components/atoms';

export const NoDeals = () => {
  return (
    <section className="relative m-1 flex h-[350px] flex-col items-center justify-center gap-10 p-10 text-center max-md:p-6">
      <Title size="5xl" color="light" zIndex="1" align="center" uppercase>
        Currently No Special Deals Available
      </Title>
      <span className="z-10 mx-auto w-[554px] text-center max-md:w-full">
        <Text weight="medium" color="light">
          Unfortunately, there are no special deals for this type of bot at the
          moment. Please stay connected and check back later for updates on new
          offers and discounts.
          <br />
          <br />
          Thank you for your understanding!
        </Text>
      </span>
      <video
        src="/videos/deals/alert.mp4"
        autoPlay
        loop
        muted
        className="absolute right-0 bottom-0 h-full w-full rounded-lg object-cover grayscale filter"
      />
      <div className="absolute inset-0 bg-black/40" />
    </section>
  );
};
