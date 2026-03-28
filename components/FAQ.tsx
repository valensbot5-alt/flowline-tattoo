"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

export function FAQ({ items }: { items: readonly FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-white/5">
      {items.map((item, index) => (
        <div key={index}>
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between py-5 text-left min-h-[48px]"
            aria-expanded={openIndex === index}
          >
            <span className="pr-4 text-base font-medium text-foreground">{item.question}</span>
            <svg
              className={`h-5 w-5 shrink-0 text-secondary transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              openIndex === index ? "max-h-96 pb-5" : "max-h-0"
            }`}
          >
            <p className="text-sm leading-relaxed text-foreground/70">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
