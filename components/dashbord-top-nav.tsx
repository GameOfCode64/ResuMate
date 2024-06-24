"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const DashbordTopNav = ({
  value,
  show = false,
}: {
  value: string;
  show: boolean;
}) => {
  const pathname = usePathname();
  if (pathname === "/dashboard/resume") {
    value = "resume";
  }
  if (pathname === "/dashboard/cover-letters") {
    value = "cletter";
  }
  if (pathname === "/dashboard/resignation-letters") {
    value = "rletter";
  }
  const userButtonAppearance = {
    elements: {
      userButtonAvatarBox: "w-[40px] h-[40px] md:w-[35px] md:h-[35px]",
    },
  };
  return (
    <>
      <div
        className={cn(
          show
            ? `md:flex lg:flex hidden py-6 px-6 items-center justify-between`
            : `hidden`
        )}
      >
        <Tabs
          defaultValue={value}
          className="md:grid lg:grid hidden data-[state=active]:bg-[#9254cc] data-[state=active]:text-white"
        >
          <TabsList className="grid w-full grid-cols-3 bg-white">
            <TabsTrigger
              value="resume"
              className="data-[state=active]:bg-[#9254cc] data-[state=active]:text-white"
            >
              <Link href="/dashboard/resume" className="w-full">
                Resume
              </Link>
            </TabsTrigger>

            <TabsTrigger
              value="cletter"
              className="data-[state=active]:bg-[#9254cc] data-[state=active]:text-white"
            >
              <Link href="/dashboard/cover-letters" className="w-full">
                Cover Latter
              </Link>
            </TabsTrigger>
            <TabsTrigger
              value="rletter"
              className="data-[state=active]:bg-[#9254cc] data-[state=active]:text-white"
            >
              <Link href="/dashboard/resignation-letters" className="w-full">
                Resignation Letter
              </Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <UserButton appearance={userButtonAppearance} />
      </div>
    </>
  );
};

export default DashbordTopNav;
