"use client";

import { useState } from "react";
import FAQItem from "./FAQItem";
import Image from "next/image";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "How can I contact Inkyy Team?",
      answer:
        "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours.",
    },
    {
      question: "What services do you offer?",
      answer:
        "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours.",
    },
    {
      question: "Do you provide website maintenance services?",
      answer:
        "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours.",
    },
    {
      question: "How long does it take to design and develop a website?",
      answer:
        "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours.",
    },
    {
      question: "Do you require a deposit for projects?",
      answer:
        "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours.",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 relative overflow-visible">
      <div className="absolute -left-[20%] w-full z-20  mix-blend-color-burn">
        <Image
          src="/faq/background.png"
          alt="FAQ"
          width={200}
          height={200}
          className="md:w-[70%] lg:w-1/2 w-full"
        />
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-20 relative z-30">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:top-20">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] text-gray-900"
              style={{ fontFamily: "Raleway" }}
            >
              <div className="mb-2">Frequently</div>
              <div className="mb-2">Asked</div>
              <div>Questions</div>
            </h2>
          </div>

          <div className="lg:w-1/2">
            <div className="space-y-4 md:space-y-6">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFAQ === index}
                  onToggle={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
