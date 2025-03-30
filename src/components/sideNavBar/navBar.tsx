"use client"; 
import React, { useState } from 'react';
import Image from 'next/image'; 
import { FaHome, FaBolt, FaSignal, FaUser, FaSignOutAlt } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
function Page() {
  const [open, setOpen] = useState(true);
  const menuList = [
    { title: "Dashboard", icon: <FaHome /> },
    { title: "Energy", icon: <FaBolt /> },
    { title: "Devices", icon: <MdComputer/> }, 
    { title: "Reports", icon: <FaSignal /> }, 
    { title: "User", icon: <FaUser /> },
    { title: "Log out", icon: <FaSignOutAlt />, gap: true }, 

  ];
  return (
    <div className='flex'>
      <div className={`${open ? 'w-72' : 'w-20'} transition-all duration-500 p-2 h-screen relative shadow-md
        
        bg-white`}>
        <Image src="/images/control.png" alt='control'width={25} height={25}
        onClick={()=> setOpen(!open)}
        className={`absolute -right-3 top-9 rounded-full transition-all duration-500 bg-amber-400 border-2 border-amber-400 ${!open && "rotate-180"}`}/> 
        <div className='flex items-center h-20 gap-2'>
          <Image 
            src="/images/pngwing.com.png" 
            alt="Logo" 
            width={70} 
            height={80} 
            className={`${!open && "rotate-[360deg]"} transition-all duration-500`}
          />
          {open?<h2 className='text-amber-400 font-bold text-4xl pt-2'>Lumina</h2>:null}
        </div>
        <ul className='mt-10 ml-2'>
          {menuList.map((menu, index) =>(
            <li 
            key={index} 
            className={`flex items-center gap-8 p-3 text-black hover:bg-amber-400 rounded-md cursor-pointer  ${!open && "justify-center -ml-2"}
            transition-all duration-300 hover:text-white ${menu.gap?"mt-52":"mt-2"}`  }
            >
              <span className="text-2xl group-hover:scale-110">{menu.icon}</span>
              {open ?<span className="text-lg font-bold hover:font-bold">{menu.title}</span>:null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Page;
