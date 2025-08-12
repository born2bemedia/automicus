import type { Metadata } from 'next';

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

export const metadata: Metadata = {
  title: 'Automated Trading Bots | Automicus',
  description:
    'Discover powerful trading bots tailored for precision, risk control, and consistent results in Forex and Gold markets.',
  openGraph: {
    title: 'Automated Trading Bots | Automicus',
    description:
      'Discover powerful trading bots tailored for precision, risk control, and consistent results in Forex and Gold markets.',
    images: ['https://automicus.com/meta.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automated Trading Bots | Automicus',
    description:
      'Discover powerful trading bots tailored for precision, risk control, and consistent results in Forex and Gold markets.',
    images: ['https://automicus.com/meta.jpg'],
  },
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const { data: bots } = await getBots({ params: { limit: 6, locale } });
  const { data: bundles } = await getBotBundles({
    params: { locale },
  });

  return (
    <main>
      <Hero />
      <WhatWeOffer />
      <TopBots
        bots={bots.docs
          .filter(
            bot =>
              bot.slug === 'automicus-goldtrade-master' ||
              bot.slug === 'automicus-profitpulse-fx' ||
              bot.slug === 'automicus-spreadmaster-fx',
          )
          .reverse()}
      />
      <WhyChoose />
      <YouCanAchieve />
      <Stats />
      <HowItWorks />
      <Deals bots={bots.docs.filter(bot => bot.pin).slice(0, 3)} />
      <BotBundles
        bundles={bundles.docs
          .filter(bundle => [10, 12, 14].includes(bundle.id))
          .reverse()}
      />
      <NeedHelp />
      <ContactUs />
    </main>
  );
}
