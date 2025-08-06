'use client';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useForm } from '@tanstack/react-form';

import { notifySuccess, notifyWarning } from '@/shared/lib/toast';
import { Button, TextField } from '@/shared/ui/components/atoms';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';

import { signUp } from '../api/sign-up';
import { signUpSchema } from '../model/schema';

export const SignUpForm = () => {
  const router = useRouter();

  const t = useTranslations('auth.signUp');

  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validators: {
      onSubmit: signUpSchema,
    },
    onSubmit: async data => {
      const result = await signUp(data.value);

      if (result.success) {
        router.push('/account');
        notifySuccess(
          t('success', { fallback: 'Account created successfully' }),
        );
      } else {
        notifyWarning(
          ('errors' in result
            ? result.errors
                ?.map((err: { message: string }) => err.message)
                .join(', ')
            : null) ??
            t('error', {
              fallback: 'Failed to sign up. Please try again later.',
            }),
        );
      }
    },
  });

  return (
    <form
      className="z-10 flex w-[600px] flex-col gap-10 rounded-lg bg-[#181818] p-10 max-md:w-full"
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit().catch(console.error);
      }}
    >
      <header className="flex flex-col gap-3 text-center">
        <Title size="4xl" color="light" weight="bold" align="center">
          {t('title', { fallback: 'Create Account' })}
        </Title>
        <Text color="muted" weight="medium">
          {t('text', { fallback: 'Start your journey with us' })}
        </Text>
      </header>
      <section className="flex flex-col gap-5">
        <div className="flex gap-5">
          <Field name="firstName">
            {({ name, state, handleBlur, handleChange }) => (
              <TextField
                name={name}
                label="First Name"
                placeholder="Enter Your First Name"
                value={String(state.value)}
                onBlur={handleBlur}
                onChange={e => handleChange(e.target.value)}
                hint={state.meta.errors.map(err => err?.message).join(', ')}
              />
            )}
          </Field>
          <Field name="lastName">
            {({ name, state, handleBlur, handleChange }) => (
              <TextField
                name={name}
                label="Last Name"
                placeholder="Enter Your Last Name"
                value={String(state.value)}
                onBlur={handleBlur}
                onChange={e => handleChange(e.target.value)}
                hint={state.meta.errors.map(err => err?.message).join(', ')}
              />
            )}
          </Field>
        </div>
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
        <Field name="password">
          {({ name, state, handleBlur, handleChange }) => (
            <TextField
              name={name}
              label={t('password.label', { fallback: 'Password' })}
              placeholder={t('password.placeholder', {
                fallback: 'Enter Your Password',
              })}
              value={String(state.value)}
              onBlur={handleBlur}
              onChange={e => handleChange(e.target.value)}
              hint={state.meta.errors.map(err => err?.message).join(', ')}
              type="password"
            />
          )}
        </Field>
      </section>
      <Subscribe selector={state => [state.canSubmit, state.isSubmitting]}>
        {([canSubmit, isSubmitting]) => (
          <Button type="submit" size="lg" disabled={!canSubmit} fullWidth>
            {isSubmitting
              ? t('btn.loading', { fallback: 'Creating...' })
              : t('btn.label', { fallback: 'Sign Up' })}
          </Button>
        )}
      </Subscribe>
    </form>
  );
};
