"use client";
import { Activity } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Sidebarlinks } from "@/constants";
import { usePathname } from "next/navigation";
import FreeCounter from "./FreeCounter";
import { useForm } from "@/hooks/use-create-form";

interface DashboardProps {
  isPro: Boolean;
  apiLimiteCount: number;
}
const MobileMenu = ({ isPro = false, apiLimiteCount = 0 }: DashboardProps) => {
  const pathName = usePathname();
  const { onOpen } = useForm();
  return (
    <div className="px-4 py-4 flex flex-col">
      <div className="px-3 py-2 flex gap-3 items-center justify-center">
        <Link href="/dashboard">
          <Activity size={32} className="text-[#9254cc]" />
        </Link>
        <p className="font-[600] text-[22px]">Resuma.AI</p>
      </div>
      <Button
        onClick={onOpen}
        className="my-9  bg-[#9254cc] text-white font-semibold py-5 hover:bg-[#9254cc]/90"
      >
        Create One
      </Button>
      <div className="space-y-1">
        {Sidebarlinks.map((route) => (
          <Link
            href={route.route}
            key={route.route}
            className={cn(
              "text-sm group flex p-3 w-full justify-start font-medium cursor-pointe rounded-lg transition",
              pathName === route.route
                ? "text-[#9254cc] bg-[#9254cc]/20"
                : "text-zinc-400"
            )}
          >
            <div className="flex items-center flex-1">
              <route.icons className={cn("h-5 w-5 mr-5")} />
              {route.titel}
            </div>
          </Link>
        ))}
      </div>
      <FreeCounter apiLimiteCount={apiLimiteCount} isPro={isPro} />
    </div>
  );
};

export default MobileMenu;
