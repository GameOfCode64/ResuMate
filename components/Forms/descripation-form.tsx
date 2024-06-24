"use client";
import { z } from "zod";
import React, { useState } from "react";
import { descriptionSchema, skillSchema } from "@/lib/formschema";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Summary from "@/components/Forms/Summary-form";

const Description = ({ resumeId }: { resumeId: string }) => {
  const { userId } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof descriptionSchema>>({
    resolver: zodResolver(skillSchema),
    defaultValues: {},
  });
  const onSubmit = async (values: z.infer<typeof descriptionSchema>) => {
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
    <div className="full px-1 mt-8">
      <div className="lg:flex inline-block w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add Skill</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="write a Professional Description About Your work"
                      className="resize-none focus-visible:ring-[#9254cc]"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full md:w-auto lg:w-auto mt-6 bg-[#9254cc] hover:bg-[#9254cc]/90 md:px-6"
            >
              Add Description
            </Button>
          </form>
        </Form>
        <aside className="w-full lg:w-[500px] md:my-6 px-4 py-3 my-4 lg:ml-8 lg:h-auto bg-white shadow-md rounded-md">
          <Summary />
        </aside>
      </div>
    </div>
  );
};

export default Description;
