"use client";

import React, { useState, useEffect } from "react";
import { z } from "zod";
import { contactSchema } from "@/lib/formschema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { contrary } from "@/constants";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import ContCustominput from "@/components/inputs/contact-form-custominput";
import { Contact } from "@/server-actions/create-contact";

const ContactForm = ({ resumeId }: { resumeId: string }) => {
  const { userId } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!userId) {
      router.push("/sign-in");
    }
  }, [userId, router]);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      resumeId: resumeId,
    },
  });

  const onSubmit = async (values: z.infer<typeof contactSchema>) => {
    try {
      setIsLoading(true);
      // console.log(values);
      await Contact(values);
      console.log("Data saved:");
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full px-1 mt-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-8 lg:gap-12 gap-5">
            <ContCustominput
              name="fullname"
              control={form.control}
              placeholder="Full name"
              label="Full Name"
            />
            <ContCustominput
              name="email"
              control={form.control}
              placeholder="joy@resuma.ai.com"
              label="Email Address"
            />
            <ContCustominput
              name="phoneno"
              control={form.control}
              placeholder="+91-9912345678"
              label="Phone Number"
            />
            <ContCustominput
              name="linkedin"
              control={form.control}
              placeholder="https://linkdin.com/user_name"
              label="Linkedin URL"
            />
            <ContCustominput
              name="portfolio"
              control={form.control}
              placeholder="https://portfolio.my"
              label="Portfolio URL"
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select your Country</FormLabel>
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
                          {contrary.map((cont) => (
                            <SelectItem key={cont.value} value={cont.value}>
                              {cont.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <ContCustominput
              name="state"
              control={form.control}
              placeholder="Maharashtra"
              label="State"
            />
            <ContCustominput
              name="cite"
              control={form.control}
              placeholder="Mumbai"
              label="City"
            />
          </div>
          <Button
            className="mt-8 md:w-auto lg:w-auto w-full bg-[#9254cc] hover:bg-[#9254cc]/90"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                Loading... <Loader2 className="animate-spin ml-2" />
              </>
            ) : (
              <>Save info</>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
