'use client';

import { Button, Text, useDialogStore } from '@/shared/ui/components/atoms';

export const ThankYouDialog = () => {
  const { setIsOpen } = useDialogStore();

  return (
    <section className="flex flex-col gap-10 text-center">
      <Text color="light" weight="medium" opacity="medium">
        Your request has been successfully submitted. Our team will review your
        message and get back to you as soon as possible. We appreciate your
        patience!
      </Text>
      <Button size="lg" onClick={() => setIsOpen(false)} fullWidth>
        Continue
      </Button>
    </section>
  );
};
