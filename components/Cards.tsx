import { EllipsisVertical } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Resume {
  id: string;
  title: string;
}

interface ResumeListProps {
  resumes: Resume[];
}
const Cards: React.FC<ResumeListProps> = ({ resumes }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:gap-32 gap-6 ">
      {resumes.map((resume) => (
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
  );
};

export default Cards;
