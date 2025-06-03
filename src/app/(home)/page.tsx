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

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatWeOffer />
      <TopBots />
      <WhyChoose />
      <YouCanAchieve />
      <Stats />
      <HowItWorks />
      <Deals />
      <BotBundles />
      <NeedHelp />
      <ContactUs />
    </main>
  );
}
