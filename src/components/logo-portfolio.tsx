import Link from "next/link";
import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  redirectPath?: string;
}

function LogoPortfolio(props: LogoProps) {
  return (
    <Link
      className={cn(
        "flex items-center gap-3 hover:opacity-70 transition",
        props.className,
      )}
      href={props.redirectPath ?? "/"}
    >
      <Image
        src="/portfolio-logo.svg"
        width={30.0}
        height={30.0}
        alt="Portfolio Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        Corbelli Mattia
      </span>
    </Link>
  );
}

export default LogoPortfolio;
