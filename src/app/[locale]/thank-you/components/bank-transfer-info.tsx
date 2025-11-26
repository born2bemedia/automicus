'use client';

import { useTranslations } from 'next-intl';

import { Text, Title } from '@/shared/ui/components/atoms';

export const BankTransferInfo = ({
  orderId,
  date,
  total,
}: {
  orderId: string;
  date: string;
  total: string;
}) => {
  const t = useTranslations('thankYouWire.bankTransferInfo');

  console.log(orderId, date, total);

  return (
    <section className="flex flex-col gap-20 px-10 py-20 max-md:p-6">
      <section className="flex flex-col items-center justify-center gap-5 text-center">
        <RocketIcon />
        <Title align="center" size="4xl" color="light" weight="bold">
          {t('title.0', { fallback: 'Order successful.' })} <br />{' '}
          {t('title.1', { fallback: 'Thank you!' })}
        </Title>
        <Text color="muted" weight="medium">
          {t('text.0', {
            fallback:
              'The Automicus manager will get in touch with your shortly!',
          })}
        </Text>
      </section>
      <BankPanel orderId={orderId} date={date} total={total} />
    </section>
  );
};

const BankPanel = ({
  orderId,
  date,
  total,
}: {
  orderId: string;
  date: string;
  total: string;
}) => {
  const t = useTranslations('thankYouWire.bankTransferInfo.panel');

  return (
    <article className="mx-auto flex w-[600px] flex-col gap-10 rounded-4xl bg-[#181818] p-10 max-md:w-full max-md:p-6">
      <Title size="3xl" color="light" weight="bold" align="center" uppercase>
        {t('title', { fallback: 'Your Order' })}
      </Title>
      <section className="flex flex-col gap-5">
        <LabelValue
          label={t('label.0', { fallback: 'Order ID' })}
          value={`#${orderId}`}
        />
        <Divider />
        <LabelValue
          label={t('label.1', { fallback: 'Date' })}
          value={new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        />
        <Divider />
        <LabelValue
          label={t('label.2', { fallback: 'Order Total' })}
          value={`€${total}`}
        />
      </section>
    </article>
  );
};

const LabelValue = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between">
    <Text color="muted" weight="medium">
      {label}
    </Text>
    <Text color="light" weight="medium">
      {value}
    </Text>
  </div>
);

const Divider = () => (
  <span className="h-px w-full bg-[rgba(255,255,255,0.05)]" />
);

const RocketIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
  >
    <path
      d="M32 4C26.4621 4 21.0486 5.64217 16.444 8.71885C11.8395 11.7955 8.25064 16.1685 6.13139 21.2849C4.01213 26.4012 3.45764 32.0311 4.53802 37.4625C5.61841 42.894 8.28515 47.8831 12.201 51.799C16.1169 55.7149 21.106 58.3816 26.5375 59.462C31.969 60.5424 37.5988 59.9879 42.7151 57.8686C47.8315 55.7494 52.2045 52.1605 55.2812 47.556C58.3578 42.9514 60 37.5379 60 32C60 24.5739 57.05 17.452 51.799 12.201C46.548 6.94999 39.4261 4 32 4ZM28 43.18L18 33.18L21.18 30L28 36.82L42.82 22L46.012 25.172L28 43.18Z"
      fill="#CBFF00"
    />
  </svg>
);
