import ResumeTopNav from "@/components/resume-top-navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ResumeTopNav />
      {children}
    </div>
  );
};

export default layout;
