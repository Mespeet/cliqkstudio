import React from 'react';
import Image from "next/image";

export default function Hero(){
  return (
    <div className="text-center relative flex flex-col items-center">
        <h1 className="font-bold text-8xl bg-clip-text text-transparent bg-gradient-to-br from-[#ffffff] via-[#8980F5] via-82% to-[#C56DC2]">Your All-In-One
        Developer Toolkit</h1>
        <div className="relative inline-block">
            <Image
                src="/imgs/screen.png"
                width={1704}
                height={1521}
                alt="Cliqk Studio Gateway screen"
            />
            <div className="absolute bottom-[200px] -left-[200px] w-[48rem] h-[48rem] bg-[#8980F5] rounded-full filter blur-3xl opacity-20 -z-50"></div>
            <div className="absolute bottom-[200px] -right-[200px] w-[48rem] h-[48rem] bg-[#C56DC2] rounded-full filter blur-3xl opacity-20 -z-50"></div>
        </div>
    </div>
  );
};