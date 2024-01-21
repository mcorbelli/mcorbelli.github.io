import LogoPortfolio from "@/components/logo-portfolio";
import Copyright from "@/components/copyright";
import { Separator } from "@/components/ui/separator";
import NavigationMenu, { NavElement } from "@/components/navigation-menu";

const navElements: NavElement[] = [
  {
    label: "Landing",
    anchor: "#landing",
  },
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

function Footer() {
  return (
    <footer className="w-full max-w-screen-2xl mx-auto p-4 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <LogoPortfolio className="flex items-center mb-4 sm:mb-0 space-x-3" />
        <NavigationMenu className="flex" navElements={navElements} />
      </div>
      <Separator className="my-6 bg-gray-300 sm:mx-auto lg:my-8" />
      <Copyright year={2024} name="Corbelli Mattia" />
    </footer>
  );
}

export default Footer;
