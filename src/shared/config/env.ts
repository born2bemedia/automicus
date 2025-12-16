export const SERVER_URL = process.env.SERVER_URL;
export const EMAIL_CLIENT_ID = process.env.EMAIL_CLIENT_ID ?? '';
export const EMAIL_CLIENT_SECRET = process.env.EMAIL_CLIENT_SECRET ?? '';
export const EMAIL_USER = process.env.EMAIL_USER ?? '';
export const EMAIL_REFRESH_TOKEN = process.env.EMAIL_REFRESH_TOKEN ?? '';

// SendGrid configuration
export const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY ?? '';
export const SENDGRID_FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL ?? '';