import React from 'react';
import Image from "next/image";

export default function Header(){
  return (
    <header className="w-full flex justify-center items-center py-[50px]">
        <div className="h-[75px] bg-[#1E1E1E] border border-[#434343] rounded-xl px-[12.5px] flex gap-[12.5px] justify-left items-center">
            <Image
                src="/imgs/logo.png"
                width={50}
                height={50}
                alt="Cliqk Studio Logo"
            />
            <a className="font-bold text-2xl">Cliqk Studio</a>
        </div>
    </header>
  );
};