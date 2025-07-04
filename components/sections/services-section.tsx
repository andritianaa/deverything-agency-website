import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ServicesSection() {
  const services = [
    {
      title: "Brand\nStrategy",
      icon: "brand.svg",
      bgColor: "bg-[#ba81ee]/10",
      textColor: "text-[#ba81ee]",
    },
    {
      title: "Digital\nMarketing",
      icon: "digitalmarketing.svg",
      bgColor: "bg-[#70b5ff]/10",
      textColor: "text-[#70b5ff]",
    },
    {
      title: "UI/UX\nDesign",
      icon: "uiux.svg",
      bgColor: "bg-[#ffaf68]/10",
      textColor: "text-[#ffaf68]",
    },
    {
      title: "Analytics &\nReporting",
      icon: "analitics.svg",
      bgColor: "bg-[#79d45e]/10",
      textColor: "text-[#79d45e]",
    },
    {
      title: "Web\nDevelopment",
      icon: "webdevp.svg",
      bgColor: "bg-[#f4889a]/10",
      textColor: "text-[#f4889a]",
    },
  ];

  return (
    <section id="services">
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col justify-center items-center gap-10 lg:gap-16">
              <div className="max-w-32 text-center">
                <h2>
                  Where innovation meets
                  <span className="instrument-font italic font-normal dark:text-white/70">
                    {" "}
                    aesthetics
                  </span>
                </h2>
              </div>
              <div className="grid auto-rows-max grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 gap-6 w-full">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`${service.bgColor} flex flex-col p-8 rounded-2xl gap-6 lg:gap-9`}
                  >
                    <div>
                      <Image
                        alt="service icon"
                        width={40}
                        height={40}
                        src={`https://Awake-agency-next-js.vercel.app/images/home/innovation/${service.icon}`}
                      />
                    </div>
                    <div>
                      <h5 className={service.textColor}>
                        {service.title.split("\n").map((line, i) => (
                          <span key={i}>
                            {line}
                            {i !== service.title.split("\n").length - 1 && (
                              <br />
                            )}
                          </span>
                        ))}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 xl:flex xl:flex-row bg-black items-center justify-between dark:bg-white/5 py-8 px-7 sm:px-12 rounded-3xl w-full">
              <h4 className="text-white text-center xl:text-left">
                See Our Work in Action.
                <br />
                Start Your Creative Journey with Us!
              </h4>
              <div className="flex flex-col sm:flex-row gap-3 items-center">
                <Link
                  className="group gap-2 text-black font-medium bg-white rounded-full flex items-center lg:gap-4 py-2 pl-5 pr-2 border border-white dark:border-opacity-50 hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out"
                  href="/contact"
                >
                  <span className="group-hover:translate-x-9 transform transition-transform duration-200 ease-in-out">
                    Let's Collaborate
                  </span>
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:-translate-x-36 transition-all duration-200 ease-in-out">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </Link>
                <Link
                  className="group border border-white dark:border-white/50 text-white font-medium bg-black gap-2 rounded-full flex items-center justify-between lg:gap-4 py-2 pl-5 pr-2 hover:opacity-95 hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out"
                  href="/#work"
                >
                  <span className="group-hover:translate-x-9 transform transition-transform duration-200 ease-in-out">
                    View Portfolio
                  </span>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:-translate-x-[125px] transition-all duration-200 ease-in-out">
                    <ArrowUpRight className="w-4 h-4 text-black" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
