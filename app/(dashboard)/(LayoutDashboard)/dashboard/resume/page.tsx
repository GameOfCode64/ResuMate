import CreateResumebtn from "@/components/create-resume-btn";
import ResumeCard from "@/components/resume-card";
import React from "react";

const page = () => {
  return (
    <div className="px-7 mt-2">
      <CreateResumebtn name="Resume" />
      <ResumeCard />
    </div>
  );
};

export default page;
