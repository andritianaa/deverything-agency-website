import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function WorkSection() {
  const projects = [
    {
      title: "Pandorra.ai",
      image: "pandorra.png",
      tags: ["Intelligence artificielle", "Design", "Web"],
      url: "https://pandorra.ai",
    },
    {
      title: "Teratany",
      image: "teratany.png",
      tags: ["Mobile", "Web"],
      url: "https://network.teratany.org",
    },
  ];

  return (
    <section id="work">
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col justify-center items-center gap-10 md:gap-20">
            <div className="max-w-2xl text-center">
              <h2>
                Nos tout derniers
                <br />
                <span className="instrument-font italic font-normal dark:text-white">
                  {" "}
                  projets réalisés
                </span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group flex flex-col gap-6 cursor-pointer"
                >
                  <div className="relative">
                    <Image
                      alt={project.title}
                      width={625}
                      height={410}
                      className="rounded-2xl"
                      src={project.image}
                    />
                    <Link
                      target="_blank"
                      className="absolute top-0 left-0 bg-black/50 w-full h-full rounded-2xl hidden group-hover:flex"
                      href={project.url}
                    >
                      <span className="flex justify-end p-5 w-full">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <ExternalLink className="w-6 h-6 text-white" />
                        </div>
                      </span>
                    </Link>
                  </div>
                  <div className="flex flex-col items-start gap-4">
                    <h5 className="group-hover:text-[#0077ff]">
                      {project.title}
                    </h5>
                    <div className="flex gap-3">
                      {project.tags.map((tag, tagIndex) => (
                        <p
                          key={tagIndex}
                          className="text-sm border border-black/10 dark:border-white/50 w-fit py-1.5 px-4 rounded-full hover:bg-black hover:text-white"
                        >
                          {tag}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
