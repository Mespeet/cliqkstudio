import Image from "next/image";

import Header from "@/app/components/Header"
import Hero from "@/app/components/Hero"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-12">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex lg:flex-col">
        <Header />
        <Hero/>
      </div>
    </main>
  );
}
