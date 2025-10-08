import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { CustomerList } from "@/components/customer-list";
import { Tilt } from "@/components/motion-primitives/tilt";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";

export function CtaSection() {
  const springOptions = { bounce: 0.1 };

  return (
    <section>
      <div className="2xl:py-20 py-11">
        <div className="container">
          <Magnetic
            intensity={0.2}
            springOptions={springOptions}
            actionArea="global"
            range={200}
          >
            <Tilt rotationFactor={3}>
              <div className="overflow-hidden py-16 md:py-28 px-6 border-2 border-border rounded-3xl backdrop-blur-[200px] dark:opacity-80">
                <div className="absolute -bottom-10 -left-20 translate-x-1/2 w-[80%] h-40 bg-gradient-to-r from-[#2563eb] via-[#32c2ba] to-[#2260c6]  blur-3xl rounded-full pointer-events-none" />
                <div className="absolute -top-10 -right-20 -translate-x-1/2 w-[80%] h-40 bg-gradient-to-r via-[#2563eb] to-[#32c2ba] from-[#2260c6]  blur-3xl rounded-full pointer-events-none" />

                <div className="relative flex flex-col gap-6 items-center md:max-w-3xl mx-auto">
                  <div className="flex flex-col gap-3 items-center text-center">
                    <h2 className="text-3xl md:text-5xl ">
                      Prêt à devenir plus
                      <span className="instrument-font italic font-normal">
                        {" ambitieux "}
                      </span>
                      que jamais ?
                    </h2>
                    <p className="">
                      Si vous êtes un entrepreneur qui ne se contente pas du
                      statu quo et vise les plus hauts sommets, nous sommes
                      faits pour nous entendre.
                    </p>
                  </div>
                  <CustomerList />
                  <Link href="https://calendly.com/deverything-agency/appel-de-decouverte">
                    <Button magnetic>
                      Travaillons ensemble
                      <ArrowRight className="w-4 h-4 " />
                    </Button>
                  </Link>
                </div>
              </div>
            </Tilt>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
