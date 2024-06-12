"use client";
import { useForm } from "@/hooks/use-create-form";
import { Plus } from "lucide-react";
import React from "react";

const CreateResumebtn = ({ name }: { name: string }) => {
  const { onOpen } = useForm();
  return (
    <button
      onClick={onOpen}
      className="md:w-[250px] w-full lg:w-[250px] h-full border-[2px] border-[#9254cc] border-dotted px-4 py-28 rounded-md flex items-center justify-center flex-col"
    >
      <Plus size={32} className=" text-zinc-500" />
      <p className="text-zinc-600 font-semibold mt-4 text-sm">Create {name}</p>
    </button>
  );
};

export default CreateResumebtn;
