'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { allowedCountries } from '@/shared/lib/countries';
import { useForm } from '@/shared/lib/forms';
import { notifySuccess, notifyWarning } from '@/shared/lib/toast';
import { Button, Text, TextField, Title } from '@/shared/ui/components/atoms';
import { Autocomplete } from '@/shared/ui/components/atoms/autocomplete';
import { PhoneField } from '@/shared/ui/components/atoms/phone-field';
import { Separator } from '@/shared/ui/components/atoms/separator';
import { FormRow } from '@/shared/ui/components/molecules';
import { CloseIcon } from '@/shared/ui/icons/fill/close';
import { DiskIcon } from '@/shared/ui/icons/fill/disk';
import { PencilIcon } from '@/shared/ui/icons/fill/pencil';

import { editUser } from '../api/edit-user';
import { editUserSchema } from '../model/edit-user.schema';
import { useUser } from '../model/use-user';

export const EditUserForm = () => {
  const [isEdit, setIsEdit] = useState(false);

  const t = useTranslations('account.yourData.editUser');

  const user = useUser();

  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      firstName: user?.firstName ?? '',
      lastName: user?.lastName ?? '',
      email: user?.email ?? '',
      phone: user?.phone ?? '',
      country: user?.country ?? '',
      city: user?.city ?? '',
      zip: user?.zip ?? '',
      addressLine1: user?.addressLine1 ?? '',
      addressLine2: user?.addressLine2 ?? '',
    },
    validators: {
      onChange: isEdit ? editUserSchema : undefined,
    },
    onSubmit: async values => {
      const res = await editUser({ ...values.value, id: user?.id });

      if (res.message === 'Updated successfully.') {
        setIsEdit(false);
        notifySuccess(t('success', { fallback: 'User updated successfully' }));
      } else {
        notifyWarning(
          t('error', {
            fallback: 'Failed to update user. Please try again later.',
          }),
        );
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
      <header className="flex items-center justify-between gap-6 max-md:flex-col">
        <div className="flex flex-col gap-3">
          <Title size="3xl" color="light" weight="bold">
            {t('titleData', { fallback: 'Your Data' })}
          </Title>
          <Text color="muted" weight="medium">
            {t('textData', {
              fallback: 'Manage your data, addresses, emails and passwords',
            })}
          </Text>
        </div>
        {isEdit ? (
          <div className="flex items-center gap-3 max-md:w-full">
            <Subscribe
              selector={state => [state.canSubmit, state.isSubmitting]}
            >
              {([canSubmit, isSubmitting]) => (
                <Button
                  size="md"
                  type="submit"
                  className="gap-2.5 px-6 py-4 max-md:w-full max-md:justify-center"
                  disabled={!canSubmit}
                >
                  {isSubmitting ? (
                    t('saving', { fallback: 'Saving...' })
                  ) : (
                    <>
                      <DiskIcon />
                      {t('save', { fallback: 'Save' })}
                    </>
                  )}
                </Button>
              )}
            </Subscribe>
            <Button
              size="md"
              className="gap-2.5 px-6 py-4 max-md:w-full max-md:justify-center"
              onClick={() => setIsEdit(false)}
              variant="secondary"
            >
              <CloseIcon />
              {t('cancel', { fallback: 'Cancel' })}
            </Button>
          </div>
        ) : (
          <Button
            size="md"
            className="gap-2.5 px-6 py-4 max-md:w-full max-md:justify-center"
            onClick={() => setIsEdit(true)}
          >
            <PencilIcon />
            {t('edit', { fallback: 'Edit' })}
          </Button>
        )}
      </header>
      <FormRow>
        <Field name="firstName">
          {({ name, state, handleBlur, handleChange }) => (
            <TextField
              name={name}
              label={t('fields.firstName.label', {
                fallback: 'First Name',
              })}
              placeholder={t('fields.firstName.placeholder', {
                fallback: 'Enter Your First Name',
              })}
              value={String(state.value)}
              onBlur={handleBlur}
              onChange={e => handleChange(e.target.value)}
              hint={state.meta.errors.map(err => err?.message).join(', ')}
              variant="secondary"
              disabled={!isEdit}
            />
          )}
        </Field>
        <Field name="lastName">
          {({ name, state, handleBlur, handleChange }) => (
            <TextField
              name={name}
              label={t('fields.lastName.label', {
                fallback: 'Last Name',
              })}
              placeholder={t('fields.lastName.placeholder', {
                fallback: 'Enter Your Last Name',
              })}
              value={String(state.value)}
              onBlur={handleBlur}
              onChange={e => handleChange(e.target.value)}
              hint={state.meta.errors.map(err => err?.message).join(', ')}
              variant="secondary"
              disabled={!isEdit}
            />
          )}
        </Field>
      </FormRow>
      <FormRow>
        <Field name="email">
          {({ name, state, handleBlur, handleChange }) => (
            <TextField
              name={name}
              label={t('fields.email.label', {
                fallback: 'Email address',
              })}
              placeholder={t('fields.email.placeholder', {
                fallback: 'Enter email address',
              })}
              value={String(state.value)}
              onBlur={handleBlur}
              onChange={e => handleChange(e.target.value)}
              hint={state.meta.errors.map(err => err?.message).join(', ')}
              variant="secondary"
              disabled={!isEdit}
            />
          )}
        </Field>
        <Field name="phone">
          {field => (
            <PhoneField
              name={field.name}
              label={t('fields.phone.label', {
                fallback: 'Phone number',
              })}
              placeholder={t('fields.phone.placeholder', {
                fallback: 'Enter phone number',
              })}
              value={String(field.state.value)}
              onBlur={field.handleBlur}
              onChange={value => field.handleChange(value)}
              hint={field.state.meta.errors.map(err => err?.message).join(', ')}
              variant="secondary"
              disabled={!isEdit}
            />
          )}
        </Field>
      </FormRow>
      <Separator />
      <Title size="3xl" color="light" weight="bold">
        {t('titleAddress', { fallback: 'Your Address' })}
      </Title>
      <FormRow>
        <Field name="addressLine1">
          {({ name, state, handleBlur, handleChange }) => (
            <TextField
              name={name}
              label={t('fields.addressLine1.label', {
                fallback: 'Address line 1',
              })}
              placeholder={t('fields.addressLine1.placeholder', {
                fallback: 'Enter your address line',
              })}
              value={String(state.value)}
              onBlur={handleBlur}
              onChange={e => handleChange(e.target.value)}
              hint={state.meta.errors.map(err => err?.message).join(', ')}
              variant="secondary"
              disabled={!isEdit}
            />
          )}
        </Field>
        <Field name="addressLine2">
          {({ name, state, handleBlur, handleChange }) => (
            <TextField
              name={name}
              label={t('fields.addressLine2.label', {
                fallback: 'Address line 2',
              })}
              placeholder={t('fields.addressLine2.placeholder', {
                fallback: 'Enter your address line',
              })}
              value={String(state.value)}
              onBlur={handleBlur}
              onChange={e => handleChange(e.target.value)}
              hint={state.meta.errors.map(err => err?.message).join(', ')}
              variant="secondary"
              disabled={!isEdit}
            />
          )}
        </Field>
      </FormRow>
      <FormRow>
        <Field name="city">
          {({ name, state, handleBlur, handleChange }) => (
            <TextField
              name={name}
              label={t('fields.city.label', {
                fallback: 'City',
              })}
              placeholder={t('fields.city.placeholder', {
                fallback: 'Enter your city',
              })}
              value={String(state.value)}
              onBlur={handleBlur}
              onChange={e => handleChange(e.target.value)}
              hint={state.meta.errors.map(err => err?.message).join(', ')}
              variant="secondary"
              disabled={!isEdit}
            />
          )}
        </Field>
        <Field name="country">
          {field => (
            <Autocomplete
              items={Object.entries(allowedCountries).map(([value, label]) => ({
                value,
                label: label.name,
              }))}
              label={t('fields.country.label', {
                fallback: 'Country/Region',
              })}
              placeholder={t('fields.country.placeholder', {
                fallback: 'Search for a country',
              })}
              initialValue={String(field.state.value)}
              onChange={value => field.handleChange(value)}
              hint={field.state.meta.errors.map(err => err?.message).join(', ')}
              variant="secondary"
              disabled={!isEdit}
            />
          )}
        </Field>
        <Field name="zip">
          {({ name, state, handleBlur, handleChange }) => (
            <TextField
              name={name}
              type="number"
              label={t('fields.zip.label', {
                fallback: 'Postal code',
              })}
              placeholder={t('fields.zip.placeholder', {
                fallback: 'Enter your postal code',
              })}
              value={String(state.value)}
              onBlur={handleBlur}
              onChange={e => handleChange(e.target.value)}
              hint={state.meta.errors.map(err => err?.message).join(', ')}
              variant="secondary"
              disabled={!isEdit}
            />
          )}
        </Field>
      </FormRow>
    </form>
  );
};
