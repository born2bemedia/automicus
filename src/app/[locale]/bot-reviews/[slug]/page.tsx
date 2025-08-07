import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { getReview } from '@/features/reviews/api';
import { ReviewRenderer } from '@/features/reviews/ui';

import { SERVER_URL } from '@/shared/config/env';
import { Button, Text } from '@/shared/ui/components/atoms';
import { Title } from '@/shared/ui/components/atoms/title';

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
    locale: string;
  };
}): Promise<Metadata> {
  const { slug, locale } = params;
  const { data } = await getReview({ slug, locale });

  return {
    title: data.metaTitle,
    description: data.metaDescription,
  };
}

export default async function BotReviewPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const { data } = await getReview({ slug, locale });

  const t = await getTranslations('botReviews.slug');

  return (
    <section className="flex flex-col gap-20 px-[160px] py-20 max-md:gap-10 max-md:p-6">
      <Image
        className="h-[300px] w-full rounded-lg object-cover max-md:h-[150px]"
        src={`${SERVER_URL}/${data.img.url}`}
        alt="bg-image"
        width={1000}
        height={300}
        unoptimized
        priority
      />
      <main className="flex flex-col gap-10">
        <Title color="secondary" uppercase>
          {data.title}
        </Title>
        <ReviewRenderer content={data.content.root.children} />
        <Title color="secondary" uppercase>
          {t('subtitle', { fallback: 'Like This Bot?' })}
        </Title>
        <Text color="light" weight="medium">
          {t('text', {
            fallback:
              'Get started with Automicus HedgeMaster Scalper and take your Forex trading to the next level with AI-powered scalping and superior risk management.',
          })}
        </Text>
        <Link href={`/catalog/${data.slug}`}>
          <Button>{t('btn', { fallback: 'Explore Bot' })}</Button>
        </Link>
      </main>
    </section>
  );
}
