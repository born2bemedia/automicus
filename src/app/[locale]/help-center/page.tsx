import { VideoHero } from '@/shared/ui/components/organisms';

export default function HelpCenter() {
  return (
    <section>
      <VideoHero
        title="Learn. Trade. Succeed."
        text="Step-by-step tutorials and expert reviews to help you get the most out of Automicus bots."
        videoUrl="/videos/help-center/hero.mp4"
        metaButton={{ label: 'Explore Bots', url: '/catalog' }}
      />
    </section>
  );
}
