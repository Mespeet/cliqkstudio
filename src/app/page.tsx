import Image from "next/image";

import Header from "@/app/components/Header"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Header />
      </div>
    </main>
  );
}
