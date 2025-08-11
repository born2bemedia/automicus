'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/components/atoms/button';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';

export const NoAvailableBots = ({ className }: { className?: string }) => {
  const t = useTranslations('account.noBots');

  return (
    <section
      className={cn(
        'flex h-[79vh] flex-col items-center justify-center gap-[48px] max-lg:h-[600px]',
        className,
      )}
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <BotIcon />
        <Title color="light" size="2xl" weight="bold">
          {t('title.0', { fallback: 'You haven’t purchased' })} <br />
          {t('title.1', { fallback: 'any Automicus bots yet.' })}
        </Title>
        <Text color="muted">
          {t('text.0', { fallback: 'Once you complete your first order,' })}{' '}
          <br />
          {t('text.1', { fallback: 'your bots will appear here.' })}
        </Text>
      </div>
      <Link href="/catalog">
        <Button size="lg" className="px-6 py-4">
          {t('btn', { fallback: 'Choose Bots' })}
        </Button>
      </Link>
    </section>
  );
};

const BotIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="49"
    height="49"
    viewBox="0 0 49 49"
    fill="none"
  >
    <path
      d="M40.1 17.1001H8.9C4.9 17.1001 1.5 20.5001 1.5 24.5001V40.3001C1.5 44.3001 4.9 47.7001 8.9 47.7001H40.3C44.3 47.7001 47.7 44.3001 47.7 40.3001V24.5001C47.5 20.3001 44.3 17.1001 40.1 17.1001ZM11.3 28.7001L10.7 28.1001L12.1 26.7001L12.9 27.3001C14.1 28.5001 16.1 28.5001 17.3 27.3001L17.9 26.7001L19.3 28.1001L18.7 28.7001C17.7 29.7001 16.5 30.1001 15.1 30.1001C13.5 30.1001 12.3 29.7001 11.3 28.7001ZM31.7 38.9001L31.1 38.3001C29.3 36.5001 27.1 35.5001 24.5 35.5001C22.1 35.5001 19.7 36.5001 17.9 38.3001L17.3 38.9001L15.9 37.5001L16.5 36.9001C18.7 34.7001 21.5 33.7001 24.5 33.7001C27.5 33.7001 30.3 34.9001 32.3 36.9001L33.1 37.5001L31.7 38.9001ZM37.7 28.7001C36.7 29.7001 35.5 30.1001 34.1 30.1001C32.9 30.1001 31.5 29.7001 30.5 28.7001L29.9 28.1001L31.3 26.7001L31.9 27.3001C33.1 28.5001 35.1 28.5001 36.3 27.3001L36.9 26.7001L38.3 28.1001L37.7 28.7001Z"
      fill="#CBFF00"
    />
    <path d="M21.7031 14.3H27.3031V16.3H21.7031V14.3Z" fill="#CBFF00" />
    <path d="M21.7031 11.7H27.3031V13.7H21.7031V11.7Z" fill="#CBFF00" />
    <path d="M23.5 8.30005H25.5V11.1H23.5V8.30005Z" fill="#CBFF00" />
    <path
      d="M24.5 9.5C22.3 9.5 20.5 7.7 20.5 5.5C20.5 3.3 22.3 1.5 24.5 1.5C26.7 1.5 28.5 3.3 28.5 5.5C28.5 7.7 26.7 9.5 24.5 9.5ZM24.5 3.3C23.3 3.3 22.5 4.3 22.5 5.3C22.5 6.5 23.5 7.3 24.5 7.3C25.7 7.3 26.5 6.3 26.5 5.3C26.7 4.3 25.7 3.3 24.5 3.3Z"
      fill="#CBFF00"
    />
  </svg>
);
