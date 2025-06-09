import { getBotBundles, getBots } from '@/features/bots/api';

import {
  BotBundles,
  ContactUs,
  Deals,
  Hero,
  HowItWorks,
  NeedHelp,
  Stats,
  TopBots,
  WhatWeOffer,
  WhyChoose,
  YouCanAchieve,
} from './components';

export default async function HomePage() {
  const { data: bots } = await getBots({ params: { limit: 6 } });
  const { data: bundles } = await getBotBundles({ params: { limit: 3 } });

  return (
    <main>
      <Hero />
      <WhatWeOffer />
      <TopBots bots={bots.docs.slice(0, 3)} />
      <WhyChoose />
      <YouCanAchieve />
      <Stats />
      <HowItWorks />
      <Deals bots={bots.docs.slice(3, 6)} />
      <BotBundles bundles={bundles.docs} />
      <NeedHelp />
      <ContactUs />
    </main>
  );
}
