import ResumeSidebar from "@/components/ResumeSidebar";
import DashboardSidebar from "@/components/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full md:flex lg:flex">
      <ResumeSidebar isPro={false} apiLimiteCount={0} />
      {children}
    </div>
  );
};

export default layout;
