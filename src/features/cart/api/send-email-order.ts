'use server';

import { google } from 'googleapis';

import { confirmOrderBody } from '@/features/email-letters/confirm-order-body';

import {
  EMAIL_CLIENT_ID,
  EMAIL_CLIENT_SECRET,
  EMAIL_REFRESH_TOKEN,
  EMAIL_USER,
} from '@/shared/config/env';
import { makeEmailBody } from '@/shared/lib/utils/email';

export async function sendEmailOrder({
  userEmail,
  username,
}: {
  userEmail: string;
  username: string;
}) {
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

  const userBody = makeEmailBody({
    to: userEmail,
    from: EMAIL_USER,
    subject: 'Your Automicus Order Confirmation',
    message: confirmOrderBody({ username }),
  });

  const res = await gmail.users.messages.send({
    userId: 'me',
    requestBody: { raw: userBody },
  });

  if (res.status !== 200) {
    throw new Error(`Failed to send email. Status: ${res.status}`);
  }

  return { data: res.data, status: res.statusText };
}
