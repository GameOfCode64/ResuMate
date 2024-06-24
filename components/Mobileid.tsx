"use client";
import { TopNavoptionLink } from "@/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Contact from "@/components/Forms/contact-form";
import Experience from "@/components/Forms/experience-form";
import Projects from "@/components/Forms/projects-form";
import Education from "@/components/Forms/education-form";
import Certipication from "@/components/Forms/certipications-form";
import Course from "@/components/Forms/course-form";
import Skills from "@/components/Forms/skill-form";
import Description from "@/components/Forms/descripation-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const Mobileid = ({
  resumename,
  resumeid,
}: {
  resumename: string;
  resumeid: string;
}) => {
  const [value, setvalue] = useState("contact");
  const handleChange = (value: string) => {
    setvalue(value);
  };
  return (
    <Tabs defaultValue="contact" value={value} className="w-full h-full">
      <div className="md:mb-32 lg:mb-12 mb-4">
        {/* for Mobile*/}
        <div className="lg:hidden block ">
          <Select defaultValue={value} onValueChange={handleChange}>
            <SelectTrigger className="focus:ring-1 focus:ring-[#9254cc]">
              <SelectValue placeholder="Select...." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {TopNavoptionLink.map((exp) => (
                  <SelectItem key={exp.href} value={exp.href}>
                    {exp.title}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <TabsContent value="contact">
        <Contact resumeId={resumeid} />
      </TabsContent>
      <TabsContent value="experience">
        <Experience resumeId={resumeid} />
      </TabsContent>
      <TabsContent value="project">
        <Projects resumeId={resumeid} />
      </TabsContent>
      <TabsContent value="education">
        <Education resumeId={resumeid} />
      </TabsContent>
      <TabsContent value="certipications">
        <Certipication resumeId={resumeid} />
      </TabsContent>
      <TabsContent value="coures">
        <Course resumeId={resumeid} />
      </TabsContent>
      <TabsContent value="skills">
        <Skills resumeId={resumeid} />
      </TabsContent>
      <TabsContent value="description">
        <Description resumeId={resumeid} />
      </TabsContent>
      <TabsContent value="preview">preview</TabsContent>
    </Tabs>
  );
};

export default Mobileid;
