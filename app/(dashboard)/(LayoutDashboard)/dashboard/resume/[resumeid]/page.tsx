import ResumeTopNav from "@/components/resume-top-navbar";
import React from "react";

const page = ({ params }: { params: { resumeid: string } }) => {
  return (
    <div>
      <ResumeTopNav resumeId={params.resumeid} />
    </div>
  );
};

export default page;
