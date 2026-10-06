"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-navy sticky w-full z-40 top-0 h-[80px] flex items-center justify-center">
      <div className="bg-navy w-full lg:p-[20px_35px] flex flex-col lg:flex-row items-center justify-between 2xl:container">
        <div className="w-full flex lg:w-fit items-center justify-between lg:justify-start p-[20px] lg:p-0">
          <Link href="/" aria-label="AlphaXBot home">
            <Image
              src="/images/logo.svg"
              alt="AlphaXBot"
              width={227}
              height={49}
              priority
              className="ml-[-15px] lg:ml-0 h-[40px] w-auto"
            />
          </Link>
          <button
            type="button"
            className="lg:hidden text-white text-[30px] leading-none"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "+" : "☰"}
          </button>
        </div>

        <nav
          className={`${
            open ? "left-0" : "left-[-100%]"
          } lg:left-0 fixed lg:relative transition-all top-0 h-screen lg:h-fit bg-black lg:bg-transparent w-full lg:w-fit flex flex-col lg:flex-row items-start lg:items-center space-y-[30px] p-[20px] lg:p-0 lg:space-y-0 lg:space-x-[30px] z-20`}
        >
          <div className="lg:hidden flex items-center justify-end w-full">
            <button
              type="button"
              aria-label="Close menu"
              className="rotate-45 text-[30px] text-white"
              onClick={() => setOpen(false)}
            >
              +
            </button>
          </div>
          <a href="#features" className="text-white" onClick={() => setOpen(false)}>
            Features
          </a>
          <a href="#roadmap" className="text-white" onClick={() => setOpen(false)}>
            AlphaX Whitepaper
          </a>
          <a
            href="#join"
            className="bg-accent text-white p-[8px_30px] rounded-[6px]"
            onClick={() => setOpen(false)}
          >
            Join us
          </a>
        </nav>
      </div>
    </header>
  );
}
