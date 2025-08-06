'use server';

import type { ChangePasswordSchema } from '../model/schema';

export async function changePassword({
  currentPassword: password,
  newPassword: confirmPassword,
  userId,
}: ChangePasswordSchema & { userId: number }) {
  const res = await fetch(`${process.env.SERVER_URL}/api/users/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, confirmPassword }),
  });

  return await res.json();
}
