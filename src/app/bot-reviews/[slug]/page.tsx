import Image from 'next/image';

import { getReview } from '@/features/reviews/api';
import { ReviewRenderer } from '@/features/reviews/ui';

import { SERVER_URL } from '@/shared/config/env';
import { Title } from '@/shared/ui/components/atoms/title';

export default async function BotReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data } = await getReview((await params).slug);

  return (
    <section className="flex flex-col gap-20 px-[160px] py-20 max-md:gap-10 max-md:p-6">
      <Image
        className="h-[300px] w-full rounded-lg object-cover max-md:h-[150px]"
        src={`${SERVER_URL}/${data.img.url}`}
        alt="bg-image"
        width={1000}
        height={300}
      />
      <main className="flex flex-col gap-10">
        <Title color="secondary" uppercase>
          {data.title}
        </Title>
        <ReviewRenderer content={data.content.root.children} />
      </main>
    </section>
  );
}
