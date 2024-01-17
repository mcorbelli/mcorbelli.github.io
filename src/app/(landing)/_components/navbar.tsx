"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Logo from "@/components/logo";

function NavBar() {
  const [prefix, setPrefix] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const isBasePath = (pathname === "/");
    setPrefix(isBasePath ? "": "/");
  }, [pathname]);

  return (
    <nav className="absolute top-0 flex w-screen p-4 gap-x-4">
      <Logo/>
      <div className="flex justify-between w-full">
        <div className="flex flex-row gap-x-2">
          <Link href={`${prefix}#presentation`}>Presentation</Link>
          <Link href={`${prefix}#knowledge`}>Knowledge</Link>
          <Link href={`${prefix}#projects`}>Projects</Link>
        </div>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default NavBar;
