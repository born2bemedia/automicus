import { v } from '@/shared/lib/forms';

export const cartSchema = v.object({
  fullName: v.pipe(v.string(), v.minLength(3, 'This field must be filled.')),
  email: v.pipe(v.string(), v.email('The email is invalid.')),
  addressLine1: v.pipe(v.string(), v.minLength(1, 'This field is required.')),
  addressLine2: v.pipe(v.string(), v.minLength(1, 'This field is required.')),
  city: v.pipe(v.string(), v.minLength(1, 'This field is required.')),
  country: v.pipe(v.string(), v.minLength(1, 'This field is required.')),
  zip: v.pipe(v.string(), v.minLength(1, 'This field is required.')),
  phone: v.pipe(v.string(), v.minLength(5, 'This field is required.')),
  isAgreeRefund: v.pipe(
    v.boolean(),
    v.literal(true, 'You must agree to the terms and conditions'),
  ),
  isAgreeTerms: v.pipe(
    v.boolean(),
    v.literal(true, 'You must agree to the terms and conditions'),
  ),
});
