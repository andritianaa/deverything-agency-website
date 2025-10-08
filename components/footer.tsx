import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 backdrop-blur-[5px] bg-black/90 dark:bg-black/90 w-full">
      <div className="container py-12 md:py-16">
        <div className="flex flex-col items-center justify-center">
          {/* Navigation Links */}
          <div className="flex-1 max-w-xs flex flex-col items-center justify-center">
            <Link
              href="/"
              className=" flex text-blue-600 items-center justify-center text-2xl font-semibold gap-4"
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={200}
                height={40}
                className="h-8 md:h-10 w-auto"
              />
              Deverything
            </Link>

            <nav className="flex flex-col items-center justify-center mt-8 gap-4">
              <Link
                href="/#aboutus"
                className="text-neutral-400 hover:text-white transition-colors duration-200 tracking-tight text-center"
              >
                À propos
              </Link>

              <Link
                href="/#services"
                className="text-neutral-400 hover:text-white transition-colors duration-200 tracking-tight text-center"
              >
                Services
              </Link>

              <Link
                href="/#work"
                className="text-neutral-400 hover:text-white transition-colors duration-200 tracking-tight text-center"
              >
                Réalisations
              </Link>

              <Link
                href="/#team"
                className="text-neutral-400 hover:text-white transition-colors duration-200 tracking-tight text-center"
              >
                Équipe
              </Link>

              <Link
                href="/#pricing"
                className="text-neutral-400 hover:text-white transition-colors duration-200 tracking-tight text-center"
              >
                Tarifs
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-8 border-t border-white/10">
          <p className="text-neutral-500 text-sm text-center ">
            © {new Date().getFullYear()} Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
