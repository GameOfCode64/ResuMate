"use client";
import React, { useState } from "react";
import { z } from "zod";
import { formSchema } from "@/lib/formschema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Button } from "../ui/button";
import Custominput from "../Custominput";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { experience, industries } from "@/constants";
import { createResume } from "@/server-actions/create-resuma";

interface CreateResumeProps {
  type: "resume" | "cletter" | "rletter";
  title: string;
}

const CreateResume = ({ type, title }: CreateResumeProps) => {
  const { userId } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  if (!userId) {
    redirect("/sign-in");
    return null;
  }

  // React Hook form
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      resumename: "",
      domain: "",
      experience: "",
    },
  });

  // Submit handle
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      await createResume({
        ...values,
        userId,
      });

      redirect("/dashboard/resume");
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
      window.location.reload();
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Custominput
            name="resumename"
            control={form.control}
            placeholder="Enter Name for your Document"
            label="Name"
          />
          <FormField
            control={form.control}
            name="domain"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select your job industry</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="focus:ring-1 focus:ring-[#9254cc]">
                      <SelectValue placeholder="Select...." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {industries.map((industry) => (
                          <SelectItem
                            key={industry.value}
                            value={industry.value}
                          >
                            {industry.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select your Experience</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="focus:ring-1 focus:ring-[#9254cc]">
                      <SelectValue placeholder="Select...." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {experience.map((exp) => (
                          <SelectItem key={exp.value} value={exp.value}>
                            {exp.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-[#9254cc] hover:bg-[#9254cc]/90"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateResume;
