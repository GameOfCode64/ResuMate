"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const MobileTab = ({ value }: { value: string }) => {
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
  return (
    <div className="md:hidden lg:hidden flex items-center justify-center w-full my-4">
      <Tabs
        defaultValue={value}
        className="grid data-[state=active]:bg-[#9254cc] data-[state=active]:text-white"
      >
        <TabsList className="grid w-full grid-cols-3 gap-7 bg-white">
          <TabsTrigger
            value="resume"
            className="data-[state=active]:bg-[#9254cc] data-[state=active]:text-white"
          >
            <Link href="/dashboard/resume" className="w-auto text-[12px]">
              Resume
            </Link>
          </TabsTrigger>

          <TabsTrigger
            value="cletter"
            className="data-[state=active]:bg-[#9254cc]  data-[state=active]:text-white"
          >
            <Link
              href="/dashboard/cover-letters"
              className="w-auto text-[12px]"
            >
              Cover Latter
            </Link>
          </TabsTrigger>
          <TabsTrigger
            value="rletter"
            className="data-[state=active]:bg-[#9254cc] data-[state=active]:text-white"
          >
            <Link
              href="/dashboard/resignation-letters"
              className="w-auto text-[12px]"
            >
              Resignation
            </Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default MobileTab;
