"use client"; 
import React, { useState, useEffect } from 'react';
import Image from 'next/image'; 
import { FaChartBar, FaSignOutAlt } from "react-icons/fa";
import HomeIcon from "../atoms/icons/homeIcon";
import BoltIcon from "../atoms/icons/boltIcon";
import UserIcon from '../atoms/icons/userIcon';
import ComputerIcon from '../atoms/icons/computerIcon';
import {  useRouter } from 'next/navigation'; 

function SideNavBar() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const router = useRouter();

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("sideNavToggle", { detail: open }));
  }, [open]);
  const handleMenuClick = (route: string) => {
    setSelected(route);
    if (route === '/home/devices' || route === '/home/dashboard') {
      router.push(route); 
    } else {
      setSelected(route);
    }
  };  
  return (
    <div 
      onMouseEnter={() => setOpen(true)} 
      onMouseLeave={() => setOpen(false)} 
      className={`fixed top-0 left-0 h-screen bg-white shadow-md p-2 
        ${open ? "w-72" : "w-20"} transition-all duration-500 flex flex-col`}
    >
      <div className="flex items-center h-20 gap-2">
        <Image
          src="/images/pngwing.com.png"
          alt="Logo"
          width={70}
          height={80}
          className={`${!open && "rotate-[360deg]"} transition-all duration-500`}
        />
        {open && (
          <h2 className="text-amber-400 font-bold text-4xl pt-2 transition-opacity duration-350">
            Lumina
          </h2>
        )}
      </div>

      <ul className="mt-4 flex-grow">
        {[
          { title: "Home", icon: <HomeIcon />, route: "/home/dashboard" },
          { title: "Energy", icon: <BoltIcon/>, route: "#" },
          { title: "Devices", icon: <ComputerIcon />, route: "/home/devices" },
          { title: "Reports", icon: <FaChartBar />, route: "#" },
          { title: "User", icon: <UserIcon />, route: "#" },
        ].map((menu, index) => (
          <li key={index} 
          onClick={() => handleMenuClick(menu.route)} 
          className={`flex items-center gap-8 p-3 text-black 
              hover:bg-amber-400 rounded-md cursor-pointer transition-all duration-300 hover:text-white 
              ${!open && "justify-center -ml-2"} ${selected === menu.route && "bg-amber-400"}`}
          >
            <span className="text-2xl flex-shrink-0">{menu.icon}</span>
            <span className={`absolute left-16 text-lg font-bold transition-opacity duration-350 
              ${open ? "opacity-100" : "opacity-0"}`}
            >
              {menu.title}
            </span>
          </li>
        ))}
      </ul>

      <ul>
        <li className={`flex items-center gap-8 p-3 text-black 
            hover:bg-amber-400 rounded-md cursor-pointer transition-all duration-300 hover:text-white 
            ${!open && "justify-center -ml-2"}`}
        >
          <span className="text-2xl flex-shrink-0"><FaSignOutAlt /></span>
          <span className={`absolute left-16 text-lg font-bold transition-opacity duration-350 
            ${open ? "opacity-100" : "opacity-0"}`}
          >
            Log out
          </span>
        </li>
      </ul>
    </div>
  );
}

export default SideNavBar;
