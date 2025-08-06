import { v } from '@/shared/lib/forms';

export const editUserSchema = v.object({
  firstName: v.pipe(v.string(), v.minLength(3, 'This field must be filled.')),
  lastName: v.pipe(v.string(), v.minLength(3, 'This field must be filled.')),
  email: v.pipe(v.string(), v.email('Invalid email address')),
  phone: v.pipe(v.string(), v.minLength(10, 'This field must be filled.')),
  addressLine1: v.pipe(
    v.string(),
    v.minLength(1, 'This field must be filled.'),
  ),
  addressLine2: v.pipe(
    v.string(),
    v.minLength(1, 'This field must be filled.'),
  ),
  country: v.pipe(v.string(), v.minLength(1, 'This field must be filled.')),
  city: v.pipe(v.string(), v.minLength(1, 'This field must be filled.')),
  zip: v.pipe(v.string(), v.minLength(1, 'This field must be filled.')),
});

export type EditUserSchema = v.InferOutput<typeof editUserSchema>;
