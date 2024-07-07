"use client";
import ResumeModel from "@/components/Create-resuma";
import ProModal from "@/components/Pro-modal";
import DashboardSidebar from "@/components/Sidebar";
import DashbordTopNav from "@/components/dashbord-top-nav";
import DashboardModialNav from "@/components/mobile-navbar";
import { Metadata } from "next";
import { usePathname } from "next/navigation";
import React from "react";

let shownav = false;
let showsidebar = false;
const layout = ({ children }: { children: React.ReactNode }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const path = usePathname();

  if (path === "/dashboard") {
    shownav = true;
  }
  if (path === "/dashboard/resume") {
    shownav = true;
  }
  if (path === "/dashboard/cover-letters") {
    shownav = true;
  }
  if (path === "/dashboard/resignation-letters") {
    shownav = true;
  }
  if (path === "/dashboard") {
    showsidebar = true;
  }
  if (path === "/dashboard/resume") {
    showsidebar = true;
  }
  if (path === "/dashboard/cover-letters") {
    showsidebar = true;
  }
  if (path === "/dashboard/resignation-letters") {
    showsidebar = true;
  }
  return (
    <div className="flex items-start justify-normal w-full">
      <DashboardSidebar apiLimiteCount={0} isPro={false} show={showsidebar} />
      <div className="flex flex-col md:w-[90%] lg:w-[90%] w-full">
        <ResumeModel type="Resume" />
        <ProModal />
        <DashboardModialNav />
        <DashbordTopNav value="" show={shownav} />
        {children}
      </div>
    </div>
  );
};

export default layout;
