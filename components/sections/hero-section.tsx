import { motion } from "framer-motion";
import { ArrowRight, ArrowUp, ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section>
      <div className="h-[90vh] flex items-center justify-center relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-blue-400/40 before:via-white before:to-pink-400/40 before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-blue-600/40 dark:before:via-black dark:before:to-pink-600/40">
        {/* Glow Effect */}

        <div className="container relative z-10">
          <div className="flex flex-col gap-8">
            <div className="relative flex flex-col text-center items-center gap-4">
              <h1 className="font-medium w-full  text-6xl">
                Nous transformons vos idées en solutions digitales performantes.
                <span className="instrument-font italic font-normal dark:text-white/70">
                  {" "}
                  Votre site web, app mobile ou SaaS en 2 mois.
                </span>
              </h1>
              <p className="max-w-38 text-black/60 dark:text-white/60 text-lg">
                Design, logo, développement de vos sites web, application mobile
                et SaaS. Lancez vous en 2 mois.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-8">
              <div className="flex items-center gap-7">
                <ul className="avatar flex flex-row items-center">
                  <li className="-mr-2 z-1">
                    <Image
                      alt="Avatar"
                      width={44}
                      height={44}
                      className="rounded-full border-2 border-white"
                      src="https://Awake-agency-next-js.vercel.app/images/home/avatar_1.jpg"
                    />
                  </li>
                  <li className="-mr-2 z-1">
                    <Image
                      alt="Avatar"
                      width={44}
                      height={44}
                      className="rounded-full border-2 border-white"
                      src="https://Awake-agency-next-js.vercel.app/images/home/avatar_2.jpg"
                    />
                  </li>
                  <li className="-mr-2 z-1">
                    <Image
                      alt="Avatar"
                      width={44}
                      height={44}
                      className="rounded-full border-2 border-white"
                      src="https://Awake-agency-next-js.vercel.app/images/home/avatar_3.jpg"
                    />
                  </li>
                  <li className="-mr-2 z-1">
                    <Image
                      alt="Avatar"
                      width={44}
                      height={44}
                      className="rounded-full border-2 border-white"
                      src="https://Awake-agency-next-js.vercel.app/images/home/avatar_4.jpg"
                    />
                  </li>
                </ul>
                <div className="gap-1 flex flex-col">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-white text-white" />
                    ))}
                  </div>
                  <p className="text-sm font-normal text-black/60 dark:text-white/60">
                    Plus de 20 projets réalisés
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 w-full sm:flex-row">
                <Link href="/calendly">
                  <Button magnetic>
                    Réserver un appel <ArrowRight />
                  </Button>
                </Link>
                <Link href="/#projects">
                  <Button variant={"ghost"}>Voir nos projets</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
