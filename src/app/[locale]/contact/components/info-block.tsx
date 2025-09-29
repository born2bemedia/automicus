'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/components/atoms';

export const InfoBlock = () => {
  return (
    <section className="m-1 flex gap-1 max-md:flex-col">
      <div className="flex w-1/2 flex-col gap-1 max-md:w-full">
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
    <section className="flex flex-col gap-10 rounded-lg bg-[#181818] p-20 max-md:p-6">
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
        {/* <Link href="tel:+1 000 000 000" className="flex items-center gap-2">
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
        </Link> */}
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
    <section className="flex flex-col gap-10 rounded-lg bg-[#181818] p-20 max-md:p-6">
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
      <div className="flex items-center gap-5">
        <XIcon />
        <FbIcon />
        <LinkedInIcon />
      </div>
    </section>
  );
};

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
  >
    <rect x="3" y="3" width="32" height="32" rx="9" fill="#111111" />
    <rect
      x="1.5"
      y="1.5"
      width="35"
      height="35"
      rx="10.5"
      stroke="#111111"
      strokeOpacity="0.5"
      strokeWidth="3"
    />
    <mask
      id="mask0_987_34141"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="11"
      y="11"
      width="16"
      height="16"
    >
      <path d="M11 11H27V27H11V11Z" fill="white" />
    </mask>
    <g mask="url(#mask0_987_34141)">
      <path
        d="M23.6 11.7498H26.0537L20.6937 17.8915L27 26.2503H22.0629L18.1931 21.1818L13.7703 26.2503H11.3143L17.0469 19.6789L11 11.7509H16.0629L19.5554 16.3829L23.6 11.7498ZM22.7371 24.7783H24.0971L15.32 13.1452H13.8617L22.7371 24.7783Z"
        fill="#CBFF00"
      />
    </g>
  </svg>
);

const FbIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
  >
    <rect x="3" y="3" width="32" height="32" rx="9" fill="#111111" />
    <rect
      x="1.5"
      y="1.5"
      width="35"
      height="35"
      rx="10.5"
      stroke="#111111"
      strokeOpacity="0.5"
      strokeWidth="3"
    />
    <path
      d="M20.9951 11C19.9074 11 18.8643 11.4272 18.0952 12.1876C17.3262 12.948 16.8941 13.9794 16.8941 15.0548V17.3123H14.6995C14.5896 17.3123 14.5 17.4 14.5 17.5096V20.4904C14.5 20.5991 14.5887 20.6877 14.6995 20.6877H16.8941V26.8027C16.8941 26.9115 16.9828 27 17.0936 27H20.1084C20.2183 27 20.3079 26.9123 20.3079 26.8027V20.6877H22.522C22.6133 20.6877 22.6931 20.6263 22.7153 20.5386L23.469 17.5578C23.4764 17.5287 23.477 17.4983 23.4707 17.469C23.4645 17.4396 23.4516 17.4121 23.4329 17.3884C23.4143 17.3647 23.3904 17.3456 23.3632 17.3324C23.3359 17.3192 23.306 17.3124 23.2757 17.3123H20.3079V15.0548C20.3079 14.9656 20.3257 14.8772 20.3602 14.7948C20.3947 14.7123 20.4453 14.6374 20.5092 14.5743C20.573 14.5113 20.6487 14.4612 20.7321 14.4271C20.8155 14.3929 20.9048 14.3753 20.9951 14.3753H23.3005C23.4104 14.3753 23.5 14.2877 23.5 14.1781V11.1973C23.5 11.0885 23.4113 11 23.3005 11H20.9951Z"
      fill="#CBFF00"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
  >
    <rect x="3" y="3" width="32" height="32" rx="9" fill="#111111" />
    <rect
      x="1.5"
      y="1.5"
      width="35"
      height="35"
      rx="10.5"
      stroke="#111111"
      strokeOpacity="0.5"
      strokeWidth="3"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.0717 16.7268H19.8573V18.1143C20.2585 17.3163 21.2875 16.5993 22.8333 16.5993C25.7965 16.5993 26.5 18.1878 26.5 21.1023V26.5H23.5V21.766C23.5 20.1063 23.0988 19.1703 22.0773 19.1703C20.6605 19.1703 20.0717 20.179 20.0717 21.7653V26.5H17.0717V16.7268ZM11.9275 26.3725H14.9275V16.5993H11.9275V26.3725ZM15.3573 13.4125C15.3574 13.664 15.3075 13.9129 15.2105 14.1449C15.1136 14.377 14.9715 14.5874 14.7925 14.764C14.613 14.9426 14.4 15.0841 14.1658 15.1803C13.9316 15.2766 13.6807 15.3257 13.4275 15.325C12.9172 15.3239 12.4277 15.1227 12.064 14.7648C11.8857 14.5875 11.7441 14.3768 11.6474 14.1448C11.5506 13.9127 11.5005 13.6639 11.5 13.4125C11.5 12.9048 11.7025 12.4188 12.0648 12.0603C12.4275 11.7009 12.9176 11.4995 13.4283 11.5C13.9397 11.5 14.4302 11.7018 14.7925 12.0603C15.1547 12.4188 15.3573 12.9048 15.3573 13.4125Z"
      fill="#CBFF00"
    />
  </svg>
);

const Address = () => {
  const t = useTranslations('contact.info');

  return (
    <section className="flex flex-col justify-center gap-10 rounded-lg bg-[#181818] p-20 max-md:p-6">
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
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col gap-2">
          <Text color="light" weight="medium">
            {t('registeredAddress', { fallback: 'Registered Address:' })}
          </Text>
          <Text color="light" weight="medium">
            2nd Floor College House, 17 King Edwards Road, Ruislip, London,
            United Kingdom, HA4 7AE
          </Text>
          <iframe
            className="h-[192px] w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.6616254242003!2d-0.4286821!3d51.574436399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766c5ef9eeaaab%3A0x58f9eeec566a9e8!2sHouse%2C%202nd%20Floor%2C%2017%20King%20Edwards%20Rd%2C%20London%2C%20Ruislip%20HA4%207AE%2C%20UK!5e0!3m2!1sen!2sua!4v1758873187886!5m2!1sen!2sua"
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
          <Text color="light" weight="medium">
            5th Floor, Office 502, 70 Brompton Road, London SW3 1ER, United
            Kingdom
          </Text>
          <iframe
            className="h-[192px] w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7827.949048262274!2d-0.17045948881293804!3d51.50210053286726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760538bc1c4a07%3A0xe9836618f5adacc4!2s5th%20Floor%2C%20Office%20502%2C%2070%20Brompton%20Rd%2C%20London%20SW3%201ER%2C%20UK!5e0!3m2!1sen!2sua!4v1758873242984!5m2!1sen!2sua"
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
