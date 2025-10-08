import { Star } from "lucide-react";
import Image from "next/image";

export const CustomerList = () => {
  return (
    <div className="flex items-center gap-7">
      <ul className="avatar flex flex-row items-center">
        <li className="-mr-2 z-1">
          <Image
            alt="Avatar"
            width={44}
            height={44}
            className="rounded-full border-2 border-white"
            src="https://Awake-agency-next-js.vercel.app/images/home/avatar_1.jpg"
          />
        </li>
        <li className="-mr-2 z-1">
          <Image
            alt="Avatar"
            width={44}
            height={44}
            className="rounded-full border-2 border-white"
            src="https://Awake-agency-next-js.vercel.app/images/home/avatar_2.jpg"
          />
        </li>
        <li className="-mr-2 z-1">
          <Image
            alt="Avatar"
            width={44}
            height={44}
            className="rounded-full border-2 border-white"
            src="https://Awake-agency-next-js.vercel.app/images/home/avatar_3.jpg"
          />
        </li>
        <li className="-mr-2 z-1">
          <Image
            alt="Avatar"
            width={44}
            height={44}
            className="rounded-full border-2 border-white"
            src="https://Awake-agency-next-js.vercel.app/images/home/avatar_4.jpg"
          />
        </li>
      </ul>
      <div className="gap-1 flex flex-col">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-white text-white" />
          ))}
        </div>
        <p className="text-sm font-normal text-black/60 dark:text-white/60">
          Plus de 20 projets réalisés
        </p>
      </div>
    </div>
  );
};
