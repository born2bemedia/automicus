'use server';

import sgMail from '@sendgrid/mail';

import { confirmOrderBody } from '@/features/email-letters/confirm-order-body';

import {
  SENDGRID_API_KEY,
  SENDGRID_FROM_EMAIL,
} from '@/shared/config/env';

export async function sendEmailOrder({
  userEmail,
  username,
}: {
  userEmail: string;
  username: string;
}) {
  if (!SENDGRID_API_KEY) {
    throw new Error('SENDGRID_API_KEY is not configured.');
  }

  if (!SENDGRID_FROM_EMAIL) {
    throw new Error('SENDGRID_FROM_EMAIL is not configured.');
  }

  sgMail.setApiKey(SENDGRID_API_KEY);

  const msg = {
    to: userEmail,
    from: SENDGRID_FROM_EMAIL,
    subject: 'Your Automicus Order Confirmation',
    html: confirmOrderBody({ username }),
  };

  try {
    const [response] = await sgMail.send(msg);
    return { data: response.body, status: response.statusCode };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to send email: ${error.message}`);
    }
    throw new Error('Failed to send email.');
  }
}
