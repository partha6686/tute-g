import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Exclusive from "@/components/Exclusive";
import Lectures from "@/components/Lectures";
import Watched from "@/components/Watched";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-slate-950">
      <Navbar />
      <Watched />
      <Lectures />
      <Exclusive />
    </main>
  );
}
