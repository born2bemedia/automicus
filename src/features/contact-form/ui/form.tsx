'use client';

import { useForm } from '@tanstack/react-form';

import {
  Button,
  TextField,
  useDialogStore,
} from '@/shared/ui/components/atoms';
import { FormRow } from '@/shared/ui/components/molecules';

import { sendContactForm } from '../api/send-contact-form';
import { contactSchema } from '../model/schema';
import { ThankYouDialog } from './thank-you-dialog';

export const ContactForm = () => {
  const { registerContent, setIsOpen } = useDialogStore();

  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validators: {
      onChange: contactSchema,
    },
    onSubmit: async ({ value }) => {
      // const { status } = await sendContactForm(value);
      console.log('status', status);

      // if (status === 'OK') {
      registerContent({
        title: 'Thank You for Reaching Out!',
        content: <ThankYouDialog />,
      });
      setIsOpen(true);
      // }
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
              label="Name"
              placeholder="Enter Your Name"
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
              label="Enter Your Email"
              placeholder="Email"
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
            <TextField
              name={name}
              label="Enter Your Phone"
              placeholder="Phone"
              value={String(state.value)}
              onBlur={handleBlur}
              onChange={e => handleChange(e.target.value)}
              hint={state.meta.errors.map(err => err?.message).join(', ')}
            />
          )}
        </Field>
        <Field name="message">
          {({ name, state, handleBlur, handleChange }) => (
            <TextField
              name={name}
              label="Enter Your Message"
              placeholder="Message"
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
            {isSubmitting ? 'Sending...' : 'Send'}
          </Button>
        )}
      </Subscribe>
    </form>
  );
};
