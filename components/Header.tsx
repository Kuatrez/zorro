"use client";

import Image from "next/image";
import { FC, useEffect, useState } from "react";

interface HeaderProps {
  setContactModal: (value: boolean) => void;
}

const Header: FC<HeaderProps> = ({ setContactModal }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-20 transition-colors duration-300 ${
        scrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <div className="p-4 container mx-auto flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          <Image
            src={"/logo.webp"}
            height={1080}
            width={1080}
            alt="Zorro - Укладка асфальта любой сложности в Пушкино"
            className="w-10"
          />
          <p className="uppercase font-bold">Zorro</p>
        </div>
        <button
          onClick={() => setContactModal(true)}
          className="bg-primary h-10 w-32 rounded-xl text-white cursor-pointer hover:bg-primary/80"
        >
          Связаться
        </button>
      </div>
    </header>
  );
};

export default Header;
1;
