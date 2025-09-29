import { Work_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Toaster } from 'sonner';

import { cn } from '@/shared/lib/utils';
import { Dialog } from '@/shared/ui/components/atoms';
import { Footer, Header, Preloader } from '@/shared/ui/components/organisms';
import { CookieConsent } from '@/shared/ui/components/organisms/cookie-consent';

import './globals.css';
import { routing } from '@/i18n/routing';

const workSans = Work_Sans({
  variable: '--font-work-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const aeonik = localFont({
  src: [
    {
      path: '/fonts/aeonik/light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '/fonts/aeonik/regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/aeonik/medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '/fonts/aeonik/semi-bold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '/fonts/aeonik/bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <GoogleAnalytics gaId="G-SXP03JL3JZ" />
      <body className={cn(workSans.variable, aeonik.className, 'antialiased')}>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Dialog />
          <Preloader />
          <CookieConsent />
          <Toaster position="top-right" richColors />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
