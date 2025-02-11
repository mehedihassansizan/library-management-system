"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn, getInitials } from "@/lib/utils";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = ({ session }: { session: Session }) => {
  const pathName = usePathname();
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
        <Image src="/icons/logo.svg" alt="logo" width={40} height={40}></Image>
      </Link>
      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link
            href="/library"
            className={cn(
              "text-base cursor-pointer capitalize",
              pathName === "/library" ? "text-light-200 " : "text-light-100"
            )}
          >
            Library
          </Link>
        </li>

        <li>
          <Link href="/my-profile" className="flex items-center gap-2">
            <Avatar>
              <AvatarFallback className="bg-amber-100">
                {getInitials(session?.user?.name || "")}
              </AvatarFallback>
            </Avatar>
            <p className="text-white">{session?.user?.name}</p>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
