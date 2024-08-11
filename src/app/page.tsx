import Image from "next/image";

import Header from "@/app/components/Header"
import Hero from "@/app/components/Hero"

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex lg:flex-col">
        <Hero />
      </div>
    </main>
  );
}
