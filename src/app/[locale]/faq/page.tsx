import { CubesFooter, VideoHero } from '@/shared/ui/components/organisms';

import { Answers } from './components';

export default function FaqPage() {
  return (
    <main>
      <VideoHero
        title="Support for Smarter Trading."
        text="Find answers to common questions about top trading bots and Automicus."
        videoUrl="/videos/faq/hero.mp4"
        metaButton={{
          label: 'Contact Us',
          url: '/contact',
        }}
      />
      <Answers />
      <CubesFooter
        title="Need Help?"
        text="Our resources are here to help, and our team is always ready to provide extra support."
        metaButtons={[
          {
            label: 'Contact Us',
            url: '/contact',
            variant: 'primary',
          },
          {
            label: 'Help Center',
            url: '/help-center',
            variant: 'secondary',
          },
        ]}
      />
    </main>
  );
}
