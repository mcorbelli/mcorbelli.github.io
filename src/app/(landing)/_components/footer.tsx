import Link from "next/link";

import Logo from "@/components/logo";

function Footer() {
  return (
    <footer className="flex flex-row w-full p-4 gap-x-4">
      <Logo />
      <div className="flex flex-row gap-x-2">
        <Link href="#presentation">Presentation</Link>
        <Link href="#knowledge">Knowledge</Link>
        <Link href="/contacts">Contacts</Link>
      </div>
    </footer>
  );
}

export default Footer;
