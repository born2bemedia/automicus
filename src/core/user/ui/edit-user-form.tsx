'use client';

import { useState } from 'react';

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

      console.log('@res', res);

      if (res.message === 'Updated successfully.') {
        setIsEdit(false);
        notifySuccess('User updated successfully');
      } else {
        notifyWarning('Failed to update user. Please try again later.');
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
            Your Data
          </Title>
          <Text color="muted" weight="medium">
            Manage your data, addresses, emails and passwords
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
                    'Saving...'
                  ) : (
                    <>
                      <DiskIcon />
                      Save
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
              Cancel
            </Button>
          </div>
        ) : (
          <Button
            size="md"
            className="gap-2.5 px-6 py-4 max-md:w-full max-md:justify-center"
            onClick={() => setIsEdit(true)}
          >
            <PencilIcon />
            Edit
          </Button>
        )}
      </header>
      <FormRow>
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
              variant="secondary"
              disabled={!isEdit}
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
              label="Email address"
              placeholder="Enter email address"
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
              label="Phone number"
              placeholder="Enter phone number"
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
        Your Address
      </Title>
      <FormRow>
        <Field name="addressLine1">
          {({ name, state, handleBlur, handleChange }) => (
            <TextField
              name={name}
              label="Address line 1"
              placeholder="Enter your address line"
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
              label="Address line 2"
              placeholder="Enter your address line"
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
              label="City"
              placeholder="Enter your city"
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
              label="Country/Region"
              placeholder="Search for a country"
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
              label="Postal code"
              placeholder="Enter your postal code"
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
