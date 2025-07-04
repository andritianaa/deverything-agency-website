import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  const faqs = [
    {
      question: "What services does Deverything Agency offer?",
      answer:
        "We offer a comprehensive range of services including brand strategy, digital marketing, UI/UX design, web development, analytics & reporting, and creative consulting to help businesses grow and succeed.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on scope and complexity. Simple projects may take 2-4 weeks, while comprehensive brand overhauls or complex web applications can take 8-16 weeks. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "How is pricing structured at Deverything Agency?",
      answer:
        "We offer flexible pricing models including project-based pricing, monthly retainers, and subscription plans. Our Starter plan begins at $2,500/month, and our Pro plan is $3,800/month. We'll recommend the best option based on your specific needs.",
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer:
        "Yes! We provide ongoing support and maintenance services. This includes regular updates, technical support, performance monitoring, and strategic guidance to ensure your project continues to deliver results.",
    },
    {
      question: "How often will I receive updates on my project?",
      answer:
        "Communication frequency depends on your chosen plan. Starter plan clients receive updates every 2 days, while Pro plan clients get daily updates. We also schedule regular check-in calls and provide access to our project management platform.",
    },
    {
      question: "What makes Deverything Agency different from other agencies?",
      answer:
        "Our unique combination of creativity, innovation, and strategic thinking sets us apart. We focus on building long-term partnerships, delivering measurable results, and providing personalized attention to each client's specific needs and goals.",
    },
  ];

  return (
    <section>
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col gap-10 md:gap-20">
            <div className="max-w-md text-center mx-auto">
              <h2>
                Got questions? We've got
                <span className="instrument-font italic font-normal dark:text-white/70">
                  {" "}
                  answers
                </span>
              </h2>
            </div>
            <div className="flex flex-col">
              <Accordion
                type="single"
                collapsible
                className="flex flex-col gap-4"
              >
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="rounded-2xl data-[state=open]:bg-[#1B1D1E0D] dark:data-[state=open]:bg-white/5 p-6 border border-black/10 dark:border-white/50 group"
                  >
                    black
                    <AccordionTrigger className="flex flex-1 items-center justify-between transition-all text-left [&[data-state=open]>svg]:rotate-45 group-hover:cursor-pointer">
                      <h4 className="text-black dark:text-white/80">
                        {faq.question}
                      </h4>
                    </AccordionTrigger>
                    black
                    <AccordionContent className="pt-4">
                      <p className="text-black/60 dark:text-white/60">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
