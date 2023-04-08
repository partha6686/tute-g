import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Exclusive from "@/components/Exclusive";
import Lectures from "@/components/Lectures";
import Watched from "@/components/Watched";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data, prog, watched }) {
  return (
    <main className="bg-slate-950">
      <Navbar />
      <Watched data={watched} />
      <Lectures initdata={data} />
      <Exclusive data={prog} />
      <Footer />
    </main>
  );
}
export async function getServerSideProps(context) {
  const [dataRes, progRes, watchRes] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_HOST}getlectures/Mathematics`),
    fetch(`${process.env.NEXT_PUBLIC_HOST}getlectures/Programming`),
    fetch(`${process.env.NEXT_PUBLIC_HOST}watched`),
  ]);
  const [data, prog, watched] = await Promise.all([
    dataRes.json(),
    progRes.json(),
    watchRes.json(),
  ]);
  return {
    props: { data, prog, watched },
  };
}
