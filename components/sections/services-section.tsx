import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { WobbleCard } from "@/components/ui/wobble-card";

export function ServicesSection() {
  return (
    <section id="services">
      <div className="py-11 md:py-16 2xl:py-20">
        <div className="container">
          <div className="flex flex-col justify-center gap-8 md:gap-12 lg:gap-16 xl:gap-20">
            <div className="mx-auto flex items-center text-center px-4">
              <h2>
                Une proposition
                <br />
                <span className="instrument-font italic font-normal dark:text-white">
                  {" "}
                  tout-en-un et unique
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 max-w-7xl mx-auto w-full">
              <WobbleCard
                containerClassName="relative col-span-1 md:col-span-2 lg:col-span-2 h-full bg-[url('/gradient1.jpg')] bg-center bg-cover bg-no-repeat h-[400px]"
                className=""
              >
                <div className="absolute inset-0 bg-black/20 -z-10 rounded-2xl w-screen h-screen"></div>
                <div className="max-w-lg">
                  <h2 className="max-w-80 text-left text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
                    Design UX/UI et création de logo
                  </h2>
                  <h4 className="mt-3 sm:mt-4 text-left text-neutral-200">
                    Notre équipe s'occupe de créer un design qui comblera vos
                    utilisateurs, réduisant le churn et augmentant votre nombre
                    d'utilisateurs payants.
                  </h4>
                </div>
              </WobbleCard>
              <WobbleCard containerClassName="col-span-1 h-[400px] bg-[url('/gradient2.jpg')] bg-center bg-cover bg-no-repeat">
                <div className="absolute inset-0 bg-black/20 -z-10 rounded-2xl w-screen h-screen"></div>
                <div className="max-w-lg">
                  <h2 className="max-w-80 text-left text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
                    Développement{" "}
                    <span className="instrument-font italic">
                      iOS et Android
                    </span>
                  </h2>
                  <h4 className="mt-3 sm:mt-4 text-left text-neutral-200">
                    Notre équipe s'occupe de créer des applications mobiles
                    performantes et intuitives.
                  </h4>
                </div>
              </WobbleCard>
              <WobbleCard containerClassName="col-span-1 h-[400px] bg-[url('/gradient3.jpg')] bg-center bg-cover bg-no-repeat">
                <div className="absolute inset-0 bg-black/20 -z-10 rounded-2xl w-screen h-screen"></div>
                <h2 className="max-w-80 text-left text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
                  Refonte de votre site web
                </h2>
                <h4 className="mt-3 sm:mt-4 text-left text-neutral-200">
                  Nous modernisons votre site pour en faire un outil rapide,
                  esthétique et orienté conversion.
                </h4>
              </WobbleCard>
              <WobbleCard
                containerClassName="col-span-1 md:col-span-2 lg:col-span-2 h-full h-[400px] bg-[url('/gradient4.jpg')] bg-center bg-cover bg-no-repeat"
                className=""
              >
                <div className="max-w-lg">
                  <h2 className="text-left text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
                    Développement de site web ou de votre SaaS
                  </h2>
                  <h4 className="mt-3 sm:mt-4 text-left text-neutral-200">
                    Nous avons une équipe des plus rapide quand il s'agit de
                    développer des applications web ou de SaaS de très haute
                    qualité.
                  </h4>
                </div>
              </WobbleCard>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 flex flex-col gap-4 sm:gap-5 xl:flex-row bg-black items-center justify-between dark:bg-white/5 py-6 sm:py-8 px-5 sm:px-7 md:px-10 lg:px-12 rounded-2xl sm:rounded-3xl w-full">
            <h4 className="text-white text-center xl:text-left text-base sm:text-lg md:text-xl lg:text-2xl">
              <span className="instrument-font italic">
                Découvrez nos réalisations.
              </span>
              <br />
              Commencez votre parcours avec nous !
            </h4>
            <div className="flex flex-col sm:flex-row gap-3 items-center w-full sm:w-auto">
              <Link
                href="https://calendly.com/deverything-agency/appel-de-decouverte"
                className="w-full sm:w-auto"
              >
                <Button className="w-full sm:w-auto" magnetic>
                  Travaillons ensemble
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/#work" className="w-full sm:w-auto">
                <Button variant={"ghost"} className="w-full sm:w-auto">
                  Nos projets
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
