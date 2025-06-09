'use server';

import { google } from 'googleapis';

import {
  EMAIL_CLIENT_ID,
  EMAIL_CLIENT_SECRET,
  EMAIL_REFRESH_TOKEN,
  EMAIL_USER,
} from '@/shared/config/env';
import { makeEmailBody } from '@/shared/lib/utils/email';

import type { ContactSchema } from '../model/schema';

export async function sendContactForm({
  email,
  message,
  name,
  phone,
}: ContactSchema) {
  const OAuth2 = google.auth.OAuth2;
  const oauth2Client = new OAuth2(
    EMAIL_CLIENT_ID,
    EMAIL_CLIENT_SECRET,
    'https://developers.google.com/oauthplayground',
  );

  oauth2Client.setCredentials({
    refresh_token: EMAIL_REFRESH_TOKEN,
  });

  const accessToken = await oauth2Client.getAccessToken();

  if (!accessToken.token) {
    throw new Error('Failed to generate access token.');
  }

  const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

  const adminBody = makeEmailBody({
    to: EMAIL_USER,
    from: EMAIL_USER,
    subject: 'New Message from Contact Form',
    message: `<p><b>Full Name:</b> ${name}</p>
     <p><b>Email:</b> ${email}</p>
     <p><b>Phone:</b> ${phone}</p>
     <p><b>Message:</b> ${message ?? 'No message provided.'}</p>`,
  });

  const userBody = makeEmailBody({
    to: email,
    from: EMAIL_USER,
    subject:
      "We've Received Your Inquiry - Thank You for Contacting Automicus!",
    message: 'Mock',
  });

  const res = await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: adminBody,
    },
  });

  await gmail.users.messages.send({
    userId: 'me',
    requestBody: { raw: userBody },
  });

  if (res.status !== 200) {
    throw new Error(`Failed to send email. Status: ${res.status}`);
  }

  return { data: res.data, status: res.statusText };
}
