import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FaqSection } from "@/components/sections/faq-section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Love to hear from you, Get in touch with Deverything Agency. Let's collaborate on your next project.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl before:-z-10">
            <div className="container relative z-10">
              <div className="flex flex-col gap-10 md:gap-20">
                <div className="relative flex flex-col text-center items-center">
                  <h2 className="font-medium w-full max-w-32">
                    Love to hear from you, Get in
                    <span className="instrument-font italic font-normal dark:text-white/70">
                      {" "}
                      touch
                    </span>
                  </h2>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
