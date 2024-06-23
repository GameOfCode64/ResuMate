"use client";
import { z } from "zod";
import React, { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { courseSchema } from "@/lib/formschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import CouCustominput from "../inputs/course-form-custom-input";

const Course = ({ resumeId }: { resumeId: string }) => {
  const { userId } = useAuth();
  const [isOpen, setIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof courseSchema>>({
    resolver: zodResolver(courseSchema),
    defaultValues: {},
  });

  const onSubmit = async (values: z.infer<typeof courseSchema>) => {
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
              Your Course {isOpen ? <ChevronRight /> : <ChevronDown />}
            </CollapsibleTrigger>
            <CollapsibleContent>Add your first Course</CollapsibleContent>
          </Collapsible>
        </aside>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-8 lg:gap-12 gap-5">
              <CouCustominput
                name="title"
                label="Course Name"
                placeholder="Full Stack Web devlopment"
                control={form.control}
              />
              <CouCustominput
                name="orgName"
                label="Where did you take the Course"
                placeholder="Indian Institute of Computer Science"
                control={form.control}
              />
              <CouCustominput
                name="complitionYear"
                label="When did you get the Certificate?"
                placeholder="2022"
                control={form.control}
              />
              <CouCustominput
                name="skillYouLearn"
                label="What Skill did You learn?"
                placeholder="Nodejs, Nextjs, React"
                control={form.control}
              />
            </div>
            <FormField
              control={form.control}
              name="descripation"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>how was that Skill Applied?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about your Role"
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
              Add to Course List
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Course;
