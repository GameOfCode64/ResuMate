import ResumeModel from "@/components/Create-resuma";
import ProModal from "@/components/Pro-modal";
import DashboardSidebar from "@/components/Sidebar";
import DashboardModialNav from "@/components/mobile-navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen flex relative">
      <DashboardSidebar isPro={false} apiLimiteCount={0} show={true} />
      <div className="flex flex-col md:w-[90%] lg:w-[90%] w-full">
        <ResumeModel type="Resume" />
        <ProModal />
        <DashboardModialNav />
        {children}
      </div>
    </div>
  );
};

export default layout;
