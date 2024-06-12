import React from "react";

import Scroll from "./resume-scroll";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";
import { redirect } from "next/navigation";
import useSelectedResume from "@/hooks/use-selected-resume";
const ResumeTopNav = async () => {
  const userId = auth();
  const { resumeID } = useSelectedResume();
  const userid = userId.userId;
  const resumeId = resumeID;

  if (!userid) {
    redirect("/sign-in");
  }

  const resumas = await db.resume.findMany({
    where: {
      id: resumeId || "",
    },
    select: {
      id: true,
      title: true,
    },
  });

  return (
    <div className="px-4 py-4">
      <Scroll name="" id="" />
    </div>
  );
};

export default ResumeTopNav;
