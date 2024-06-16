"use server";
import { db } from "@/lib/prisma";
import { z } from "zod";

const contactSchema = z.object({
  fullname: z.string(),
  email: z.string().email(),
  phoneno: z.string(),
  linkedin: z.string(),
  portfolio: z.string(),
  country: z.string(),
  state: z.string(),
  cite: z.string(),
  resumeId: z.string(),
});

export async function Contact(data: any) {
  const {
    fullname,
    email,
    phoneno,
    linkedin,
    portfolio,
    country,
    state,
    cite,
    resumeId,
  } = contactSchema.parse(data);

  try {
    const contact = await db.contact.findUnique({
      where: {
        id: resumeId,
      },
    });

    if (contact === null) {
      const createContact = await db.contact.create({
        data: {
          fullname,
          email,
          phoneno,
          linkedin,
          portfolio,
          country,
          state,
          cite,
          resumeId,
        },
      });
      return createContact;
    } else {
      const updatedContact = await db.contact.update({
        where: { id: resumeId },
        data: {
          fullname,
          email,
          phoneno,
          linkedin,
          portfolio,
          country,
          state,
          cite,
        },
      });
      return updatedContact;
    }
  } catch (error) {
    console.error("Error in contact form:", error);
    throw new Error("Internal Server Error");
  }
}
