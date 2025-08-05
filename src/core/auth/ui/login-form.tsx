'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useForm } from '@tanstack/react-form';

import { notifySuccess, notifyWarning } from '@/shared/lib/toast';
import { Button, TextField } from '@/shared/ui/components/atoms';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';

import { login } from '../api/login';
import { loginSchema } from '../model/schema';

export const LoginForm = () => {
  const router = useRouter();

  const t = useTranslations('auth.login');

  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit: async data => {
      const result = await login(data.value);

      if (result.success) {
        router.push('/account');
        notifySuccess(t('success', { fallback: 'Logged in successfully' }));
      } else {
        notifyWarning(
          result.message ??
            t('error', {
              fallback: 'Failed to login. Please try again later.',
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
          {t('title', { fallback: 'Welcome back' })}
        </Title>
        <Text color="muted" weight="medium">
          {t('text', {
            fallback: 'Enter your credentials to access your account.',
          })}
        </Text>
      </header>
      <section className="flex flex-col gap-5">
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
        <div className="flex flex-col gap-2">
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
          <Link href="/forgot-password" className="ml-auto">
            <Text color="secondary" className="underline" weight="medium">
              {t('forgotPassword', { fallback: 'Forgot password?' })}
            </Text>
          </Link>
        </div>
      </section>
      <Subscribe selector={state => [state.canSubmit, state.isSubmitting]}>
        {([canSubmit, isSubmitting]) => (
          <Button type="submit" size="lg" disabled={!canSubmit} fullWidth>
            {isSubmitting
              ? t('btn.loading', { fallback: 'Logging in...' })
              : t('btn.label', { fallback: 'Login' })}
          </Button>
        )}
      </Subscribe>
    </form>
  );
};
