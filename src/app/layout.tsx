import { ReactNode } from "react";

import "./globals.css";

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
