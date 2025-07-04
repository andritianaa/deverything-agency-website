import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function WorkSection() {
  const projects = [
    {
      title: "FlowBank",
      image: "online_img_1.jpg",
      tags: ["UX Research", "Interface Design"],
      url: "https://www.framer.com/@wrap-pixel/",
    },
    {
      title: "Academy.co",
      image: "online_img_2.jpg",
      tags: ["Product Design", "Interaction Design"],
      url: "https://www.framer.com/@wrap-pixel/",
    },
    {
      title: "Genome",
      image: "online_img_3.jpg",
      tags: ["Brand identity design", "UX Research"],
      url: "https://www.framer.com/@wrap-pixel/",
    },
    {
      title: "Hotto",
      image: "online_img_4.jpg",
      tags: ["Visual Storytelling", "Web & Mobile Design"],
      url: "https://www.framer.com/@wrap-pixel/",
    },
  ];

  return (
    <section id="work">
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col justify-center items-center gap-10 md:gap-20">
            <div className="max-w-2xl text-center">
              <h2>
                How we transformed a small business's
                <span className="instrument-font italic font-normal dark:text-white/70">
                  {" "}
                  online presence
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
                      src={`https://awake-agency-next-js.vercel.app/images/home/onlinePresence/${project.image}`}
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
