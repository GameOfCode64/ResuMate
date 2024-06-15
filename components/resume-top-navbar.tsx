import React, { useEffect, useState } from "react";
import Scroll from "@/components/resume-scroll";
import { db } from "@/lib/prisma";
import { redirect } from "next/navigation";

const ResumeTopNav = async ({ resumeId }: { resumeId: string }) => {
  const resId = resumeId;
  if (!resId || resId === "") {
    redirect("/dashboard");
  }
  const resumas = await db.resume.findMany({
    where: {
      id: resId || "",
    },
    select: {
      id: true,
      title: true,
    },
  });

  return (
    <div className="py-4">
      {resumas.map((res) => (
        <div key={res.id}>
          <Scroll resumename={res.title} resumeid={res.id} />
        </div>
      ))}
    </div>
  );
};

export default ResumeTopNav;
