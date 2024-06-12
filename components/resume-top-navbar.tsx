import React from "react";
import Scroll from "@/components/resume-scroll";
import { getAuth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { NextApiRequest } from "next";

const ResumeTopNav = async (
  { resumeId }: { resumeId: string | "" },
  req: NextApiRequest
) => {
  const { userId } = getAuth(req);
  const userid = userId;
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
      {resumas.map((res) => (
        <Scroll name={res.title} id={res.id} key={res.id} />
      ))}
    </div>
  );
};

export default ResumeTopNav;
