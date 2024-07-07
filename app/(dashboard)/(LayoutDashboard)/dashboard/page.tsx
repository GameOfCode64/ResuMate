import Image from "next/image";
import React from "react";
import banner from "@/public/landing.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MobileTab from "@/components/mobile-tabs";

const page = () => {
  return (
    <div className="relative w-full flex flex-col h-full">
      <MobileTab value="" />
      <div className="flex items-center justify-center flex-col mt-20 ">
        <div className="w-[350px]">
          <Image src={banner} alt="Banner" className="w-full h-full" />
        </div>
        <div className="flex items-center justify-center flex-col">
          <p className=" font-[600]  md:text-[22px] lg:text-[22px] text-[17px] text-nowrap text-zinc-700 mt-4 ">
            let&apos;s Build Your future with ResuMate!
          </p>
          <Link href="/dashboard/resume">
            <Button className="mt-4 bg-[#3c0371] hover:bg-[#3c0371]/90">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
