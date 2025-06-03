'use client';

import { Title } from '@/shared/ui/components/atoms';
import { NavButton } from '@/shared/ui/components/molecules';

export const ContactUs = () => {
  return (
    <section className="relative m-1 flex h-[350px] items-center justify-center p-10 max-md:p-6">
      <div className="flex flex-col items-center justify-center gap-10">
        <Title size="7xl" color="light" zIndex="1" align="center" uppercase>
          Still Have Questions?
        </Title>
        <NavButton url="/contact-us" size="md" variant="secondary">
          Contact Us
        </NavButton>
      </div>
      <video
        src="/videos/home/numbers.mp4"
        autoPlay
        loop
        muted
        className="absolute right-0 bottom-0 h-full w-full rounded-lg object-cover grayscale filter"
      />
    </section>
  );
};
