import { v } from '@/shared/lib/forms';

export const contactSchema = v.object({
  name: v.pipe(v.string(), v.minLength(2, 'Please enter your name.')),
  email: v.pipe(v.string(), v.email('Please enter your email address.')),
  phone: v.pipe(v.string(), v.minLength(5, 'Please enter your phone.')),
  message: v.pipe(v.string()),
});

export type ContactSchema = v.InferInput<typeof contactSchema>;
