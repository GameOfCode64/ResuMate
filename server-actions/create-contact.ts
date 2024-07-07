"use server";
import { db } from "@/lib/prisma";

interface Prop {
  fullname: string;
  email: string;
  phoneno: string;
  linkedin: string;
  portfolio: string;
  country: string;
  state: string;
  cite: string;
}

export async function Contact(resumeId: string, data: Prop) {}
