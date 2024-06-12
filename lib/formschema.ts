import { z } from "zod";

// Form Schema
export const formSchema = z.object({
  resumename: z.string().min(2).max(50).nonempty("Resume name is required"),
  domain: z.string().nonempty("Domain is required"),
  experience: z.string().nonempty("Experience is required"),
});
