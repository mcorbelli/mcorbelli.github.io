import { ReactNode } from "react";

import NavBar from "@/app/(landing)/_components/navbar";
import Footer from "@/app/(landing)/_components/footer";

interface RootLayoutProps {
  children: ReactNode;
}

function RootLayout(props: RootLayoutProps) {
  return (
    <div className="bg-slate-100">
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
}

export default RootLayout;
