"use client";

import { useState } from "react";
import FAQItem from "./FAQItem";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "How can I contact Inkyy Team?",
      answer:
        "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com. We typically respond within 24 hours.",
    },
    {
      question: "What services do you offer?",
      answer:
        "We offer web design, UI/UX design, responsive design, e-commerce solutions, Webflow development, and custom development services.",
    },
    {
      question: "Do you provide website maintenance services?",
      answer:
        "Yes, we provide comprehensive website maintenance services to keep your site running smoothly and up-to-date.",
    },
    {
      question: "How long does it take to design and develop a website?",
      answer:
        "The timeline depends on the complexity of the project, but typically ranges from 2-8 weeks for most websites.",
    },
    {
      question: "Do you require a deposit for projects?",
      answer:
        "Yes, we typically require a 50% deposit to begin work on your project, with the remainder due upon completion.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2
          className="text-[rgba(37,36,50,1.00)] text-[60px] font-bold leading-[120%] mb-16"
          style={{ fontFamily: "Raleway" }}
        >
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto">
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
    </section>
  );
};

export default FAQSection;
