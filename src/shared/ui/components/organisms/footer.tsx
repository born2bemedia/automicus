'use client';

import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { Text, Title } from '@/shared/ui/components/atoms';
import { Link } from '@/shared/ui/components/molecules';

export const Footer = () => {
  const t = useTranslations('footer');
  const pathname = usePathname();
  const locale = useLocale();

  return !pathname.startsWith(`/${locale}/account`) ? (
    <footer className="bg-primary flex flex-col gap-10 p-10">
      <section className="flex justify-between max-md:flex-col max-md:gap-10">
        <section className="flex flex-col gap-10">
          <div className="flex flex-col">
            <Title as="h3" weight="normal" uppercase>
              {t('title.0', { fallback: 'We provide automation tools' })} —
            </Title>
            <Title as="h3" uppercase>
              {t('title.1', { fallback: 'your strategy drives the results.' })}
            </Title>
          </div>
          <section className="flex gap-[100px] max-md:flex-col max-md:gap-10">
            <div className="flex flex-col gap-6">
              <Text size="xl" weight="medium" opacity="low" uppercase>
                {t('discover.title', { fallback: 'Discover' })}
              </Text>
              <div className="flex gap-12">
                <nav className="flex flex-col gap-2">
                  <Link
                    url="/bot-reviews"
                    placeholder={t('discover.links.0', {
                      fallback: 'Bot Reviews',
                    })}
                  />
                  <Link
                    url="/compare-bots"
                    placeholder={t('discover.links.1', {
                      fallback: 'Compare Bots',
                    })}
                  />
                  <Link
                    url="/bot-bundles"
                    placeholder={t('discover.links.2', {
                      fallback: 'Bot Bundles',
                    })}
                  />
                  <Link
                    url="/deals"
                    placeholder={t('discover.links.3', { fallback: 'Deals' })}
                  />
                </nav>
                <nav className="flex flex-col gap-2">
                  <Link
                    url="/catalog"
                    placeholder={t('discover.links2.0', {
                      fallback: 'Catalog',
                    })}
                  />
                  <Link
                    url="/about-us"
                    placeholder={t('discover.links2.1', {
                      fallback: 'About Us',
                    })}
                  />
                  <Link
                    url="/faq"
                    placeholder={t('discover.links2.2', { fallback: 'FAQ' })}
                  />
                  <Link
                    url="/contact"
                    placeholder={t('discover.links2.3', {
                      fallback: 'Contact',
                    })}
                  />
                </nav>
              </div>
            </div>
            <section className="flex gap-[100px] max-md:flex-col max-md:gap-10">
              <div className="flex flex-col gap-6">
                <Text size="xl" weight="medium" opacity="low" uppercase>
                  {t('contact', { fallback: 'Contact' })}
                </Text>
                <nav className="flex flex-col gap-2">
                  <Link
                    url="mailto:info@automicus.com"
                    placeholder="info@automicus.com"
                  />
                  {/* <Link url="#" placeholder="Phone" /> */}
                </nav>
              </div>
              <div className="flex flex-col gap-6">
                <Text size="xl" weight="medium" opacity="low" uppercase>
                  Legal
                </Text>
                <section className="flex flex-col gap-2">
                  <Link
                    url="/terms-of-use"
                    placeholder={t('policies.0', { fallback: 'Terms of Use' })}
                  />
                  <Link
                    url="/privacy-policy"
                    placeholder={t('policies.1', {
                      fallback: 'Privacy Policy',
                    })}
                  />
                  <Link
                    url="/cookie-policy"
                    placeholder={t('policies.2', { fallback: 'Cookie Policy' })}
                  />
                  <Link
                    url="/refund-policy"
                    placeholder={t('policies.3', { fallback: 'Refund Policy' })}
                  />
                </section>
              </div>
              <div className="flex flex-col gap-6">
                <Text size="xl" weight="medium" opacity="low" uppercase>
                  {t('location.title', { fallback: 'Location' })}
                </Text>
                <nav className="flex flex-col gap-2">
                  <Text>
                    {t('location.registeredAddress', {
                      fallback: 'Registered Address:',
                    })}
                    <br /> 2nd Floor College House, 17 King Edwards Road,
                    Ruislip, London, United Kingdom, HA4 7AE
                  </Text>
                  <Text>
                    {t('location.officeAddress', {
                      fallback: 'Office Address:',
                    })}{' '}
                    <br /> 5th Floor, Office 502, 70 Brompton Road, London SW3
                    1ER, United Kingdom
                  </Text>
                  <Text>
                    {t('location.registeredNumber', {
                      fallback: 'Registered Number:',
                    })}{' '}
                    <br />
                    16735132
                  </Text>
                </nav>
              </div>
            </section>
          </section>
        </section>
      </section>
      <span className="h-px w-full bg-[rgba(0,39,68,0.10)]" />
      <section className="text-center opacity-50">
        <Text>
          © 2025 AQM Global Ltd.{' '}
          {t('copyright', { fallback: 'All rights reserved.' })}
        </Text>
      </section>
    </footer>
  ) : null;
};
