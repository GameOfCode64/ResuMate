import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { educationSchema } from "@/lib/formschema";
import { useAuth } from "@clerk/nextjs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import EduCustominput from "@/components/inputs/education-form-custom-input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const Education = ({ resumeId }: { resumeId: string }) => {
  const { userId } = useAuth();
  const [isOpen, setIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof educationSchema>>({
    resolver: zodResolver(educationSchema),
    defaultValues: {},
  });

  const onSubmit = async (values: z.infer<typeof educationSchema>) => {
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
              Your Education {isOpen ? <ChevronRight /> : <ChevronDown />}
            </CollapsibleTrigger>
            <CollapsibleContent>Add your first Education</CollapsibleContent>
          </Collapsible>
        </aside>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-8 lg:gap-12 gap-5">
              <EduCustominput
                name="degree"
                control={form.control}
                label="What Your DEGREE / QUALIFICATION"
                placeholder="Bachelor in computer science"
              />
              <EduCustominput
                name="collageName"
                control={form.control}
                label="Collage/University Name"
                placeholder="University of Delhi"
              />
              <EduCustominput
                name="location"
                control={form.control}
                label="Collage/University Location"
                placeholder="New Delhi"
              />
              <EduCustominput
                name="passingYear"
                control={form.control}
                label="Passing Year"
                placeholder="2022"
              />
              <EduCustominput
                name="gpa"
                control={form.control}
                label="GPA/Percentage"
                placeholder="8.9 Or 95%"
              />
            </div>
            <FormField
              control={form.control}
              name="descripation"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>DESCRIBE WHAT YOU DID</FormLabel>
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
              Add to Education List
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Education;
