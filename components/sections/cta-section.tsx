import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

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
              <Link
                className="group w-fit text-white font-medium bg-black rounded-full flex items-center gap-4 py-2 pl-5 pr-2 hover:bg-transparent border border-black"
                href="/contact"
              >
                <span className="group-hover:translate-x-9 group-hover:text-black transform transition-transform duration-200 ease-in-out">
                  Let's Collaborate
                </span>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:-translate-x-36 transition-all duration-200 ease-in-out group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4 text-black " />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
