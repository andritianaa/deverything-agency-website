import Image from "next/image";

export function BrandsSection() {
  const brands = [
    { name: "Adobe", light: "brand-icon-1.svg", dark: "brand-darkicon-1.svg" },
    { name: "Figma", light: "brand-icon-2.svg", dark: "brand-darkicon-2.svg" },
    {
      name: "Shopify",
      light: "brand-icon-3.svg",
      dark: "brand-darkicon-3.svg",
    },
    {
      name: "Dribble",
      light: "brand-icon-4.svg",
      dark: "brand-darkicon-4.svg",
    },
    {
      name: "Webflow",
      light: "brand-icon-5.svg",
      dark: "brand-darkicon-5.svg",
    },
  ];

  return (
    <section>
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="gap-4">
            <div className="flex justify-center text-center py-4 relative">
              <p className="relative px-2 text-black/60 dark:text-white/60 md:before:absolute md:before:right-[-150px] md:before:top-1/2 md:before:h-0.5 md:before:w-36 md:before:bg-gradient-to-r md:before:from-gray-800 dark:md:before:from-gray-300 dark:md:before:opacity-100 md:before:opacity-10 md:before:to-transparent md:after:absolute md:after:left-[-150px] md:after:top-1/2 md:after:h-0.5 md:after:w-36 md:after:bg-gradient-to-l md:after:from-gray-800 dark:md:after:from-gray-300 md:after:opacity-10 dark:md:after:opacity-100 md:after:to-transparent">
                Loved by 1000+ big and small brands around the worlds
              </p>
            </div>
            <div className="py-3 sm:py-7">
              <div className="relative overflow-hidden">
                <div
                  className="flex animate-slide"
                  style={{ width: "calc(200px * 15)" }}
                >
                  {[...Array(3)].map((_, setIndex) =>
                    brands.map((brand, index) => (
                      <div
                        key={`${setIndex}-${index}`}
                        className="w-[200px] flex items-center justify-center"
                      >
                        <Image
                          alt={brand.name}
                          width={130}
                          height={50}
                          className="dark:hidden h-10"
                          src={`https://awake-agency-next-js.vercel.app/images/home/brand/${brand.light}`}
                        />
                        <Image
                          alt={brand.name}
                          width={130}
                          height={50}
                          className="dark:block hidden h-10"
                          src={`https://awake-agency-next-js.vercel.app/images/home/brand/${brand.dark}`}
                        />
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
