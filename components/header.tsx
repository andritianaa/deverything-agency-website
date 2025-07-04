"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="container p-3 ">
        <nav className="flex items-center py-3 px-4 justify-between bg-background shadow rounded-full">
          <div className="flex items-center">
            <Link href="/">
              <Image
                alt="logo"
                width={34}
                height={34}
                src="https://odoo.teratany.org/web/image/website/1/logo/Deverything?unique=4d1f992"
              />
            </Link>
          </div>

          <div className="hidden lg:flex bg-black/5 dark:bg-white/5 rounded-3xl py-3 px-1">
            <ul className="flex gap-0 2xl:gap-1.5">
              <li>
                <Link
                  className="px-4 py-2 font-medium hover:text-black dark:hover:text-black hover:bg-white hover:rounded-3xl hover:shadow-header_shadow text-black/60 dark:text-white"
                  href="/#aboutus"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className="px-4 py-2 font-medium hover:text-black dark:hover:text-black hover:bg-white hover:rounded-3xl hover:shadow-header_shadow text-black/60 dark:text-white"
                  href="/#services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="px-4 py-2 font-medium hover:text-black dark:hover:text-black hover:bg-white hover:rounded-3xl hover:shadow-header_shadow text-black/60 dark:text-white"
                  href="/#work"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  className="px-4 py-2 font-medium hover:text-black dark:hover:text-black hover:bg-white hover:rounded-3xl hover:shadow-header_shadow text-black/60 dark:text-white"
                  href="/#team"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  className="px-4 py-2 font-medium hover:text-black dark:hover:text-black hover:bg-white hover:rounded-3xl hover:shadow-header_shadow text-black/60 dark:text-white"
                  href="/#pricing"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="px-4 py-2 font-medium hover:text-black dark:hover:text-black hover:bg-white hover:rounded-3xl hover:shadow-header_shadow text-black/60 dark:text-white"
                  href="/#awards"
                >
                  Awards
                </Link>
              </li>
              <li>
                <Link
                  className="px-4 py-2 font-medium hover:text-black dark:hover:text-black hover:bg-white hover:rounded-3xl hover:shadow-header_shadow text-black/60 dark:text-white"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-1 xl:gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="group flex h-8 w-8 items-center justify-center duration-300"
            >
              <span className="transition-transform duration-700">
                <Sun className="h-6 w-6 rotate-0 block transition-all dark:-rotate-90 dark:hidden" />
                <Moon className="h-6 w-6 rotate-90 hidden transition-all dark:rotate-0 dark:block" />
              </span>
            </Button>

            <div className="hidden max-lg:flex">
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-black shadow-lg transform transition-transform duration-300 max-w-xs z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-bold">Menu</h2>
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="p-4">
          <ul className="flex flex-col">
            <Link
              className="text-black hover:text-opacity-50 dark:text-white dark:hover:text-opacity-50 rounded-md text-base font-medium"
              href="/#aboutus"
              onClick={toggleMenu}
            >
              <li className="rounded-md w-full p-2 px-4">About us</li>
            </Link>
            <Link
              className="text-black hover:text-opacity-50 dark:text-white dark:hover:text-opacity-50 rounded-md text-base font-medium"
              href="/#services"
              onClick={toggleMenu}
            >
              <li className="rounded-md w-full p-2 px-4">Services</li>
            </Link>
            <Link
              className="text-black hover:text-opacity-50 dark:text-white dark:hover:text-opacity-50 rounded-md text-base font-medium"
              href="/#work"
              onClick={toggleMenu}
            >
              <li className="rounded-md w-full p-2 px-4">Work</li>
            </Link>
            <Link
              className="text-black hover:text-opacity-50 dark:text-white dark:hover:text-opacity-50 rounded-md text-base font-medium"
              href="/#team"
              onClick={toggleMenu}
            >
              <li className="rounded-md w-full p-2 px-4">Team</li>
            </Link>
            <Link
              className="text-black hover:text-opacity-50 dark:text-white dark:hover:text-opacity-50 rounded-md text-base font-medium"
              href="/#pricing"
              onClick={toggleMenu}
            >
              <li className="rounded-md w-full p-2 px-4">Pricing</li>
            </Link>
            <Link
              className="text-black hover:text-opacity-50 dark:text-white dark:hover:text-opacity-50 rounded-md text-base font-medium"
              href="/#awards"
              onClick={toggleMenu}
            >
              <li className="rounded-md w-full p-2 px-4">Awards</li>
            </Link>
            <Link
              className="text-black hover:text-opacity-50 dark:text-white dark:hover:text-opacity-50 rounded-md text-base font-medium"
              href="/contact"
              onClick={toggleMenu}
            >
              <li className="rounded-md w-full p-2 px-4">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}
