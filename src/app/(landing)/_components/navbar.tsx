import Link from "next/link";

import LogoPortfolio from "@/components/logo-portfolio";
import AvatarDropdown from "@/components/avatar-dropdown";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import NavigationMenu, { NavElement } from "@/components/navigation-menu";
import BurgerMenu from "@/components/burger-menu";

const navElements: NavElement[] = [
  {
    label: "Presentation",
    anchor: "#presentation",
  },
  {
    label: "Knowledge",
    anchor: "#knowledge",
  },
  {
    label: "Projects",
    anchor: "#projects",
  },
];

function NavBar() {
  return (
    <nav className="absolute w-screen">
      <div className="flex justify-between max-w-screen-2xl mx-auto p-4">
        <LogoPortfolio />
        <div className="flex gap-4 items-center">
          <NavigationMenu
            className="hidden md:flex"
            navElements={navElements}
          />
          <Button size="sm" variant="outline" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
          <BurgerMenu className="md:hidden" />
          <div className="hidden md:flex gap-4 items-center">
            <Separator orientation="vertical" className="h-4 bg-gray-300" />
            <AvatarDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
