import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center mt-14">
      <div className="flex flex-col items-center justify-center">
        <h1 className=" text-[68px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 cursor-pointer transition-all  ease-in-out to-pink-600 font-extrabold mb-4">
          Get your Dream job
        </h1>
        <h2 className="text-[48px]  text-white font-extrabold ">
          Using the the power of AI
        </h2>
        <h3 className=" text-[38px] text-transparent bg-clip-text bg-gradient-to-r from-[#9254cc] to-rose-600 font-extrabold mt-2 mb-4">
          ResuMate!
        </h3>
        <Link href="/dashboard">
          <Button className="px-8 font-bold py-4 bg-gradient-to-r from-[#9254cc] to-rose-600 rounded-3xl">
            Try it For Free
          </Button>
        </Link>

        <div className="mt-32  text-center  pl-3 text-gray-300">
          ResuMate! AI powered Resume Builder. Using ResuMate build your future,
          get your dream job ❤️
        </div>
      </div>
    </div>
  );
};

export default HomePage;
