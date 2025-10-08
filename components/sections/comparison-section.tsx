"use client";

import { Check, Flame, Sparkle, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Tilt } from "@/components/motion-primitives/tilt";
import { Magnetic } from "@/components/ui/magnetic";

const otherSolutionItems = [
  `Le stress, la perte de temps et les retards sont inévitables.`,
  `Un design sans originalité et rempli d’incohérences qui augmente votre churn.`,
  `Des questions persistantes sur l’avancement et le sérieux. Du stress et des cheveux blancs.`,
  `On est des "experts", t'inquiète pas ça va bien se passer.`,
  `Des outils faciles pour les développeurs, mais des coûts supérieurs pour vous.`,
  `SAV lent et inefficace, stress et clients mécontents.`,
  `"On a bientôt fini tkt pas chef"`,
];

const incomparableItems = [
  `On prend en charge les aspects techniques, budgétaires et humains, vous offrant une tranquillité d’esprit.`,
  `Un design unique et cohérent, qui capte l’attention et booste vos ventes.`,
  `Suivi en temps réel avec accès au Figma, au tableau KanBan de l’équipe et à un serveur de préproduction.`,
  `Nous avons plus de 10 SaaS à notre actif.`,
  `Des outils rentables, robustes et scalables testés et affinés sur plus de 10 SaaS réalisés avec succès.`,
  `SAV 7j/7, intervention rapide, vous permettant de rester serein.`,
  `Un rapport qualité/prix imbatable avec une main qualifiée`,
  `Un SaaS livré clé en main en maximum de 2 mois ou on vous rembourse.`,
];

export function ComparisonCards() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const springOptions = { bounce: 0.1 };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="py-20">
      <div className="flex items-center justify-center mb-10 md:mb-20">
        <div className="max-w-32 text-center">
          <h2>
            Ensemble, visons
            <br />
            <span className="instrument-font italic font-normal dark:text-white">
              l'excellence.
            </span>
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Other Solution Card */}
        <div
          className={`transition-all flex flex-col items-center  duration-700 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-12"
          }`}
        >
          <h2 className="text-[32px] font-medium text-[rgb(77,77,77)] dark:text-muted-foreground mb-6 leading-tight">
            Autre solution
          </h2>
          <Magnetic
            intensity={0.2}
            springOptions={springOptions}
            actionArea="global"
            range={200}
          >
            <ul className="border-2 border-border rounded-2xl p-8 space-y-4 bg-background/50 backdrop-blur-sm">
              {otherSolutionItems.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-0.5">
                    <X
                      className="w-5 h-5 text-[rgb(153,153,153)]"
                      strokeWidth={2}
                    />
                  </div>
                  <span className="text-[rgb(153,153,153)]">{item}</span>
                </li>
              ))}
            </ul>
          </Magnetic>
        </div>

        {/* Incomparable Card */}
        <div
          className={`transition-all duration-700 flex flex-col items-center  ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          <h2 className="text-[32px] font-medium mb-6 leading-tight text-blue-600 flex items-center gap-2">
            Deverything <Flame fill="#2563eb" size={32} />
          </h2>
          <Magnetic
            intensity={0.2}
            springOptions={springOptions}
            actionArea="global"
            range={200}
          >
            <Tilt rotationFactor={3}>
              <ul className="border-2 border-border rounded-2xl p-8 space-y-4 bg-background/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute -top-10 right-40 translate-x-1/2 w-[80%] h-40 bg-gradient-to-r from-[#2563eb] via-[#32c2ba] to-[#2260c6]  blur-3xl rounded-full pointer-events-none" />
                {incomparableItems.map((item, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-3 transition-all duration-500 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 100 + 200}ms` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-0.5">
                      <Check
                        className="w-5 h-5 text-blue-600 "
                        strokeWidth={2}
                      />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Tilt>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}
