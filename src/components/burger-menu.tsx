import Image from "next/image";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

interface BurgerMenuProps {
  className?: string;
}

function BurgerMenu(props: BurgerMenuProps) {
  return (
    <Button
      className={cn("cursor-pointer", props.className)}
      size="sm"
      variant="outline"
      asChild
    >
      <Image
        src="/icons/burger-menu.svg"
        width={50.0}
        height={50.0}
        alt="Burger Menu"
      />
    </Button>
  );
}

export default BurgerMenu;
