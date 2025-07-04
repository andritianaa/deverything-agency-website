import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="xl:pt-20 pb-6">
      <div className="container">
        <div className="flex flex-col xl:flex-row py-16 gap-10 justify-between border-b border-black/10 dark:border-white/10">
          <div className="flex flex-col gap-6 max-w-md">
            <Link href="/">
              <Image
                alt="logo"
                width={117}
                height={34}
                className="dark:hidden"
                src="https://awake-agency-next-js.vercel.app/images/logo/logo.svg"
              />
              <Image
                alt="logo"
                width={160}
                height={50}
                className="dark:block hidden"
                src="https://awake-agency-next-js.vercel.app/images/logo/DarkModeLogo.svg"
              />
            </Link>
            <p className="opacity-60">
              Empowering businesses with innovative solutions. Let's create
              something amazing together.
            </p>
            <div className="flex gap-4">
              <Link
                target="_blank"
                className="hover:opacity-60"
                href="https://twitter.com"
              >
                <Image
                  alt="social-icon"
                  width={20}
                  height={20}
                  className="dark:hidden"
                  src="https://awake-agency-next-js.vercel.app/images/home/footerSocialIcon/twitter.svg"
                />
                <Image
                  alt="social-icon"
                  width={20}
                  height={20}
                  className="dark:block hidden"
                  src="https://awake-agency-next-js.vercel.app/images/home/footerSocialIcon/twitter_dark.svg"
                />
              </Link>
              <Link
                target="_blank"
                className="hover:opacity-60"
                href="https://linkedin.com/in"
              >
                <Image
                  alt="social-icon"
                  width={20}
                  height={20}
                  className="dark:hidden"
                  src="https://awake-agency-next-js.vercel.app/images/home/footerSocialIcon/linkedin.svg"
                />
                <Image
                  alt="social-icon"
                  width={20}
                  height={20}
                  className="dark:block hidden"
                  src="https://awake-agency-next-js.vercel.app/images/home/footerSocialIcon/linkedin_dark.svg"
                />
              </Link>
              <Link
                target="_blank"
                className="hover:opacity-60"
                href="https://dribbble.com"
              >
                <Image
                  alt="social-icon"
                  width={20}
                  height={20}
                  className="dark:hidden"
                  src="https://awake-agency-next-js.vercel.app/images/home/footerSocialIcon/dribble.svg"
                />
                <Image
                  alt="social-icon"
                  width={20}
                  height={20}
                  className="dark:block hidden"
                  src="https://awake-agency-next-js.vercel.app/images/home/footerSocialIcon/dribble_dark.svg"
                />
              </Link>
              <Link
                target="_blank"
                className="hover:opacity-60"
                href="https://instagram.com"
              >
                <Image
                  alt="social-icon"
                  width={20}
                  height={20}
                  className="dark:hidden"
                  src="https://awake-agency-next-js.vercel.app/images/home/footerSocialIcon/instagram.svg"
                />
                <Image
                  alt="social-icon"
                  width={20}
                  height={20}
                  className="dark:block hidden"
                  src="https://awake-agency-next-js.vercel.app/images/home/footerSocialIcon/instagram_dark.svg"
                />
              </Link>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex flex-col gap-4">
              <p className="font-medium">Sitemap</p>
              <ul className="flex flex-col gap-3">
                <li className="text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white">
                  <Link href="/contact">Contact us</Link>
                </li>
                <li className="text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white">
                  <Link href="/#aboutus">About us</Link>
                </li>
                <li className="text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white">
                  <Link href="/#work">Work</Link>
                </li>
                <li className="text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white">
                  <Link href="/#services">Services</Link>
                </li>
                <li className="text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white">
                  <Link href="/#pricing">Pricing</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-medium">Other Pages</p>
              <ul className="flex flex-col gap-3">
                <li className="text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white">
                  <Link href="/terms-and-conditions">Terms & Conditions</Link>
                </li>
                <li className="text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white">
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white">
                  <Link href="/admin">Admin</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-medium">Contact Details</p>
              <p className="text-black/60 dark:text-white/60">
                81 Rivington Street London EC2A 3AY
              </p>
              <p className="text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white">
                <Link href="mailto:hello@Deverything.agency">
                  hello@Deverything.agency
                </Link>
              </p>
              <p className="text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white">
                <Link href="tel:0105 192 3556">0105 192 3556</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <p className="text-black/60 dark:text-white/60">
            ©2025 Deverything. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
