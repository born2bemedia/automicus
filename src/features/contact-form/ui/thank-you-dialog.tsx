'use client';

import { useTranslations } from 'next-intl';

import { Button, Text, useDialogStore } from '@/shared/ui/components/atoms';

export const ThankYouDialog = () => {
  const { setIsOpen } = useDialogStore();

  const t = useTranslations('contact.contactUs.form');

  return (
    <section className="flex flex-col gap-10 text-center">
      <Text color="light" weight="medium" opacity="medium">
        {t('text', {
          fallback:
            'Your request has been successfully submitted. Our team will review your message and get back to you as soon as possible. We appreciate your patience!',
        })}
      </Text>
      <Button size="lg" onClick={() => setIsOpen(false)} fullWidth>
        {t('continue', { fallback: 'Continue' })}
      </Button>
    </section>
  );
};
