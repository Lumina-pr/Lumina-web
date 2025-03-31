"use client"; 
import React, { useState } from 'react';
import Image from 'next/image'; 
import {  FaChartBar, FaSignOutAlt } from "react-icons/fa";
import HomeIcon from "../atoms/icons/homeIcon";
import BoltIcon from "../atoms/icons/boltIcon";
import UserIcon from '../atoms/icons/userIcon';
import ComputerIcon from '../atoms/icons/computerIcon';

function Page() {
  const [open, setOpen] = useState(false);

  const menuList = [
    { title: "Home", icon: <HomeIcon /> },
    { title: "Energy", icon: <BoltIcon/> },
    { title: "Devices", icon: <ComputerIcon /> },
    { title: "Reports", icon: <FaChartBar /> },
    { title: "User", icon: <UserIcon /> },
    { title: "Log out", icon: <FaSignOutAlt/>, gap: true },
  ];

  return (
    <div className="flex">
      <div
        onMouseEnter={() => setOpen(true)} 
        onMouseLeave={() => setOpen(false)} 
        className={`${open ? 'w-72' : 'w-20'} transition-all duration-500 p-2 min-h-screen relative shadow-md bg-white pr-3 flex flex-col`}
      >
        <div className="flex items-center h-20 gap-2">
          <Image
            src="/images/pngwing.com.png"
            alt="Logo"
            width={70}
            height={80}
            className={`${!open && "rotate-[360deg]"} transition-all duration-500`}
          />
          {open ? (
            <h2 className={`text-amber-400 font-bold text-4xl pt-2 transition-opacity duration-350 ${
              open ? "opacity-100" : "opacity-0"}`}>Lumina</h2>
          ) : null}
        </div>
        <ul className="mt-10 ml-2 flex-grow">
          {menuList.map((menu, index) => (
            <li
              key={index}
              className={`flex items-center gap-8 p-3 text-black hover:bg-amber-400 rounded-md cursor-pointer ${
                !open && "justify-center -ml-2"
              } transition-all duration-300 hover:text-white ${
                menu.gap ? "mt-52" : "mt-2"
              }`}
            >
               <span className="text-2xl flex-shrink-0">{menu.icon}</span>
              <span
                className={`absolute left-16 text-lg font-bold transition-opacity duration-350 ${
                  open ? "opacity-100" : "opacity-0"
                }`}
              >
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Page;