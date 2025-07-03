'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import { lsRead, lsWrite } from '@/shared/lib/utils/browser';
import { cn } from '@/shared/lib/utils/styles';
import { Button } from '@/shared/ui/components/atoms/button';
import { Text } from '@/shared/ui/components/atoms/text';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = lsRead('isCookiesAccepted');
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    lsWrite('isCookiesAccepted', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => setIsVisible(false);

  return (
    <div
      className={cn(
        'fixed right-6 bottom-6 left-6 z-20 flex w-[calc(100%-48px)] items-center gap-4 rounded-lg border border-[#DBDBDB] bg-white p-6 shadow-[0px_0px_25px_0px_rgba(0,0,0,0.05)] max-md:flex-col max-md:items-start',
        !isVisible && 'hidden',
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="65"
        viewBox="0 0 64 65"
        fill="none"
        className="shrink-0"
      >
        <path
          d="M31.9997 59.1667C28.3108 59.1667 24.8441 58.4663 21.5997 57.0654C18.3552 55.6645 15.533 53.765 13.133 51.3667C10.733 48.9685 8.83345 46.1463 7.43434 42.9001C6.03523 39.6539 5.33479 36.1872 5.33301 32.5001C5.33301 28.9001 6.0779 25.4005 7.56767 22.0014C9.05745 18.6023 11.1241 15.613 13.7677 13.0334C16.4112 10.4539 19.5552 8.4983 23.1997 7.16674C26.8441 5.83519 30.8441 5.43519 35.1997 5.96674C35.8663 6.05563 36.3775 6.33385 36.733 6.80141C37.0886 7.26896 37.2886 7.90185 37.333 8.70007C37.4219 11.5445 38.4779 13.9783 40.501 16.0014C42.5241 18.0245 44.9348 19.0796 47.733 19.1667C48.6663 19.2112 49.3775 19.4779 49.8663 19.9667C50.3552 20.4556 50.6219 21.2112 50.6663 22.2334C50.7552 24.1001 51.3223 25.6334 52.3677 26.8334C53.413 28.0334 54.8681 28.9445 56.733 29.5667C57.3552 29.789 57.8335 30.1116 58.1677 30.5347C58.5019 30.9579 58.6681 31.4796 58.6663 32.1001C58.7552 35.789 58.1108 39.2779 56.733 42.5667C55.3552 45.8556 53.4663 48.7339 51.0663 51.2014C48.6663 53.669 45.8219 55.613 42.533 57.0334C39.2441 58.4539 35.733 59.165 31.9997 59.1667ZM27.9997 27.1667C29.1108 27.1667 30.0557 26.7783 30.8343 26.0014C31.613 25.2245 32.0015 24.2796 31.9997 23.1667C31.9979 22.0539 31.6095 21.1099 30.8343 20.3347C30.0592 19.5596 29.1143 19.1703 27.9997 19.1667C26.885 19.1632 25.941 19.5525 25.1677 20.3347C24.3943 21.117 24.005 22.061 23.9997 23.1667C23.9943 24.2725 24.3837 25.2174 25.1677 26.0014C25.9517 26.7854 26.8957 27.1739 27.9997 27.1667ZM22.6663 40.5001C23.7775 40.5001 24.7223 40.1116 25.501 39.3347C26.2797 38.5578 26.6681 37.613 26.6663 36.5001C26.6646 35.3872 26.2761 34.4432 25.501 33.6681C24.7259 32.893 23.781 32.5036 22.6663 32.5001C21.5517 32.4965 20.6077 32.8859 19.8343 33.6681C19.061 34.4503 18.6717 35.3943 18.6663 36.5001C18.661 37.6059 19.0503 38.5507 19.8343 39.3347C20.6183 40.1187 21.5623 40.5072 22.6663 40.5001ZM39.9997 43.1667C40.7552 43.1667 41.389 42.9107 41.901 42.3987C42.413 41.8867 42.6681 41.2539 42.6663 40.5001C42.6646 39.7463 42.4086 39.1134 41.8983 38.6014C41.3881 38.0894 40.7552 37.8334 39.9997 37.8334C39.2441 37.8334 38.6112 38.0894 38.101 38.6014C37.5908 39.1134 37.3348 39.7463 37.333 40.5001C37.3312 41.2539 37.5872 41.8876 38.101 42.4014C38.6148 42.9152 39.2477 43.1703 39.9997 43.1667Z"
          fill="#002744"
        />
      </svg>
      <section className="flex flex-col gap-3">
        <Text color="primary" weight="medium" size="2xl">
          Cookie settings
        </Text>
        <Text size="sm" opacity="medium">
          Cookies help us improve our website. By clicking &apos;Accept,&apos;
          you agree to our use of cookies for functionality, analytics, and
          personalized content. Learn more in our{' '}
          <Link href="/cookie-policy" className="underline">
            Cookie Policy
          </Link>
          .
        </Text>
      </section>
      <div className="flex items-center gap-6">
        <Button onClick={handleDecline} variant="flat" fullWidth>
          Decline
        </Button>
        <Button onClick={handleAccept} fullWidth>
          Accept
        </Button>
      </div>
    </div>
  );
};
