'use server';

import sgMail from '@sendgrid/mail';

import { requestFormBody } from '@/features/email-letters/request-form-body';

import {
  EMAIL_USER,
  SENDGRID_API_KEY,
  SENDGRID_FROM_EMAIL,
} from '@/shared/config/env';

import type { ContactSchema } from '../model/schema';

export async function sendContactForm({
  email,
  message,
  name,
  phone,
}: ContactSchema) {
  if (!SENDGRID_API_KEY) {
    throw new Error('SENDGRID_API_KEY is not configured.');
  }

  if (!SENDGRID_FROM_EMAIL) {
    throw new Error('SENDGRID_FROM_EMAIL is not configured.');
  }

  sgMail.setApiKey(SENDGRID_API_KEY);

  const adminMsg = {
    to: EMAIL_USER,
    from: SENDGRID_FROM_EMAIL,
    subject: 'New Message from Contact Form',
    html: `<p><b>Full Name:</b> ${name}</p>
     <p><b>Email:</b> ${email}</p>
     <p><b>Phone:</b> ${phone}</p>
     <p><b>Message:</b> ${message ?? 'No message provided.'}</p>`,
  };

  const userMsg = {
    to: email,
    from: SENDGRID_FROM_EMAIL,
    subject:
      "We've Received Your Inquiry - Thank You for Contacting Automicus!",
    html: requestFormBody({ username: name }),
  };

  try {
    const [adminResponse] = await sgMail.send(adminMsg);
    await sgMail.send(userMsg);

    return { data: adminResponse.body, status: adminResponse.statusCode };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to send email: ${error.message}`);
    }
    throw new Error('Failed to send email.');
  }
}
