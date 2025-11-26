'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useForm } from '@tanstack/react-form';

import { lsWrite } from '@/shared/lib/browser';
import { allowedCountries } from '@/shared/lib/countries';
import { notifyWarning } from '@/shared/lib/toast';
import { cn } from '@/shared/lib/utils';
import { Button, Text, TextField, Title } from '@/shared/ui/components/atoms';
import { Autocomplete } from '@/shared/ui/components/atoms/autocomplete';
import { Checkbox } from '@/shared/ui/components/atoms/checkbox';
import { PhoneField } from '@/shared/ui/components/atoms/phone-field';

import { sendEmailOrder } from '../api/send-email-order';
import { sendOrder } from '../api/send-order';
import { getCartSchema } from '../model/schemas';
import type { CartItem } from '../model/types';
import { useUser } from '@/core/user/model/use-user';

export const CartOrder = ({
  items,
  onIncrement,
  onDecrement,
  total,
}: {
  items: CartItem[];
  onIncrement: (name: string) => void;
  onDecrement: (name: string) => void;
  total: number;
}) => {
  const t = useTranslations('cart');
  const te = useTranslations('cart.errors');

  const user = useUser();
  const router = useRouter();

  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      firstName: user?.firstName ?? '',
      lastName: user?.lastName ?? '',
      email: user?.email ?? '',
      addressLine1: user?.addressLine1 ?? '',
      addressLine2: user?.addressLine2 ?? '',
      city: user?.city ?? '',
      country: user?.country ?? '',
      zip: user?.zip ?? '',
      phone: user?.phone ?? '',
      isAgreeTerms: false,
      isAgreeRefund: false,
    },
    validators: {
      onSubmit: getCartSchema(te),
    },
    onSubmit: async data => {
      const res = await sendOrder({
        billing: data.value,
        products: items,
        totalPrice: total,
        user,
      });

      if (res.doc) {
        await sendEmailOrder({
          userEmail: data.value.email,
          username: data.value.firstName,
        });
        lsWrite('cart', JSON.stringify([]));
        router.push(
          `/thank-you?orderId=${res.doc.orderNumber}&date=${res.doc.createdAt}&total=${res.doc.total}`,
        );
      } else {
        notifyWarning(
          t('error', {
            fallback: 'Failed to send order. Please try again later.',
          }),
        );
      }
    },
  });

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit().catch(console.error);
      }}
      className="flex gap-6 p-6 max-md:flex-col"
    >
      <section className="flex w-1/2 flex-col gap-6 max-md:w-full">
        <section className="flex flex-col gap-6 rounded-lg bg-[#181818] p-6">
          <Title size="2xl" color="light" uppercase>
            {t('title', { fallback: 'Your Choice' })}
          </Title>
          <section className="flex flex-col gap-6">
            {items.map(item => (
              <section
                key={item.name}
                className="flex items-center justify-between gap-5 rounded-lg border border-white/10 bg-transparent p-6"
              >
                <div className="flex flex-col gap-3">
                  <Text size="xl" weight="bold" color="light">
                    {item.name}
                  </Text>
                  <Counter
                    onIncrement={() => onIncrement(item.name)}
                    onDecrement={() => onDecrement(item.name)}
                    value={item.quantity}
                  />
                </div>
                <div className="gap-2. flex flex-col text-right">
                  <Text size="xl" weight="bold" color="light">
                    €{item.price}
                  </Text>
                  <Text size="md" color="muted">
                    {t('discount', { fallback: 'Discount' })}: €{item.discount}
                  </Text>
                </div>
              </section>
            ))}
          </section>
        </section>
        <section className="flex flex-col gap-10 rounded-lg bg-[#181818] px-6 py-10">
          <div className="flex flex-col gap-5">
            <Title size="2xl" color="light" uppercase>
              {t('yourData.title', { fallback: 'Your Data' })}
            </Title>
            <FormRow className="max-2xl:flex-wrap">
              <Field name="firstName">
                {field => (
                  <TextField
                    name={field.name}
                    placeholder={t('yourData.firstName', {
                      fallback: 'First Name',
                    })}
                    value={String(field.state.value)}
                    onBlur={field.handleBlur}
                    onChange={e => field.handleChange(e.target.value)}
                    hint={field.state.meta.errors
                      .map(err => err?.message)
                      .join(', ')}
                  />
                )}
              </Field>
              <Field name="lastName">
                {field => (
                  <TextField
                    name={field.name}
                    placeholder={t('yourData.lastName', {
                      fallback: 'Last Name',
                    })}
                    value={String(field.state.value)}
                    onBlur={field.handleBlur}
                    onChange={e => field.handleChange(e.target.value)}
                    hint={field.state.meta.errors
                      .map(err => err?.message)
                      .join(', ')}
                  />
                )}
              </Field>
              <Field name="email">
                {field => (
                  <TextField
                    name={field.name}
                    placeholder={t('yourData.email', {
                      fallback: 'Email',
                    })}
                    value={String(field.state.value)}
                    onBlur={field.handleBlur}
                    onChange={e => field.handleChange(e.target.value)}
                    hint={field.state.meta.errors
                      .map(err => err?.message)
                      .join(', ')}
                  />
                )}
              </Field>
            </FormRow>
          </div>
          <div className="flex flex-col gap-5">
            <Title size="2xl" color="light" uppercase>
              {t('address.title', { fallback: 'Address' })}
            </Title>
            <FormRow>
              <Field name="addressLine1">
                {field => (
                  <TextField
                    name={field.name}
                    placeholder={t('address.addressLine1', {
                      fallback: 'Address Line 1',
                    })}
                    value={String(field.state.value)}
                    onBlur={field.handleBlur}
                    onChange={e => field.handleChange(e.target.value)}
                    hint={field.state.meta.errors
                      .map(err => err?.message)
                      .join(', ')}
                  />
                )}
              </Field>
              <Field name="addressLine2">
                {field => (
                  <TextField
                    name={field.name}
                    placeholder={t('address.addressLine2', {
                      fallback: 'Address Line 2',
                    })}
                    value={String(field.state.value)}
                    onBlur={field.handleBlur}
                    onChange={e => field.handleChange(e.target.value)}
                    hint={field.state.meta.errors
                      .map(err => err?.message)
                      .join(', ')}
                  />
                )}
              </Field>
            </FormRow>
            <FormRow>
              <Field name="city">
                {field => (
                  <TextField
                    name={field.name}
                    placeholder={t('address.city', {
                      fallback: 'City',
                    })}
                    value={String(field.state.value)}
                    onBlur={field.handleBlur}
                    onChange={e => field.handleChange(e.target.value)}
                    hint={field.state.meta.errors
                      .map(err => err?.message)
                      .join(', ')}
                  />
                )}
              </Field>
              <Field name="country">
                {field => (
                  <Autocomplete
                    items={Object.entries(allowedCountries).map(
                      ([value, label]) => ({
                        value,
                        label: label.name,
                      }),
                    )}
                    placeholder={t('address.country', {
                      fallback: 'Country/Region',
                    })}
                    initialValue={String(field.state.value)}
                    onChange={value => field.handleChange(value)}
                    hint={field.state.meta.errors
                      .map(err => err?.message)
                      .join(', ')}
                  />
                )}
              </Field>
            </FormRow>
            <FormRow>
              <Field name="zip">
                {field => (
                  <TextField
                    name={field.name}
                    placeholder={t('address.zip', {
                      fallback: 'ZIP',
                    })}
                    value={String(field.state.value)}
                    onBlur={field.handleBlur}
                    onChange={e => field.handleChange(e.target.value)}
                    hint={field.state.meta.errors
                      .map(err => err?.message)
                      .join(', ')}
                  />
                )}
              </Field>
              <Field name="phone">
                {field => (
                  <PhoneField
                    name={field.name}
                    placeholder={t('address.phone', {
                      fallback: 'Phone',
                    })}
                    value={String(field.state.value)}
                    onBlur={field.handleBlur}
                    onChange={value => field.handleChange(value)}
                    hint={field.state.meta.errors
                      .map(err => err?.message)
                      .join(', ')}
                  />
                )}
              </Field>
            </FormRow>
          </div>
        </section>
      </section>
      <section className="sticky top-26 flex h-max w-1/2 flex-col gap-10 rounded-lg bg-[#181818] p-6 max-md:relative max-md:top-0 max-md:w-full">
        <Title size="2xl" color="light" uppercase>
          {t('orderSummary.title', { fallback: 'Order Summary' })}
        </Title>
        <section className="flex flex-col gap-5">
          {items.map(item => (
            <div key={item.name} className="flex items-center justify-between">
              <Text color="light" size="md" weight="medium">
                {item.name} x {item.quantity}
              </Text>
              <Text color="light" size="md" weight="medium">
                €{item.price}
              </Text>
            </div>
          ))}
          <Separator />
          <div className="flex items-center justify-between">
            <Text color="light" size="md" weight="medium">
              {t('orderSummary.subtotal', { fallback: 'Subtotal' })}:
            </Text>
            <Text color="light" size="md" weight="medium">
              €{total}
            </Text>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <Text color="light" size="xl" weight="bold">
              {t('orderSummary.total', { fallback: 'Total' })}:
            </Text>
            <Text color="light" size="xl" weight="bold">
              €{total}
            </Text>
          </div>
        </section>
        <section className="flex flex-col gap-3">
          <Field name="isAgreeTerms">
            {field => (
              <Checkbox
                name={field.name}
                label={
                  <>
                    {t('terms.0', {
                      fallback: 'I have read and agree to the website',
                    })}{' '}
                    <Link className="underline" href="/terms-of-use">
                      {t('terms.1', { fallback: 'Terms of Use' })}
                    </Link>
                  </>
                }
                checked={field.state.value}
                onCheckedChange={e =>
                  field.handleChange(e === 'indeterminate' ? false : e)
                }
                intent={field.state.meta.errors.length ? 'danger' : 'default'}
              />
            )}
          </Field>
          <Field name="isAgreeRefund">
            {field => (
              <Checkbox
                name={field.name}
                label={
                  <>
                    {t('terms.2', {
                      fallback: 'I have read and agree to the website',
                    })}{' '}
                    <Link className="underline" href="/refund-policy">
                      {t('terms.3', { fallback: 'Refund Policy' })}
                    </Link>
                  </>
                }
                checked={field.state.value}
                onCheckedChange={e =>
                  field.handleChange(e === 'indeterminate' ? false : e)
                }
                intent={field.state.meta.errors.length ? 'danger' : 'default'}
              />
            )}
          </Field>
        </section>
        <Subscribe selector={state => [state.canSubmit, state.isSubmitting]}>
          {([canSubmit, isSubmitting]) => (
            <Button
              type="submit"
              form="order-form"
              disabled={!canSubmit}
              size="lg"
              fullWidth
            >
              {isSubmitting
                ? t('submitting', { fallback: 'Submitting...' })
                : t('order', { fallback: 'Order' })}
            </Button>
          )}
        </Subscribe>
      </section>
    </form>
  );
};

const Counter = ({
  onIncrement,
  onDecrement,
  value,
}: {
  onIncrement: () => void;
  onDecrement: () => void;
  value: number;
}) => {
  return (
    <div className="flex w-max items-center rounded-lg border border-white/5 bg-white/5">
      <button className="cursor-pointer p-3" onClick={onDecrement}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M5 10H15"
            stroke="white"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <span className="p-3" style={{ width: '3ch' }}>
        <Text size="md" color="light">
          {value}
        </Text>
      </span>
      <button className="cursor-pointer p-3" onClick={onIncrement}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M15 10H10M10 10H5M10 10V5M10 10V15"
            stroke="white"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export const Separator = () => <span className="h-[1px] w-full bg-white/5" />;

export const FormRow = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      'flex items-end gap-5 max-md:flex-col max-md:items-start',
      className,
    )}
  >
    {children}
  </div>
);
