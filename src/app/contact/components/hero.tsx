'use client';

import { VideoHero } from '@/shared/ui/components/organisms';

import { ContactUs } from './contact-us';

export const Hero = () => {
  return (
    <section className="m-1 flex gap-1 max-lg:flex-col">
      <VideoHero
        title="We’re Here to Help. Reach Out Anytime."
        text="Get in touch with our team for any questions, support, or assistance."
        videoUrl="/videos/contact/hero.mp4"
        metaButton={{ label: 'Check FAQ', url: '/faq' }}
        className="w-1/2 max-lg:h-[380px] max-lg:w-full"
        filter="rounded-lg bg-[#181818]/75"
      />
      <ContactUs />
    </section>
  );
};
