import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  const faqs = [
    {
      question: "Est-ce qu'il y'a un engagement lors de l'appel ?",
      answer:
        "Bonne question. Cependant, il n’y a absolument aucun engagement. Nous n’avons pas besoin de cela pour trouver des clients. Vous bénéficiez d’un premier appel totalement gratuit au cours duquel je m’efforcerai de vous donner un maximum de conseils et de valeur. À la fin de l’appel, ce sera à vous de nous demander un devis pour éventuellement collaborer ensemble. Nous pouvons cependant refuser et décider que vous ne correspondez pas à nos critères de sélection.",
    },
    {
      question:
        "Comment une équipe de 4 personnes peut livrer un SaaS en 2 mois ?",
      answer:
        "Nous sommes 4 dans l'entreprise mais nous travaillons avec des freelances de confiance qui nous aident sur les projets quand c'est nécessaire. Nous avons aussi des process bien rodés et des outils qui nous permettent d'être très efficaces.",
    },
  ];

  return (
    <section>
      <div className="2xl:py-20 py-11">
        <div className="justify-center flex items-center">
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-3xl"
            defaultValue="item-1"
          >
            {faqs.map((faq, i) => (
              <AccordionItem value={`item-${i}`} key={faq.question}>
                <AccordionTrigger>
                  <p className="text-xl">{faq.question}</p>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p className="text-base text-white/80">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
