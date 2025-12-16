'use client';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import type { Bot } from '@/features/bots/model';
import { BotTitle } from '@/features/bots/ui/bot-title';

import { Button } from '@/shared/ui/components/atoms/button';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { DownloadIcon } from '@/shared/ui/icons/fill/download';
import { EyeIcon } from '@/shared/ui/icons/fill/eye';
import { PlayIcon } from '@/shared/ui/icons/fill/play';

import { NoAvailableBots } from './no-available-bots';

export const PurchasedBots = ({ values }: { values: Bot[] }) => {
  const t = useTranslations('account.bots');

  return values.length ? (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <Title as="h2" color="light" weight="bold">
          {t('title', { fallback: 'All your trading tools in one place.' })}
        </Title>
        <Text color="muted" weight="medium">
          {t('text', {
            fallback:
              'Here you’ll find the bots you’ve purchased, along with their detailed reviews, setup instructions, and video tutorials to help you trade smarter.',
          })}
        </Text>
      </div>
      <section className="grid grid-cols-3 gap-6 max-xl:grid-cols-2 max-md:grid-cols-1">
        {values.map(bot => (
          <BotCard key={bot.id} value={bot} />
        ))}
      </section>
    </section>
  ) : (
    <NoAvailableBots />
  );
};

const BotCard = ({ value }: { value: Bot }) => {
  const t = useTranslations('account.bots');
  const [reviewLink, setReviewLink] = useState<string | null>(null);
  const [fileLink, setFileLink] = useState<string | null>(null);
  const [buttonName, setButtonName] = useState<string | null>(null);
  useEffect(() => {
    console.log('value', value);
    if (value.slug) {
      setReviewLink(`/bot-reviews/${value.slug}`);
    }
    if (value.file?.url) {
      setFileLink(value.file.url);
    }
    if (value.file?.mimeType === 'application/pdf') {
      setButtonName('Instruction');
    } else {
      setButtonName('Video');
    }
  }, [value]);

  return (
    <div className="flex flex-col gap-6 rounded-lg bg-[#181818] p-4">
      <BotTitle
        name={value.name}
        excerpt={value.excerpt}
        className="h-[320px] w-full"
        titleClassName="text-4xl uppercase"
        subTitleClassName="text-xl uppercase"
      />
      <Title size="xl" as="h3" color="light" weight="medium">
        {value.name}
      </Title>
      <section className="flex flex-col gap-2.5">
        <Button size="lg" className="gap-2.5" fullWidth>
          <DownloadIcon />
          {t('download', { fallback: 'Download' })}
        </Button>
        <div className="flex gap-2.5">
          <Button
            variant="secondary"
            size="lg"
            className="gap-2.5 px-6"
            fullWidth
            onClick={() => {
              if (reviewLink) {
                window.open(reviewLink, '_blank');
              }
            }}
          >
            <EyeIcon />
            {t('review', { fallback: 'Review' })}
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="gap-2.5 px-6"
            fullWidth
            onClick={() => {
              if (fileLink) {
                window.open(`https://cms.automicus.com${fileLink}`, '_blank');
              }
            }}
          >
            <PlayIcon />
            {buttonName}
          </Button>
        </div>
      </section>
    </div>
  );
};
