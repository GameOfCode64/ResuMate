"use client";
import { TopNavoptionLink } from "@/constants";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Scroll = ({
  resumename,
  resumeid,
}: {
  resumename: string;
  resumeid: string;
}) => {
  const pathname = usePathname();
  const url = `/dashboard/resume/${resumeid}`;
  return (
    <ScrollArea className="w-full h-[50px] flex items-center justify-center gap-5 px-4 py-2">
      <div className="flex items-center gap-3">
        <p className="px-4 py-1 font-semibold rounded-md bg-zinc-300 text-sm cursor-pointer">
          {resumename}
        </p>
        {TopNavoptionLink.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "px-3 py-1 font-semibold rounded-md text-sm",
              pathname === `${url}${link.href}`
                ? "bg-[#9254cc] text-white"
                : "bg-zinc-300"
            )}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </ScrollArea>
  );
};

export default Scroll;
