import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section>
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col justify-center gap-10 md:gap-20">
            <div className="mx-auto max-w-2xl flex items-center text-center">
              <h2>
                What our satisfied customers are saying
                <span className="instrument-font italic font-normal dark:text-white/70">
                  {" "}
                  about us
                </span>
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col xl:flex xl:flex-row gap-6">
                <div className="p-8 gap-64 rounded-2xl flex flex-col relative bg-[url('https://awake-agency-next-js.vercel.app/images/home/customerStories/customer_bg_img.jpg')] object-cover bg-center h-full w-full bg-cover bg-no-repeat">
                  <span className="text-white/60 uppercase text-sm font-medium">
                    Customer stories
                  </span>
                  <div className="flex flex-col gap-6">
                    <h4 className="text-white">
                      "Deverything's expertise transformed my vision into
                      success!"
                    </h4>
                    <div className="flex flex-col gap-1">
                      <p className="text-white font-medium">Kabir Shah</p>
                      <p className="text-white/60 text-sm font-medium">
                        Founder of Chipsland
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-36 xl:max-w-25 bg-pale-yellow rounded-2xl p-8">
                  <div>
                    <span className="uppercase text-sm font-medium text-black/60">
                      Facts & numbers
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 text-black">
                    <h2 className="text-7xl font-medium ">91%</h2>
                    <h4>Clients recommend our design services."</h4>
                  </div>
                </div>
              </div>
              <div className="flex flex-col xl:flex xl:flex-row gap-6">
                <div className="flex flex-col justify-between bg-black xl:max-w-25 dark:bg-white/10 rounded-2xl p-8">
                  <div className="flex flex-col gap-6">
                    <span className="text-white/60 uppercase text-sm font-medium">
                      Customer stories
                    </span>
                    <h4 className="text-white">
                      Their creativity and attention to detail transformed our
                      brand completely!
                    </h4>
                    <div>
                      <Image
                        alt="creativity"
                        width={344}
                        height={220}
                        className="w-full h-52"
                        src="https://awake-agency-next-js.vercel.app/images/home/customerStories/creativity_img.jpg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-24 justify-between bg-black/5 dark:bg-white/5 p-8 rounded-2xl">
                  <div className="flex flex-col gap-6">
                    <span className="text-black/60 dark:text-white/60 uppercase text-sm font-medium">
                      Customer stories
                    </span>
                    <h2 className="text-2xl lg:text-5xl">
                      "Deverything Design Agency brought our ideas to life with
                      exceptional creativity and precision, exceeding
                      expectations."
                    </h2>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-medium">Kabir Shah</p>
                    <p className="text-black/60 dark:text-white/60 text-sm font-medium">
                      Founder of Chipsland
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
