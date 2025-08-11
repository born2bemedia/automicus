'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/components/atoms';

export const InfoBlock = () => {
  return (
    <section className="m-1 flex gap-1">
      <div className="flex w-1/2 flex-col gap-1">
        <PhoneEmail />
        <Socials />
      </div>
      <Address />
    </section>
  );
};

const PhoneEmail = () => {
  const t = useTranslations('contact.infoBlock');

  return (
    <section className="flex flex-col gap-10 rounded-lg bg-[#181818] p-20">
      <div className="flex flex-col gap-3">
        <Text size="2xl" color="light" weight="bold" uppercase>
          {t('phoneEmail', { fallback: 'Phone & Email' })}
        </Text>
        <Text color="light" weight="medium">
          {t('phoneEmailText', {
            fallback:
              'For immediate assistance, feel free to contact us by phone or email.',
          })}
        </Text>
      </div>
      <div className="flex items-center justify-between">
        <Link href="tel:+1 000 000 000" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19.2291 15.26L16.6891 14.97C16.3904 14.9349 16.0877 14.968 15.8036 15.0667C15.5196 15.1654 15.2616 15.3273 15.0491 15.54L13.2091 17.38C10.3705 15.9359 8.06313 13.6286 6.61906 10.79L8.46906 8.94001C8.89906 8.51001 9.10906 7.91001 9.03906 7.30001L8.74906 4.78001C8.69258 4.2921 8.45853 3.84204 8.09153 3.51561C7.72452 3.18918 7.25023 3.00921 6.75906 3.01001H5.02906C3.89906 3.01001 2.95906 3.95001 3.02906 5.08001C3.55906 13.62 10.3891 20.44 18.9191 20.97C20.0491 21.04 20.9891 20.1 20.9891 18.97V17.24C20.9991 16.23 20.2391 15.38 19.2291 15.26Z"
              fill="#CBFF00"
            />
          </svg>
          <Text color="light" weight="medium">
            +1 000 000 000
          </Text>
        </Link>
        <Link
          href="mailto:info@automicus.com"
          className="flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12.53 12.67C12.21 12.87 11.79 12.87 11.47 12.67L4.4 8.25C4.29973 8.19371 4.21192 8.11766 4.14189 8.02645C4.07186 7.93525 4.02106 7.83078 3.99258 7.71937C3.96409 7.60796 3.9585 7.49194 3.97616 7.37831C3.99381 7.26468 4.03434 7.15581 4.09528 7.0583C4.15623 6.96079 4.23632 6.87666 4.33073 6.811C4.42513 6.74533 4.53187 6.69951 4.6445 6.6763C4.75712 6.65309 4.87328 6.65297 4.98595 6.67595C5.09863 6.69893 5.20546 6.74453 5.3 6.81L12 11L18.7 6.81C18.7945 6.74453 18.9014 6.69893 19.014 6.67595C19.1267 6.65297 19.2429 6.65309 19.3555 6.6763C19.4681 6.69951 19.5749 6.74533 19.6693 6.811C19.7637 6.87666 19.8438 6.96079 19.9047 7.0583C19.9657 7.15581 20.0062 7.26468 20.0238 7.37831C20.0415 7.49194 20.0359 7.60796 20.0074 7.71937C19.9789 7.83078 19.9281 7.93525 19.8581 8.02645C19.7881 8.11766 19.7003 8.19371 19.6 8.25Z"
              fill="#CBFF00"
            />
          </svg>
          <Text color="light" weight="medium">
            info@automicus.com
          </Text>
        </Link>
      </div>
    </section>
  );
};

const Socials = () => {
  const t = useTranslations('contact.info');

  return (
    <section className="flex flex-col gap-10 rounded-lg bg-[#181818] p-20">
      <div className="flex flex-col gap-3">
        <Text size="2xl" color="light" weight="bold" uppercase>
          {t('connectTitle', { fallback: 'Connect with Us on Social Media' })}
        </Text>
        <Text color="light" weight="medium">
          {t('connectText', {
            fallback:
              'Stay connected and follow us for updates, news, and support through our social media channels.',
          })}
        </Text>
      </div>
    </section>
  );
};

const Address = () => {
  const t = useTranslations('contact.info');

  return (
    <section className="flex flex-col justify-center gap-10 rounded-lg bg-[#181818] p-20">
      <div className="flex flex-col gap-3">
        <Text size="2xl" color="light" weight="bold" uppercase>
          {t('addressTitle', { fallback: 'Our Address' })}
        </Text>
        <Text color="light" weight="medium">
          {t('addressText', {
            fallback:
              'Find us at our main office location for any in-person inquiries or meetings.',
          })}
        </Text>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-2">
          <Text color="light" weight="medium">
            {t('registeredAddress', { fallback: 'Registered Address:' })}
          </Text>
          <iframe
            className="h-[192px] w-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19545.346378834995!2d21.0272322!3d52.2403267!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eceace832a48f%3A0x99305ace879a193c!2sPiotra%20Wysockiego%2C%20Warszawa%2C%20Poland!5e0!3m2!1sen!2sua!4v1754904712879!5m2!1sen!2sua"
            width="600"
            height="450"
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex flex-col gap-2">
          <Text color="light" weight="medium">
            {t('officeAddress', { fallback: 'Office Address:' })}
          </Text>
          <iframe
            className="h-[192px] w-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19545.346378834995!2d21.0272322!3d52.2403267!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eceace832a48f%3A0x99305ace879a193c!2sPiotra%20Wysockiego%2C%20Warszawa%2C%20Poland!5e0!3m2!1sen!2sua!4v1754904712879!5m2!1sen!2sua"
            width="600"
            height="450"
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
