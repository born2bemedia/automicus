export const makeEmailBody = ({
  from,
  message,
  to,
  subject,
}: {
  to: string;
  from: string;
  subject: string;
  message: string;
}) => {
  const email = [
    `To: ${to}`,
    `From: ${from}`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/html; charset=UTF-8`,
    '',
    message,
  ].join('\n');

  return Buffer.from(email)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
};
