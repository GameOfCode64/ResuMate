import { MAX_FREE_COUNT } from "@/constants";
import React from "react";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Crown } from "lucide-react";
import { useProModal } from "@/hooks/use-pro-modal";

interface FreeProps {
  isPro: Boolean;
  apiLimiteCount: number;
}
const FreeCounter = ({ isPro, apiLimiteCount }: FreeProps) => {
  const { onOpen } = useProModal();
  return (
    <div className="my-12 w-full h-auto px-4 py-5 bg-[#fff] shadow-md rounded-md">
      <p className=" text-sm text-center font-semibold">
        {apiLimiteCount} / {MAX_FREE_COUNT} Free Generations
      </p>
      <Progress value={20} className="w-full h-3 mt-3" />
      <Button
        className="mt-3 w-full bg-[#3c0371] hover:bg-[#3c0371]/90"
        onClick={onOpen}
      >
        <Crown className="mr-3 text-[#f4cd00]" />
        Upgrade Now
      </Button>
    </div>
  );
};

export default FreeCounter;
