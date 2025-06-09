import { v } from '@/shared/lib/forms';
import { isPhoneValid } from '@/shared/lib/utils/string/is-phone-valid';

export const contactSchema = v.object({
  name: v.pipe(v.string(), v.minLength(2, 'Please enter your name.')),
  email: v.pipe(v.string(), v.email('Please enter your email address.')),
  phone: v.pipe(
    v.string(),
    v.minLength(1, 'Please enter your phone.'),
    v.custom(
      (input: unknown) => isPhoneValid(String(input)),
      'Please enter a valid phone number.',
    ),
  ),
  message: v.pipe(v.string()),
});

export type ContactSchema = v.InferInput<typeof contactSchema>;
