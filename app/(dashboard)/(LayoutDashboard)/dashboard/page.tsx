import ResumeModel from "@/components/Create-resuma";
import ProModal from "@/components/Pro-modal";
import Image from "next/image";
import React from "react";
import banner from "@/public/landing.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="relative w-full flex flex-col h-full">
      <div className="flex items-center justify-center flex-col mt-20 ">
        <div className="w-[350px]">
          <Image src={banner} alt="Banner" className="w-full h-full" />
        </div>
        <p className=" font-[600] text-[22px] text-zinc-700 mt-4 text-wrap">
          let&apos;s Build Your future with Resuma!
        </p>
        <Link href="/dashboard/resume">
          <Button className="mt-4 bg-[#3c0371] hover:bg-[#3c0371]/90">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
