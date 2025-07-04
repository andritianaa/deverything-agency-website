import Image from "next/image";
import Link from "next/link";

export function AwardsSection() {
  const awards = [
    {
      title: "Framer Awards",
      description:
        "Celebrated for cutting-edge interaction design and seamless user experiences.",
      year: "2024",
      icon: "framer_award.svg",
      darkIcon: "dark_framer_award.svg",
      url: "https://www.framer.com/@wrap-pixel/",
    },
    {
      title: "Dribbble Awards",
      description:
        "Recognized for creative excellence and innovative design solutions",
      year: "2023",
      icon: "dribble_award.svg",
      darkIcon: "dribble_award.svg",
      url: "https://www.framer.com/@wrap-pixel/",
    },
    {
      title: "awwwards Awards",
      description:
        "Honored with the Best Website Design for creativity, usability, and innovation.",
      year: "2022",
      icon: "awward_award.svg",
      darkIcon: "dark_awward_award.svg",
      url: "https://www.framer.com/@wrap-pixel/",
    },
  ];

  return (
    <section id="awards">
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col gap-10 md:gap-20">
            <div className="max-w-3xl text-center mx-auto">
              <h2>
                Accolades and achievements celebration our
                <span className="instrument-font italic font-normal dark:text-white/70">
                  {" "}
                  design excellence
                </span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <Link key={index} target="_blank" href={award.url}>
                  <div className="group flex flex-col gap-11 xl:gap-16 border border-black/10 p-6 2xl:p-10 rounded-2xl dark:bg-white/5">
                    <div>
                      <Image
                        alt="award icon"
                        width={32}
                        height={32}
                        className="dark:hidden"
                        src={`https://Awake-agency-next-js.vercel.app/images/home/achievement/${award.icon}`}
                      />
                      <Image
                        alt="award icon"
                        width={32}
                        height={32}
                        className="dark:block hidden"
                        src={`https://Awake-agency-next-js.vercel.app/images/home/achievement/${award.darkIcon}`}
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <p>{award.title}</p>
                      <h4 className="group-hover:text-[#0077ff]">
                        {award.description}
                      </h4>
                    </div>
                    <p>{award.year}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
