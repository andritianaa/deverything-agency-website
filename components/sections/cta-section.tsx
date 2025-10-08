import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section>
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="py-16 md:py-28 px-6 border border-black/10 rounded-3xl bg-[linear-gradient(90deg,#CDEFFB_0%,#FFFFFF_33.23%,#FFFFFF_65.77%,#FDEECB_100%)] backdrop-blur-[200px] dark:opacity-80">
            <div className="flex flex-col gap-6 items-center md:max-w-3xl mx-auto">
              <div className="flex flex-col gap-3 items-center text-center">
                <h2 className="text-3xl md:text-5xl dark:text-black">
                  Innovative Solutions for
                  <span className="instrument-font italic font-normal dark:text-black/70">
                    {" "}
                    Bold Brands
                  </span>
                </h2>
                <p className="dark:text-black">
                  Looking to elevate your brand? We craft immersive experiences
                  that captivate, engage, and make your business unforgettable
                  in every interaction.
                </p>
              </div>
              <Link href="calendly">
                <Button magnetic>
                  Travaillons ensemble
                  <ArrowRight className="w-4 h-4 text-black " />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
