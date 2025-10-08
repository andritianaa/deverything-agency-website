"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 z-50 w-full flex items-center justify-center ">
      <div className="lg:w-fit p-3 w-full">
        <nav className="flex items-center py-3 px-4 bg-background/70 backdrop-blur-sm border border-border shadow rounded-2xl gap-2 justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image alt="logo" width={34} height={34} src="/logo.png" />
            </Link>
          </div>

          <div className="hidden lg:flex  rounded-3xl py-3 px-1">
            <ul className="flex gap-0 2xl:gap-1.5">
              <li>
                <Link
                  className="px-4 py-2 font-medium rounded-3xl hover:bg-foreground/5 transition-colors text-black/60 dark:text-white"
                  href="/#aboutus"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  className="px-4 py-2 font-medium rounded-3xl hover:bg-foreground/5 transition-colors text-black/60 dark:text-white"
                  href="/#services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="px-4 py-2 font-medium rounded-3xl hover:bg-foreground/5 transition-colors text-black/60 dark:text-white"
                  href="/#work"
                >
                  Réalisations
                </Link>
              </li>
              <li>
                <Link
                  className="px-4 py-2 font-medium rounded-3xl hover:bg-foreground/5 transition-colors text-black/60 dark:text-white"
                  href="/#team"
                >
                  Équipe
                </Link>
              </li>
              <li>
                <Link
                  className="px-4 py-2 font-medium rounded-3xl hover:bg-foreground/5 transition-colors text-black/60 dark:text-white"
                  href="/#pricing"
                >
                  Tarifs
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-1 xl:gap-4">
            <Link href={"/rdv"}>
              <Button
                magnetic
                className="h-10 px-4 text-white whitespace-nowrap"
              >
                Prendre rendez-vous
              </Button>
            </Link>

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
              <li className="rounded-md w-full p-2 px-4">À propos</li>
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
              <li className="rounded-md w-full p-2 px-4">Réalisations</li>
            </Link>
            <Link
              className="text-black hover:text-opacity-50 dark:text-white dark:hover:text-opacity-50 rounded-md text-base font-medium"
              href="/#team"
              onClick={toggleMenu}
            >
              <li className="rounded-md w-full p-2 px-4">Équipe</li>
            </Link>
            <Link
              className="text-black hover:text-opacity-50 dark:text-white dark:hover:text-opacity-50 rounded-md text-base font-medium"
              href="/#pricing"
              onClick={toggleMenu}
            >
              <li className="rounded-md w-full p-2 px-4">Tarifs</li>
            </Link>
          </ul>

          <div className="mt-6 px-4">
            <Link href={"/rdv"} onClick={toggleMenu}>
              <Button magnetic className="w-full text-white">
                Prendre rendez-vous
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
