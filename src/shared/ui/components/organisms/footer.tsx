'use client';

import { Text, Title } from '@/shared/ui/components/atoms';
import { Link } from '@/shared/ui/components/molecules';

export const Footer = () => {
  return (
    <footer className="bg-primary flex flex-col gap-10 p-10">
      <section className="flex justify-between max-md:flex-col max-md:gap-10">
        <section className="flex flex-col gap-10">
          <div className="flex flex-col">
            <Title as="h3" weight="normal" uppercase>
              We provide automation tools
            </Title>
            <Title as="h3" uppercase>
              your strategy drives the results.
            </Title>
          </div>
          <section className="flex gap-[100px] max-md:flex-col max-md:gap-10">
            <div className="flex flex-col gap-6">
              <Text size="xl" weight="medium" opacity="low" uppercase>
                Discover
              </Text>
              <div className="flex gap-12">
                <nav className="flex flex-col gap-2">
                  <Link url="/bot-reviews" placeholder="Bot Reviews" />
                  <Link url="/compare-bots" placeholder="Compare Bots" />
                  <Link url="/bot-bundles" placeholder="Bot Bundles" />
                  <Link url="/deals" placeholder="Deals" />
                </nav>
                <nav className="flex flex-col gap-2">
                  <Link url="/catalog" placeholder="Catalog" />
                  <Link url="/about-us" placeholder="About Us" />
                  <Link url="/faq" placeholder="FAQ" />
                  <Link url="/contact" placeholder="Contact" />
                </nav>
              </div>
            </div>
            <section className="flex gap-[100px] max-md:flex-col max-md:gap-10">
              <div className="flex flex-col gap-6">
                <Text size="xl" weight="medium" opacity="low" uppercase>
                  Contact
                </Text>
                <nav className="flex flex-col gap-2">
                  <Link url="#" placeholder="Email" />
                  <Link url="#" placeholder="Phone" />
                </nav>
              </div>
              <div className="flex flex-col gap-6">
                <Text size="xl" weight="medium" opacity="low" uppercase>
                  Location
                </Text>
                <nav className="flex flex-col gap-2">
                  <Text>Registered Address:</Text>
                  <Text>Office Address:</Text>
                  <Text>Registered Number:</Text>
                </nav>
              </div>
            </section>
          </section>
        </section>
        <section className="flex flex-col gap-2">
          <Link url="/terms-of-use" placeholder="Terms of Use" />
          <Link url="/privacy-policy" placeholder="Privacy Policy" />
          <Link url="/cookie-policy" placeholder="Cookie Policy" />
          <Link url="/refund-policy" placeholder="Refund Policy" />
        </section>
      </section>
      <section className="ml-auto opacity-50 max-md:mx-auto">
        <Text>© 2025 [Company]. All rights reserved.</Text>
      </section>
    </footer>
  );
};
