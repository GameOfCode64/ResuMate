import { z } from "zod";

// Form Schema
export const formSchema = z.object({
  resumename: z.string().min(2).max(50).nonempty("Resume name is required"),
  domain: z.string().nonempty("Domain is required"),
  experience: z.string().nonempty("Experience is required"),
});

export const contactSchema = z.object({
  fullname: z.string().optional(),
  email: z.string().email().optional(),
  phoneno: z.string().optional(),
  linkedin: z.string().optional(),
  portfolio: z.string().optional(),
  country: z.string().optional(),
  state: z.string().optional(),
  cite: z.string().optional(),
  resumeId: z.string().optional(),
});

export const experienceSchema = z.object({
  role: z.string(),
  companyName: z.string(),
  workingDays: z.number(),
  compunyLocation: z.string(),
  descripation: z.string(),
});

export const projectSchema = z.object({
  protitle: z.string(),
  orgName: z.string(),
  workingday: z.string(),
  projectUrl: z.string(),
  descripation: z.string(),
});

export const educationSchema = z.object({
  degree: z.string(),
  collageName: z.string(),
  location: z.string(),
  passingYear: z.number(),
  gpa: z.number(),
  descripation: z.string(),
});

export const certipicationsSchema = z.object({
  title: z.string(),
  orgName: z.string(),
  complitionYear: z.number(),
  descripation: z.string(),
});

export const courseSchema = z.object({
  title: z.string(),
  orgName: z.string(),
  complitionYear: z.number(),
  descripation: z.string(),
  skillYouLearn: z.string(),
});

export const AIdescripation = z.object({
  role: z.string(),
  skill: z.string(),
});

export const skillSchema = z.object({
  skillName: z.string(),
});
export const descriptionSchema = z.object({
  description: z.string(),
});
