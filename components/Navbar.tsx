import { Activity } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="w-full  h-[80px] bg-[#00000020]">
      <div className="w-full  md:px-20 px-4 py-8 flex items-center justify-between">
        <Link href="/" className="flex items-center justify-center">
          <Activity className="text-[#9254cc] mr-2" size={27} />
          <p className="font-[600] text-[22px] text-[#fff]">ResuMate.AI</p>
        </Link>
        <Link href="/dashboard">
          <Button className="md:mr-32 mr-2 bg-gradient-to-r from-[#9254cc] to-rose-600 font-bold  px-6 rounded-3xl">
            Try Free
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
