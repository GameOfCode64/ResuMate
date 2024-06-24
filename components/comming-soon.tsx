import React from "react";
import Image from "next/image";
import soon from "@/public/soon.svg";
const Soon = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="w-[250px]">
        <Image alt="" src={soon} />
      </div>
      <h1 className="font-semibold mt-4 text-[24px]">Coming Soon 😅</h1>
    </div>
  );
};

export default Soon;
