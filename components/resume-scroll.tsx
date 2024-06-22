"use client";
import { TopNavoptionLink } from "@/constants";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Contact from "./Forms/contact-form";
import Experience from "./Forms/experience-form";

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
              <Experience />
            </TabsContent>
            <TabsContent value="project">project</TabsContent>
            <TabsContent value="education">education</TabsContent>
            <TabsContent value="certipications">certipications</TabsContent>
            <TabsContent value="coures">coures</TabsContent>
            <TabsContent value="designation">designation</TabsContent>
            <TabsContent value="skills">skills</TabsContent>
            <TabsContent value="description">description</TabsContent>
            <TabsContent value="preview">preview</TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Scroll;
