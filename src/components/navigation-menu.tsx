"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";

export interface NavElement {
  label: string;
  anchor: string;
}

interface NavigationMenuProps {
  className?: string;
  navElements: NavElement[];
}

function NavigationMenu(props: NavigationMenuProps) {
  const [prefix, setPrefix] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const isBasePath = pathname === "/";
    setPrefix(isBasePath ? "" : "/");
  }, [pathname]);

  return (
    <ul
      className={cn(
        "items-center text-sm font-medium text-gray-600 gap-4",
        props.className,
      )}
    >
      {props.navElements.map((navElement) => (
        <li key={`item_${navElement.anchor}`}>
          <Link
            href={`${prefix}${navElement.anchor}`}
            className="hover:underline"
          >
            {navElement.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavigationMenu;
