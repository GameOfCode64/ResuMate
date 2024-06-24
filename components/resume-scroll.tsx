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

const Scroll = ({
  resumename,
  resumeid,
}: {
  resumename: string;
  resumeid: string;
}) => {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-center p-0 py-2">
        <div className="flex w-full md:px-9 px-3 items-center">
          <Tabs defaultValue="contact" className="w-full h-full">
            <div className="md:mb-32 lg:mb-12 mb-4">
              <TabsList className="gap-5 w-full bg-white md:flex-wrap md:flex-1 hidden  md:flex lg:flex">
                <p className="px-4 py-1 font-semibold rounded-md bg-[#0002] text-zinc-900 text-sm cursor-pointer">
                  {resumename}
                </p>
                {TopNavoptionLink.map((link) => (
                  <TabsTrigger
                    value={link.href}
                    key={link.href}
                    className="data-[state=active]:bg-[#9254cc] data-[state=active]:text-white"
                  >
                    {link.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            <TabsContent value="contact" className="w-full">
              <Contact resumeId={resumeid} />
            </TabsContent>
            <TabsContent value="experience" className="mt-8">
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
        </div>
      </div>
    </>
  );
};

export default Scroll;
