"use client";
import { MAX_FREE_COUNT, Sidebarlinks } from "@/constants";
import { useForm } from "@/hooks/use-create-form";
import { useProModal } from "@/hooks/use-pro-modal";
import { Activity, Crown, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeSidebarProps {
  isPro: Boolean;
  apiLimiteCount: number;
}
const ResumeSidebar = ({
  isPro = false,
  apiLimiteCount = 0,
}: ResumeSidebarProps) => {
  const { onOpen } = useForm();
  const { onopen } = useProModal();
  return (
    <div className="lg:w-[90px] md:w-[130px] hidden md:flex lg:flex bg-[#0000001e] backdrop-blur-md h-screen  items-center flex-col">
      <Link className="mt-6" href="/dashboard">
        <Activity size={29} className="text-[#9254cc] cursor-pointer" />
      </Link>
      <button
        onClick={onOpen}
        className="outline-none border-none w-[50px] h-[50px] flex items-center justify-center mt-16 rounded-full bg-[#9254cc]/30"
      >
        <Plus size={24} className="text-[#9254cc] text-center" />
      </button>
      <div className="mt-8">
        {Sidebarlinks.map((link) => (
          <Link href={link.route} key={link.route}>
            <link.icons size={28} className="mt-4 text-[#9254cc]" />
          </Link>
        ))}
      </div>
      <div className="mt-24">
        <button
          onClick={onopen}
          className="outline-none border-none w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#3c0371]"
        >
          <Crown className="text-[#f4cd00]" />
        </button>
        <p className="text-center mt-3 font-semibold">
          {apiLimiteCount}/{MAX_FREE_COUNT}
        </p>
      </div>
    </div>
  );
};

export default ResumeSidebar;
