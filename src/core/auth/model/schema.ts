import { v } from '@/shared/lib/forms';

export const signUpSchema = v.object({
  fullName: v.pipe(v.string(), v.minLength(1, 'Full name is required')),
  email: v.pipe(v.string(), v.email('Invalid email address')),
  password: v.pipe(
    v.string(),
    v.minLength(6, 'Password must be at least 6 characters long'),
  ),
});

export type SignUpSchema = v.InferOutput<typeof signUpSchema>;

export const loginSchema = v.object({
  email: v.pipe(v.string(), v.email('Invalid email address')),
  password: v.pipe(v.string(), v.minLength(1, 'Password is required')),
});
