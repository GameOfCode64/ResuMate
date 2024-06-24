"use client";
import { z } from "zod";
import React, { useState } from "react";
import { skillSchema } from "@/lib/formschema";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronRight } from "lucide-react";
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

const Skills = ({ resumeId }: { resumeId: string }) => {
  const { userId } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = React.useState(true);
  const router = useRouter();

  const form = useForm<z.infer<typeof skillSchema>>({
    resolver: zodResolver(skillSchema),
    defaultValues: {},
  });
  const onSubmit = async (values: z.infer<typeof skillSchema>) => {
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
        <aside className="w-full lg:w-[400px] md:my-6 px-4 py-3 my-4 lg:mr-8 lg:h-[300px] bg-[#0000001e] rounded-md">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger className="flex items-center justify-center gap-2">
              Your Experience {isOpen ? <ChevronRight /> : <ChevronDown />}
            </CollapsibleTrigger>
            <CollapsibleContent>Add your first Experience</CollapsibleContent>
          </Collapsible>
        </aside>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <FormField
              control={form.control}
              name="skillName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add Skill</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Programing Skills: Nodejs,Nextjs,MySql"
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
              Add to Skill List
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Skills;
