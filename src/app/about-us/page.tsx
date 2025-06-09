import { VideoHero } from '@/shared/ui/components/organisms';

import { AboutUsCards, StayConnected, WhyChooseUs } from './components';

export default function AboutUsPage() {
  return (
    <main>
      <VideoHero
        title="Efficiency in Automation. Excellence in Trading."
        text="A team of experts driving smarter trading solutions."
        videoUrl="/videos/about-us/hero.mp4"
        metaButton={{
          label: 'Get Assistance',
          url: '/contact',
        }}
      />
      <AboutUsCards />
      <WhyChooseUs />
      <StayConnected />
    </main>
  );
}
