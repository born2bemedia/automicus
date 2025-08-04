import type { useTranslations } from 'next-intl';

import { v } from '@/shared/lib/forms';

export const getCartSchema = (t: ReturnType<typeof useTranslations>) =>
  v.object({
    fullName: v.pipe(v.string(), v.minLength(3, t('mustFilled'))),
    email: v.pipe(v.string(), v.email(t('email'))),
    addressLine1: v.pipe(v.string(), v.minLength(1, t('required'))),
    addressLine2: v.pipe(v.string(), v.minLength(1, t('required'))),
    city: v.pipe(v.string(), v.minLength(1, t('required'))),
    country: v.pipe(v.string(), v.minLength(1, t('required'))),
    zip: v.pipe(v.string(), v.minLength(1, t('required'))),
    phone: v.pipe(v.string(), v.minLength(5, t('required'))),
    isAgreeRefund: v.pipe(v.boolean(), v.literal(true, t('required'))),
    isAgreeTerms: v.pipe(v.boolean(), v.literal(true, t('required'))),
  });
