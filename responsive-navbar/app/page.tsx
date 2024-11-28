'use client'

import Image from "next/image";
import Link from "next/link";
import DisplayMenu from "./Components/DislayMenu";
import Logo from "./Components/My-logo-2.png";
import { useState } from "react";

export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  return (
    <nav className="flex justify-between bg-green-300 h-min-screen flex-wrap w-full">

      <div className="flex p-1 md:">
        <Image src={Logo} alt="Image" width={85} height={10} className="rounded-lg border-white border-2"></Image>
        <span className="content-center text-xl px-2 text-white sm:hidden">Mobile Mode</span>
        <span className="content-center hidden text-xl px-2 text-white sm:block">Desktop Mode</span>
      </div>


      {/* Desktop */}
      <div className="hidden sm:flex gap-12 items-center">
        <Link href='/' className="text-white hover:text-green-800 hover:font-extrabold text-2xl">Home</Link>
        <Link href='/' className="text-white hover:text-green-800 hover:font-extrabold text-2xl">About</Link>
        <Link href='/' className="text-white hover:text-green-800 hover:font-extrabold text-2xl">Contact</Link>
        <Link href='/' className="text-white hover:text-green-800 hover:font-extrabold text-2xl">Work</Link>
        <button className="py-2 px-6 m-2 text-xl font-bold border-2 border-white text-white rounded-xl hover:bg-green-700 hover:border-green-700">Hire Me</button>
      </div>

      {/* Mobile */}
      <div className="flex items-center m-1 sm:hidden">
        <DisplayMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>


      {isMenuOpen && (
        <div className="inset-0 bg-green-300 fixed flex flex-col gap-1 pl-5 pt-4 lg md:w-1/2 lg:w-full ">
          <DisplayMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <Link href="/" className="text-white hover:bg-green-400 py-2 hover:font-extrabold text-2xl">Home</Link>
          <Link href="/" className="text-white hover:bg-green-400 py-2 hover:font-extrabold text-2xl">About</Link>
          <Link href="/" className="text-white hover:bg-green-400 py-2 hover:font-extrabold text-2xl">Contact</Link>
          <Link href="/" className="text-white hover:bg-green-400 py-2 hover:font-extrabold text-2xl">Work</Link>
          <div className="border-t h-2 my-3 border-white">
            <button className="py-2 px-6 my-7 text-xl font-bold border-2 border-white text-white rounded-xl hover:bg-green-700 hover:border-green-700">Hire Me</button>
          </div>
        </div>
      )}
    </nav>
  );
}