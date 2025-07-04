import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function PricingSection() {
  return (
    <section id="pricing">
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col gap-10 md:gap-20">
            <div className="max-w-25 text-center mx-auto">
              <h2>
                Pick the plan that fits your
                <span className="instrument-font italic font-normal dark:text-white/70">
                  {" "}
                  start-up
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-1 xxl:grid-cols-2 gap-6">
              <div className="bg-pale-yellow p-6 md:p-10 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-12 md:pr-6">
                    <div className="flex flex-col gap-3">
                      <p className="py-2 px-4 bg-black w-fit text-white rounded-full">
                        Starter
                      </p>
                      <p className="text-black/60">
                        For companies who need design support. One request at a
                        time
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-5">
                      <h2 className="text-black dark:text-black">
                        $2500
                        <span className="text-base text-black/60 ml-1">
                          /month
                        </span>
                      </h2>
                      <Link
                        className="group text-black font-medium bg-white rounded-full flex items-center gap-4 py-2 pl-5 pr-2 w-fit"
                        href="/contact"
                      >
                        <span className="group-hover:translate-x-9 transform transition-transform duration-200 ease-in-out">
                          Let's Collaborate
                        </span>
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:-translate-x-36 transition-all duration-200 ease-in-out">
                          <ArrowUpRight className="w-4 h-4 text-white" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 md:pl-6 md:border-l border-black/10">
                    <p className="text-black">Features</p>
                    <ul className="flex flex-col gap-4">
                      <li className="flex items-center gap-3">
                        <Image
                          alt="check"
                          width={20}
                          height={20}
                          src="https://awake-agency-next-js.vercel.app/images/home/startupPlan/white_tick.svg"
                        />
                        <p className="text-black">
                          Design Updates Every 2 Days
                        </p>
                      </li>
                      <li className="flex items-center gap-3">
                        <Image
                          alt="check"
                          width={20}
                          height={20}
                          src="https://awake-agency-next-js.vercel.app/images/home/startupPlan/white_tick.svg"
                        />
                        <p className="text-black">Mid-level Designer</p>
                      </li>
                      <li className="flex items-center gap-3">
                        <Image
                          alt="check"
                          width={20}
                          height={20}
                          src="https://awake-agency-next-js.vercel.app/images/home/startupPlan/white_tick.svg"
                        />
                        <p className="text-black">SEO optimization</p>
                      </li>
                      <li className="flex items-center gap-3">
                        <Image
                          alt="check"
                          width={20}
                          height={20}
                          src="https://awake-agency-next-js.vercel.app/images/home/startupPlan/white_tick.svg"
                        />
                        <p className="text-black">Monthly analytics</p>
                      </li>
                      <li className="flex items-center gap-3">
                        <Image
                          alt="check"
                          width={20}
                          height={20}
                          src="https://awake-agency-next-js.vercel.app/images/home/startupPlan/white_tick.svg"
                        />
                        <p className="text-black">2x Calls Per Month</p>
                      </li>
                      <li className="flex items-center gap-3">
                        <Image
                          alt="check"
                          width={20}
                          height={20}
                          src="https://awake-agency-next-js.vercel.app/images/home/startupPlan/white_tick.svg"
                        />
                        <p className="text-black">License free assets</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-[#0077ff] p-6 md:p-10 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-12 md:pr-6">
                    <div className="flex flex-col gap-3">
                      <p className="py-2 px-4 bg-black w-fit text-white rounded-full">
                        Pro
                      </p>
                      <p className="text-white/60">
                        2x the speed. Great for an MVP, Web App or complex
                        problem
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-5">
                      <h2 className="text-white dark:text-white">
                        $3800
                        <span className="text-base text-white/60 ml-1">
                          /month
                        </span>
                      </h2>
                      <Link
                        className="group text-black font-medium bg-white rounded-full flex items-center gap-4 py-2 pl-5 pr-2 w-fit"
                        href="/contact"
                      >
                        <span className="group-hover:translate-x-9 transform transition-transform duration-200 ease-in-out">
                          Let's Collaborate
                        </span>
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:-translate-x-36 transition-all duration-200 ease-in-out">
                          <ArrowUpRight className="w-4 h-4 text-white" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 md:pl-6 md:border-l border-white/10">
                    <p className="text-white">Features</p>
                    <ul className="flex flex-col gap-4">
                      <li className="flex items-center gap-3">
                        <Image
                          alt="check"
                          width={20}
                          height={20}
                          src="https://awake-agency-next-js.vercel.app/images/home/startupPlan/black_tick.svg"
                        />
                        <p className="text-white">Design Updates Daily</p>
                      </li>
                      <li className="flex items-center gap-3">
                        <Image
                          alt="check"
                          width={20}
                          height={20}
                          src="https://awake-agency-next-js.vercel.app/images/home/startupPlan/black_tick.svg"
                        />
                        <p className="text-white">Senior-level Designer</p>
                      </li>
                      <li className="flex items-center gap-3">
                        <Image
                          alt="check"
                          width={20}
                          height={20}
                          src="https://awake-agency-next-js.vercel.app/images/home/startupPlan/black_tick.svg"
                        />
                        <p className="text-white">AI Advisory Framework</p>
                      </li>
                      <li className="flex items-center gap-3">
                        <Image
                          alt="check"
                          width={20}
                          height={20}
                          src="https://awake-agency-next-js.vercel.app/images/home/startupPlan/black_tick.svg"
                        />
                        <p className="text-white">Full-service Creative Team</p>
                      </li>
                      <li className="flex items-center gap-3">
                        <Image
                          alt="check"
                          width={20}
                          height={20}
                          src="https://awake-agency-next-js.vercel.app/images/home/startupPlan/black_tick.svg"
                        />
                        <p className="text-white">4x Calls Per Month</p>
                      </li>
                      <li className="flex items-center gap-3">
                        <Image
                          alt="check"
                          width={20}
                          height={20}
                          src="https://awake-agency-next-js.vercel.app/images/home/startupPlan/black_tick.svg"
                        />
                        <p className="text-white">License free assets</p>
                      </li>
                    </ul>
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
