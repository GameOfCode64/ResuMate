"use client";
import { AIdescripation } from "@/lib/formschema";
import { useAuth } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import Aiinput from "../inputs/Ai-descripation-input";
import { Button } from "../ui/button";
import { Activity } from "lucide-react";

const Summary = () => {
  const { userId } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof AIdescripation>>({
    resolver: zodResolver(AIdescripation),
    defaultValues: {},
  });
  const onSubmit = async (values: z.infer<typeof AIdescripation>) => {
    try {
      setIsLoading(true);
      console.log(values);
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="w-full px-2 py-2">
      <h3 className="font-semibold">AI Discripation Writer</h3>
      <div className="mt-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="flex flex-col gap-3">
              <Aiinput
                name="role"
                label="Position"
                placeholder="Backend Devloper at google"
                control={form.control}
              />
              <Aiinput
                name="skill"
                label="Add Skill for higlight"
                placeholder="Python, Java, Javascripat, golang"
                control={form.control}
              />
              <Button className="w-full mt-4 flex items-center justify-center  bg-gradient-to-r from-cyan-500  to-[#9254cc]">
                <Activity className="mr-2" /> Genrate
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Summary;
