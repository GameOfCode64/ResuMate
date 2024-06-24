import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import Cards from "./Cards";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";
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
      <Collapsible defaultOpen={true}>
        <CollapsibleTrigger className="flex items-center justify-center gap-2">
          <h3 className="font-bold my-8 text-[22px]">Your Resumes</h3>
          <ChevronRight />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Cards resumes={resumas} />
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
