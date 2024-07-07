"use client";

import ResumeModel from "@/components/Create-resuma";
import ProModal from "@/components/Pro-modal";
import DashboardSidebar from "@/components/Sidebar";
import DashbordTopNav from "@/components/dashbord-top-nav";
import DashboardModialNav from "@/components/mobile-navbar";
import { usePathname } from "next/navigation";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  shownav?: boolean; // made optional with default value
  showsidebar?: boolean; // made optional with default value
}

const Layout: React.FC<LayoutProps> = ({
  children,
  shownav = false,
  showsidebar = false,
}) => {
  const path = usePathname();

  if (
    path === "/dashboard" ||
    path === "/dashboard/resume" ||
    path === "/dashboard/cover-letters" ||
    path === "/dashboard/resignation-letters"
  ) {
    shownav = true;
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

export default Layout;
