import Image from "next/image";
import banner from "@/public/MyResumeHub.png";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = auth();
  if (userId) {
    redirect("/dashboard");
  }
  return (
    <div className="flex items-center relative overflow-hidden justify-normal h-screen px-3 gap-8">
      {children}
      <div className="hidden md:block lg:block w-full h-screen bg-zinc-200 pl-16  pt-8">
        <h3 className="font-[800] text-[32px] text-zinc-400 text-nowrap">
          Get your dream job using the the power of AI,
          <br /> ResuMate!
        </h3>
        <p className="text-[12px] mt-4 text-zinc-600">
          ResuMate! AI powered Resume Builder. Using ResuMate build your future,
          <br /> get your dream job ❤️
        </p>
        <div className="mt-4 w-full h-full">
          <Image
            src={banner}
            alt="login-img"
            className="w-[120%] absolute h-[750px] rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
