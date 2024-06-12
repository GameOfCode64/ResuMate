import { db } from "@/lib/prisma";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function ResumeCard() {
  const userId = auth();
  const userid = userId.userId;
  const resumas = await db.resume.findMany({
    where: {
      userId: userid || "",
    },
    select: {
      id: true,
      title: true,
    },
  });

  return (
    <div className="py-16">
      <h3 className="font-bold my-8 text-[22px]">Your Resumes</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:gap-3 gap-6 ">
        {resumas.map((resume) => (
          <Link
            href={`/dashboard/resume/${resume.id}`}
            key={resume.id}
            className="md:w-[250px] md:h-[300px] lg:w-[250px] lg:h-[300px] w-full h-[370px]  px-2 py-2 bg-zinc-300 rounded-md shadow-sm"
          >
            <div className="w-full h-[85%] bg-zinc-400 rounded-md">
              {/* Placeholder for Image */}
              {/* <Image /> */}
            </div>
            <div className="flex items-center justify-between mt-3 px-2">
              <p className="font-semibold">{resume.title}</p>
              <EllipsisVertical size={17} className="cursor-pointer" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
