import { ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section>
      <div className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-blue-400/20 before:via-white before:to-yellow-400/20 before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-blue-600/20 dark:before:via-black dark:before:to-yellow-600/20">
        <div className="container relative z-10">
          <div className="flex flex-col gap-8">
            <div className="relative flex flex-col text-center items-center gap-4">
              <h1 className="font-medium w-full  text-8xl">
                Building bold brands with
                <span className="instrument-font italic font-normal dark:text-white/70">
                  {" "}
                  thoughtful design
                </span>
              </h1>
              <p className="max-w-38 text-black/60 dark:text-white/60">
                At Deverything, we help small startups tackle the world's
                biggest challenges with tailored solutions, guiding you from
                strategy to success in a competitive market.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex flex-col items-center justify-center gap-8 w-full sm:flex-row">
                <Link
                  className="group bg-[#0077ff] text-white font-medium flex flex-row justify-between items-center py-2 px-5 rounded-full max-w-64 w-full md:py-3 border border-[#0077ff] transition-all duration-200 ease-in-out hover:bg-transparent hover:text-[#0077ff]"
                  href="/contact"
                >
                  <span className="flex text-start transform transition-transform duration-200 ease-in-out group-hover:translate-x-20">
                    Contactez-nous
                  </span>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform transition-transform duration-200 ease-in-out group-hover:-translate-x-44 group-hover:rotate-45">
                    <ArrowUpRight className="w-5 h-5 text-black group-hover:text-[#0077ff]" />
                  </div>
                </Link>
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
                        <Star
                          key={i}
                          className="w-6 h-6 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-sm font-normal text-black/60 dark:text-white/60">
                      Trusted by 1000+ clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
