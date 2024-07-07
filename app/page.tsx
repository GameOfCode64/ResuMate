import HomePage from "@/components/Home";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full bg-[#05080b] h-screen">
      <Navbar />
      <HomePage />
    </div>
  );
}
