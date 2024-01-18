"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";

function NavBar() {
  const [prefix, setPrefix] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const isBasePath = pathname === "/";
    setPrefix(isBasePath ? "" : "/");
  }, [pathname]);

  return (
    <nav className="absolute top-0 flex w-screen p-4 gap-x-4 items-center">
      <Logo />
      <div className="flex justify-between items-center w-full">
        <div className="space-x-4 block w-full">
          <Link href={`${prefix}#presentation`}>Presentation</Link>
          <Link href={`${prefix}#knowledge`}>Knowledge</Link>
          <Link href={`${prefix}#projects`}>Projects</Link>
        </div>
        <div className="space-x-4 block">
          <Button size="sm" variant="outline" asChild>
            <Link href="/contact">CONTACT</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
