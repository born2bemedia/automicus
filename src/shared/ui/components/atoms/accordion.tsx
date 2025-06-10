'use client';
import { type ReactNode, useRef, useState } from 'react';

import { cn } from '@/shared/lib/utils';
import { Title } from '@/shared/ui/components/atoms';
import { OpenIcon } from '@/shared/ui/icons/fill';

export const Accordion = ({
  values,
}: {
  values: {
    question: string;
    answer: ReactNode;
  }[];
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) =>
    setOpenIndex(prev => (prev === idx ? null : idx));

  return (
    <section className="flex flex-col gap-5">
      {values.map(({ question, answer }, i) => (
        <AccordionItem
          key={question}
          question={question}
          answer={answer}
          isOpen={openIndex === i}
          onToggle={() => toggle(i)}
        />
      ))}
    </section>
  );
};

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const answerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        'border-stroke cursor-pointer border-b pb-5',
        isOpen && 'shadow-md',
      )}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between gap-3">
        <Title size="3xl" color="light" uppercase>
          {question}
        </Title>
        <OpenIcon
          className={cn(
            'shrink-0 transition-transform duration-300',
            isOpen && 'rotate-45',
          )}
        />
      </div>
      <div
        ref={answerRef}
        className="overflow-hidden pt-2.5 text-[20px] text-[#8e8e89] transition-[height] duration-300 ease-in-out"
        style={{
          height: isOpen ? `${answerRef.current?.scrollHeight ?? 0}px` : '0px',
        }}
      >
        {answer}
      </div>
    </div>
  );
};
