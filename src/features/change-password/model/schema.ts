import { v } from '@/shared/lib/forms';

export const changePasswordSchema = v.object({
  currentPassword: v.pipe(v.string(), v.minLength(1)),
  newPassword: v.pipe(v.string(), v.minLength(6)),
});

export type ChangePasswordSchema = v.InferInput<typeof changePasswordSchema>;
