import * as Icon from "lucide-react";

import * as Drop from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function AvatarDropdown() {
  return (
    <Drop.DropdownMenu>
      <Drop.DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer hover:opacity-70 transition">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CM</AvatarFallback>
        </Avatar>
      </Drop.DropdownMenuTrigger>
      <Drop.DropdownMenuContent className="w-56">
        <Drop.DropdownMenuLabel>My Account</Drop.DropdownMenuLabel>
        <Drop.DropdownMenuSeparator />
        <Drop.DropdownMenuGroup>
          <Drop.DropdownMenuItem className="cursor-pointer">
            <Icon.User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <Drop.DropdownMenuShortcut>⇧⌘P</Drop.DropdownMenuShortcut>
          </Drop.DropdownMenuItem>
          <Drop.DropdownMenuItem className="cursor-pointer">
            <Icon.CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <Drop.DropdownMenuShortcut>⌘B</Drop.DropdownMenuShortcut>
          </Drop.DropdownMenuItem>
          <Drop.DropdownMenuItem className="cursor-pointer">
            <Icon.Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <Drop.DropdownMenuShortcut>⌘S</Drop.DropdownMenuShortcut>
          </Drop.DropdownMenuItem>
          <Drop.DropdownMenuItem className="cursor-pointer">
            <Icon.Keyboard className="mr-2 h-4 w-4" />
            <span>Keyboard shortcuts</span>
            <Drop.DropdownMenuShortcut>⌘K</Drop.DropdownMenuShortcut>
          </Drop.DropdownMenuItem>
        </Drop.DropdownMenuGroup>
        <Drop.DropdownMenuSeparator />
        <Drop.DropdownMenuGroup>
          <Drop.DropdownMenuItem className="cursor-pointer">
            <Icon.Users className="mr-2 h-4 w-4" />
            <span>Team</span>
          </Drop.DropdownMenuItem>
          <Drop.DropdownMenuSub>
            <Drop.DropdownMenuSubTrigger>
              <Icon.UserPlus className="mr-2 h-4 w-4" />
              <span>Invite users</span>
            </Drop.DropdownMenuSubTrigger>
            <Drop.DropdownMenuPortal>
              <Drop.DropdownMenuSubContent>
                <Drop.DropdownMenuItem className="cursor-pointer">
                  <Icon.Mail className="mr-2 h-4 w-4" />
                  <span>Email</span>
                </Drop.DropdownMenuItem>
                <Drop.DropdownMenuItem className="cursor-pointer">
                  <Icon.MessageSquare className="mr-2 h-4 w-4" />
                  <span>Message</span>
                </Drop.DropdownMenuItem>
                <Drop.DropdownMenuSeparator />
                <Drop.DropdownMenuItem className="cursor-pointer">
                  <Icon.PlusCircle className="mr-2 h-4 w-4" />
                  <span>More...</span>
                </Drop.DropdownMenuItem>
              </Drop.DropdownMenuSubContent>
            </Drop.DropdownMenuPortal>
          </Drop.DropdownMenuSub>
          <Drop.DropdownMenuItem className="cursor-pointer">
            <Icon.Plus className="mr-2 h-4 w-4" />
            <span>New Team</span>
            <Drop.DropdownMenuShortcut>⌘+T</Drop.DropdownMenuShortcut>
          </Drop.DropdownMenuItem>
        </Drop.DropdownMenuGroup>
        <Drop.DropdownMenuSeparator />
        <Drop.DropdownMenuItem className="cursor-pointer">
          <Icon.LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <Drop.DropdownMenuShortcut>⇧⌘Q</Drop.DropdownMenuShortcut>
        </Drop.DropdownMenuItem>
      </Drop.DropdownMenuContent>
    </Drop.DropdownMenu>
  );
}

export default AvatarDropdown;
