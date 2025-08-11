'use client';

import { useTranslations } from 'next-intl';
import { useForm } from '@tanstack/react-form';

import {
  Button,
  TextField,
  useDialogStore,
} from '@/shared/ui/components/atoms';
import { PhoneField } from '@/shared/ui/components/atoms/phone-field';
import { FormRow } from '@/shared/ui/components/molecules';

import { sendContactForm } from '../api/send-contact-form';
import { contactSchema } from '../model/schema';
import { ThankYouDialog } from './thank-you-dialog';

export const ContactForm = () => {
  const { registerContent, setIsOpen } = useDialogStore();

  const t = useTranslations('contact.contactUs.form');

  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validators: {
      onSubmit: contactSchema,
    },
    onSubmit: async ({ value }) => {
      const { status } = await sendContactForm(value);

      if (status === 'OK') {
        registerContent({
          title: t('success', { fallback: 'Thank You for Reaching Out!' }),
          content: <ThankYouDialog />,
        });
        setIsOpen(true);
      }
    },
  });

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit().catch(console.error);
      }}
    >
      <FormRow>
        <Field name="name">
          {({ name, state, handleBlur, handleChange }) => (
            <TextField
              name={name}
              label={t('name.label', { fallback: 'Name' })}
              placeholder={t('name.placeholder', {
                fallback: 'Enter Your Name',
              })}
              value={String(state.value)}
              onBlur={handleBlur}
              onChange={e => handleChange(e.target.value)}
              hint={state.meta.errors.map(err => err?.message).join(', ')}
            />
          )}
        </Field>
        <Field name="email">
          {({ name, state, handleBlur, handleChange }) => (
            <TextField
              name={name}
              label={t('email.label', { fallback: 'Email' })}
              placeholder={t('email.placeholder', {
                fallback: 'Enter Your Email',
              })}
              value={String(state.value)}
              onBlur={handleBlur}
              onChange={e => handleChange(e.target.value)}
              hint={state.meta.errors.map(err => err?.message).join(', ')}
            />
          )}
        </Field>
      </FormRow>
      <FormRow>
        <Field name="phone">
          {({ name, state, handleBlur, handleChange }) => (
            <PhoneField
              name={name}
              label={t('phone.label', { fallback: 'Phone' })}
              placeholder={t('phone.placeholder', {
                fallback: 'Enter Your Phone',
              })}
              value={String(state.value)}
              onBlur={handleBlur}
              onChange={value => handleChange(value)}
              hint={state.meta.errors.map(err => err?.message).join(', ')}
            />
          )}
        </Field>
        <Field name="message">
          {({ name, state, handleBlur, handleChange }) => (
            <TextField
              name={name}
              label={t('message.label', { fallback: 'Message' })}
              placeholder={t('message.placeholder', {
                fallback: 'Enter Your Message',
              })}
              value={String(state.value)}
              onBlur={handleBlur}
              onChange={e => handleChange(e.target.value)}
              hint={state.meta.errors.map(err => err?.message).join(', ')}
            />
          )}
        </Field>
      </FormRow>
      <Subscribe selector={state => [state.canSubmit, state.isSubmitting]}>
        {([canSubmit, isSubmitting]) => (
          <Button type="submit" size="lg" disabled={!canSubmit} fullWidth>
            {isSubmitting
              ? t('sending', { fallback: 'Sending...' })
              : t('btn', { fallback: 'Send' })}
          </Button>
        )}
      </Subscribe>
    </form>
  );
};
