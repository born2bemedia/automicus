'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { Text, Title } from '@/shared/ui/components/atoms';
import { CopyIcon } from '@/shared/ui/icons/fill/copy';

export const BankTransferInfo = () => {
  const t = useTranslations('thankYouWire.bankTransferInfo');

  return (
    <section className="flex flex-col gap-20 px-10 py-20 max-md:p-6">
      <section className="flex flex-col items-center justify-center gap-5 text-center">
        <RocketIcon />
        <Title align="center" size="4xl" color="light" weight="bold">
          {t('title.0', { fallback: "You're One Step Away" })} <br />
          {t('title.1', { fallback: 'from Completing Your Order' })}
        </Title>
        <Text color="muted" weight="medium">
          {t('text.0', {
            fallback:
              'Thank you for your order! To complete your purchase, please make a bank transfer using the details below.',
          })}
          <br />
          {t('text.1', {
            fallback:
              'Make sure to include the payment reference exactly as provided so we can process your order without delays.',
          })}
        </Text>
      </section>
      <BankPanel />
    </section>
  );
};

const BankPanel = () => {
  const t = useTranslations('thankYouWire.bankTransferInfo.panel');

  return (
    <article className="mx-auto flex w-[600px] flex-col gap-10 rounded-4xl bg-[#181818] p-10 max-md:w-full max-md:p-6">
      <Title size="3xl" color="light" weight="bold" align="center" uppercase>
        {t('title', { fallback: 'Pay with Bank Transfer' })}
      </Title>
      <section className="flex flex-col gap-5">
        <InfoOutput label={t('iban', { fallback: 'IBAN:' })} value="[text]" />
        <InfoOutput
          label={t('bic', { fallback: 'BIC / SWIFT:' })}
          value="[text]"
        />
        <InfoOutput
          label={t('recipient', { fallback: 'Recipient:' })}
          value="[text]"
        />
        <InfoOutput
          label={t('recipientAddress', { fallback: 'Recipient Address:' })}
          value="[text]"
        />
        <InfoOutput
          label={t('bankName', { fallback: 'Bank Name:' })}
          value="[text]"
        />
        <div className="flex flex-col gap-2.5">
          <InfoOutput
            label={t('reference', { fallback: 'Reference (Mandatory):' })}
            value="[text]"
          />
          <Text color="muted" weight="medium">
            {t('referenceText', {
              fallback:
                'Use the exact reference above when making the payment.',
            })}
          </Text>
        </div>
      </section>
    </article>
  );
};

const InfoOutput = ({ label, value }: { label: string; value: string }) => {
  return (
    <section className="flex flex-col gap-2.5">
      <Text weight="medium" color="light">
        {label}
      </Text>
      <div className="flex items-center justify-between rounded-lg bg-[#111] p-6">
        <Text color="muted" weight="medium">
          {value}
        </Text>
        <CopyButton value={value} />
      </div>
    </section>
  );
};

const CopyButton = ({ value }: { value: string }) => {
  const [copied, setCopied] = useState(false);

  const t = useTranslations('thankYouWire.bankTransferInfo.panel');

  const handleCopy = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch(err => {
        console.error('Failed to copy:', err);
      });
  };

  return (
    <button
      onClick={handleCopy}
      className="flex cursor-pointer items-center gap-1.5 rounded-full bg-[#CBFF00] px-4 py-1.5 transition-colors"
    >
      <CopyIcon />
      <Text color="dark" size="sm">
        {copied
          ? t('copied', { fallback: 'Copied!' })
          : t('copy', { fallback: 'Copy' })}
      </Text>
    </button>
  );
};

const RocketIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
  >
    <path
      d="M59.7046 4.78261C59.6818 4.67206 59.6279 4.57031 59.5493 4.48928C59.4707 4.40825 59.3706 4.3513 59.2608 4.32511C51.9396 2.53511 35.0233 8.91387 25.8583 18.0751C24.2237 19.6966 22.7334 21.4574 21.4046 23.3376C18.5783 23.0876 15.7521 23.2964 13.3433 24.3464C6.54707 27.3376 4.56832 35.1426 4.01707 38.5001C3.9858 38.6839 3.9976 38.8724 4.05153 39.0508C4.10546 39.2293 4.20005 39.3928 4.32786 39.5285C4.45568 39.6642 4.61323 39.7683 4.78814 39.8328C4.96304 39.8973 5.15051 39.9204 5.33582 39.9001L16.2496 38.6964C16.2573 39.5192 16.307 40.3411 16.3983 41.1589C16.4532 41.7268 16.7053 42.2575 17.1108 42.6589L21.3371 46.8751C21.7389 47.28 22.2694 47.532 22.8371 47.5876C23.6503 47.6785 24.4676 47.7281 25.2858 47.7364L24.0883 58.6364C24.0683 58.8216 24.0916 59.009 24.1561 59.1838C24.2207 59.3585 24.3249 59.516 24.4605 59.6437C24.5962 59.7715 24.7595 59.8661 24.9379 59.9201C25.1162 59.9741 25.3046 59.9861 25.4883 59.9551C28.8396 59.4176 36.6583 57.4389 39.6321 50.6426C40.6821 48.2339 40.8971 45.4214 40.6546 42.6089C42.5393 41.2799 44.3048 39.7893 45.9308 38.1539C55.1246 29.0064 61.4671 12.4676 59.7046 4.78261ZM36.7583 27.2414C35.9188 26.4024 35.347 25.3333 35.1152 24.1693C34.8833 23.0053 35.0019 21.7987 35.4559 20.7021C35.9099 19.6056 36.679 18.6683 37.6657 18.0088C38.6525 17.3493 39.8127 16.9973 40.9996 16.9973C42.1864 16.9973 43.3466 17.3493 44.3334 18.0088C45.3202 18.6683 46.0892 19.6056 46.5432 20.7021C46.9972 21.7987 47.1158 23.0053 46.884 24.1693C46.6522 25.3333 46.0803 26.4024 45.2408 27.2414C44.6841 27.7988 44.023 28.2411 43.2953 28.5429C42.5675 28.8446 41.7874 28.9999 40.9996 28.9999C40.2117 28.9999 39.4316 28.8446 38.7039 28.5429C37.9761 28.2411 37.315 27.7988 36.7583 27.2414Z"
      fill="#CBFF00"
    />
    <path
      d="M21.05 49.9288C20.365 50.615 19.2663 50.8825 17.9438 51.1113C14.9725 51.6175 12.3487 49.05 12.8825 46.0463C13.0862 44.9075 13.6888 43.3113 14.0638 42.9363C14.1457 42.8559 14.2003 42.7517 14.2197 42.6386C14.2391 42.5254 14.2223 42.409 14.1718 42.3059C14.1213 42.2028 14.0396 42.1183 13.9383 42.0642C13.837 42.0102 13.7213 41.9895 13.6075 42.005C11.946 42.2083 10.4002 42.9616 9.21625 44.145C6.2775 47.0863 6 58 6 58C6 58 16.92 57.7225 19.8587 54.7813C21.0457 53.5982 21.8 52.0501 22 50.3863C22.0462 49.8638 21.41 49.5525 21.05 49.9288Z"
      fill="#CBFF00"
    />
  </svg>
);
