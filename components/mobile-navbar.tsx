import { UserButton } from "@clerk/nextjs";
import { AlignRight } from "lucide-react";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import MobileMenu from "./mobile-menu";

const DashboardModialNav = () => {
  const userButtonAppearance = {
    elements: {
      userButtonAvatarBox: "w-[30px] h-[30px]",
    },
  };
  return (
    <div className="lg:hidden md:hidden block w-full h-auto bg-[#0000001e] backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4">
        <UserButton appearance={userButtonAppearance} />
        <Sheet>
          <SheetTrigger>
            <AlignRight />
          </SheetTrigger>
          <SheetContent>
            <MobileMenu isPro={false} apiLimiteCount={0} />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default DashboardModialNav;
