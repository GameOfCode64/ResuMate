"use server";
import { db } from "@/lib/prisma";
import { getAuth } from "@clerk/nextjs/server";

interface CreateResumeParams {
  resumename: string;
  domain: string;
  experience: string;
  userId: string;
}

export const createResume = async (params: CreateResumeParams) => {
  const { resumename, domain, experience, userId } = params;

  try {
    let user = await db.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      user = await db.user.create({
        data: {
          id: userId,
        },
      });
    }

    // Create the resume
    const resume = await db.resume.create({
      data: {
        title: resumename,
        userId,
      },
    });

    return resume;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
};
