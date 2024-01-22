import { ReactNode } from "react";
import { Metadata } from "next";

import siteConfigs from "@/configs/site.configs";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfigs.title,
    template: `%s | ${siteConfigs.title}`,
  },
  description: siteConfigs.description,
  icons: siteConfigs.icon,
};

interface RootLayoutProps {
  children: ReactNode;
}

function RootLayout(props: RootLayoutProps) {
  return (
    <html className="scroll-smooth" lang="it">
      <body className="bg-slate-100">{props.children}</body>
    </html>
  );
}

export default RootLayout;
