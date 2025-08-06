'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { useForm } from '@/shared/lib/forms';
import { notifySuccess, notifyWarning } from '@/shared/lib/toast';
import { Button, TextField, Title } from '@/shared/ui/components/atoms';
import { FormRow } from '@/shared/ui/components/molecules';
import { CloseIcon } from '@/shared/ui/icons/fill/close';
import { DiskIcon } from '@/shared/ui/icons/fill/disk';
import { PencilIcon } from '@/shared/ui/icons/fill/pencil';

import { changePassword } from '../api/change-password';
import { changePasswordSchema } from '../model/schema';
import { useUser } from '@/core/user/model/use-user';

export const ChangePasswordForm = () => {
  const [isEdit, setIsEdit] = useState(false);

  const t = useTranslations('account.changePassword');

  const user = useUser();

  const { Field, Subscribe, handleSubmit, reset } = useForm({
    defaultValues: {
      currentPassword: '',
      newPassword: '',
    },
    validators: {
      onSubmit: changePasswordSchema,
    },
    onSubmit: async data => {
      const res = await changePassword({
        ...data.value,
        userId: user?.id ?? -1,
      });

      console.log('res', res);

      if (res.message === 'Updated successfully.') {
        notifySuccess(
          t('success', { fallback: 'Password changed successfully' }),
        );
        reset();
        setIsEdit(false);
      } else {
        console.error(res);
        notifyWarning(
          t('error', {
            fallback: 'Password change failed. Please try again later.',
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
      <div className="flex items-center justify-between max-md:flex-col max-md:gap-4">
        <Title size="3xl" color="light" weight="bold">
          {t('title', { fallback: 'Your Password' })}
        </Title>
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
      </div>
      <FormRow>
        <Field name="currentPassword">
          {({ name, state, handleBlur, handleChange }) => (
            <TextField
              name={name}
              label={t('fields.currentPassword.label', {
                fallback: 'Current Password',
              })}
              placeholder={t('fields.currentPassword.placeholder', {
                fallback: 'Enter Your Current Password',
              })}
              type="password"
              value={String(state.value)}
              onBlur={handleBlur}
              onChange={e => handleChange(e.target.value)}
              hint={state.meta.errors.map(err => err?.message).join(', ')}
              variant="secondary"
            />
          )}
        </Field>
        <Field name="newPassword">
          {({ name, state, handleBlur, handleChange }) => (
            <TextField
              name={name}
              label={t('fields.newPassword.label', {
                fallback: 'New Password',
              })}
              placeholder={t('fields.newPassword.placeholder', {
                fallback: 'Enter Your New Password',
              })}
              type="password"
              value={String(state.value)}
              onBlur={handleBlur}
              onChange={e => handleChange(e.target.value)}
              hint={state.meta.errors.map(err => err?.message).join(', ')}
              variant="secondary"
            />
          )}
        </Field>
      </FormRow>
    </form>
  );
};
