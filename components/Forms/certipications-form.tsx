"use client";
import { certipicationsSchema } from "@/lib/formschema";
import { useAuth } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import CerCustominput from "@/components/inputs/certipications-form-custom-input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Certipication = ({ resumeId }: { resumeId: string }) => {
  const { userId } = useAuth();
  const [isOpen, setIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof certipicationsSchema>>({
    resolver: zodResolver(certipicationsSchema),
    defaultValues: {},
  });

  const onSubmit = async (values: z.infer<typeof certipicationsSchema>) => {
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
              Your Certificate {isOpen ? <ChevronRight /> : <ChevronDown />}
            </CollapsibleTrigger>
            <CollapsibleContent>Add your first Certificate</CollapsibleContent>
          </Collapsible>
        </aside>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-8 lg:gap-12 gap-5">
              <CerCustominput
                name="title"
                placeholder="Foundations of Cybersecurity"
                label="Certificate Name"
                control={form.control}
              />
              <CerCustominput
                name="orgName"
                placeholder="Indian Institute of Computer Science"
                label="Where did you get the Certificate?"
                control={form.control}
              />
              <CerCustominput
                name="complitionYear"
                placeholder="2023"
                label="When did you get the Certificate?"
                control={form.control}
              />
            </div>
            <FormField
              control={form.control}
              name="descripation"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>how is the Certificate Relevant?</FormLabel>
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
              Add to Certificate List
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Certipication;
