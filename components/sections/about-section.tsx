import Image from "next/image";

export function AboutSection() {
  return (
    <section id="aboutus">
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col lg:gap-16 gap-5">
            <div className="flex flex-col items-center justify-center text-center gap-3">
              <h2 className="max-w-6xl">
                Des solutions stratégiques, expérimentées et orientées
                résultats.
              </h2>
              <div>
                <h2>
                  <span className="inline-flex m-2 py-1 px-5 gap-3 rounded-full bg-[#ba81ee]/10 text-[#ba81ee] items-center">
                    <Image
                      alt="Creativity"
                      width={40}
                      height={40}
                      src="https://awake-agency-next-js.vercel.app/images/home/result/creativity.svg"
                    />
                    <span className="instrument-font italic font-normal">
                      Créativité
                    </span>
                  </span>
                  <span className="inline-flex m-2 py-1 px-5 gap-3 rounded-full bg-[#70b5ff]/20 text-[#70b5ff] items-center">
                    <Image
                      alt="Innovation"
                      width={40}
                      height={40}
                      src="https://awake-agency-next-js.vercel.app/images/home/result/innovation.svg"
                    />
                    <span className="instrument-font italic font-normal">
                      Innovation
                    </span>
                  </span>
                  <span className="inline-flex m-2 py-1 px-5 gap-3 rounded-full bg-[#ffaf68]/20 text-[#ffaf68] items-center">
                    <Image
                      alt="Strategy"
                      width={40}
                      height={40}
                      src="https://awake-agency-next-js.vercel.app/images/home/result/strategy.svg"
                    />
                    <span className="instrument-font italic font-normal">
                      Stratégie
                    </span>
                  </span>
                </h2>
              </div>
            </div>
            <div className="flex-col md:flex md:flex-row justify-center items-center text-center">
              <div className="relative 2xl:px-24 px-16 md:py-8 py-4">
                <h2 className="2xl:text-9xl md:text-7xl text-5xl">
                  <sup>+</sup>
                  <span>20</span>
                </h2>
                <p className="mt-2 text-black/60 dark:text-white/60">
                  Projets concrétisés
                </p>
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-28 w-px bg-black/10 dark:bg-white/10"></div>
              </div>
              <div className="relative 2xl:px-24 px-16 md:py-8 py-4">
                <h2 className="2xl:text-9xl md:text-7xl text-5xl">
                  <sup>+</sup>
                  <span>3</span>
                </h2>
                <p className="mt-2 text-black/60 dark:text-white/60">
                  années d'experience
                </p>
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-28 w-px bg-black/10 dark:bg-white/10"></div>
              </div>
              <div className="relative 2xl:px-24 px-16 md:py-8 py-4">
                <h2 className="2xl:text-9xl md:text-7xl text-5xl">
                  <sup></sup>
                  <span>3</span>
                </h2>
                <p className="mt-2 text-black/60 dark:text-white/60">
                  Projets en cours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
