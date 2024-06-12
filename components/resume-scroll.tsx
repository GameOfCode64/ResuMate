"use client";
import { TopNavoptionLink } from "@/constants";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Scroll = ({ name, id }: { name: string; id: string }) => {
  const pathname = usePathname();
  return (
    <ScrollArea className="w-full bg-red-400 h-[50px] flex items-center justify-center gap-5 px-4 py-2">
      <div className="flex items-center gap-3">
        <Link
          href="#"
          className="px-3 py-1 font-semibold rounded-md bg-zinc-300 text-sm"
        >
          {name}
        </Link>
      </div>
    </ScrollArea>
  );
};

export default Scroll;
