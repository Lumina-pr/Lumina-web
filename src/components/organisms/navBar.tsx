"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaChartBar, FaSignOutAlt } from "react-icons/fa";
import HomeIcon from "../atoms/icons/homeIcon";
import BoltIcon from "../atoms/icons/boltIcon";
import UserIcon from "../atoms/icons/userIcon";
import ComputerIcon from "../atoms/icons/computerIcon";
import { useRouter } from "next/navigation";
import LogOutModal from "../organisms/LogOutModal";
import { useAuthStore } from "@/store/authStore";

function SideNavBar() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("sideNavToggle", { detail: open }));
  }, [open]);

  const handleMenuClick = (route: string) => {
    setSelected(route);
    if (
      route === "/home/devices" ||
      route === "/home/dashboard" ||
      route === "/home/user"
    ) {
      router.push(route);
    }
  };

  const handleLogout = () => {
    logout();
    setShowLogoutModal(false);
    router.push("/");
  };

  const menuItems = [
    { title: "Home", icon: <HomeIcon />, route: "/home/dashboard" },
    { title: "Energy", icon: <BoltIcon />, route: "#" },
    { title: "Devices", icon: <ComputerIcon />, route: "/home/devices" },
    { title: "Reports", icon: <FaChartBar />, route: "#" },
    { title: "User", icon: <UserIcon />, route: "/home/user" },
  ];

  // Filtrar los items para móvil
  const mobileMenuItems = menuItems.filter(
    (item) => item.title === "Home" || item.title === "Devices" || item.title === "User"
  );

  return (
    <>
      {/* Sidebar solo visible en pantallas md+ */}
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className={`hidden md:flex fixed top-0 left-0 h-screen bg-white shadow-md p-2 
          ${open ? "w-72" : "w-20"} transition-all duration-500 flex-col`}
      >
        <div className="flex items-center h-20 gap-2">
          <Image
            src="/images/pngwing.com.png"
            alt="Logo"
            width={70}
            height={80}
            className={`${
              !open && "rotate-[360deg]"
            } transition-all duration-500`}
          />
          {open && (
            <h2 className="text-amber-400 font-bold text-4xl pt-2 transition-opacity duration-350">
              Lumina
            </h2>
          )}
        </div>

        <ul className="mt-4 flex-grow">
          {menuItems.map((menu, index) => (
            <li
              key={index}
              onClick={() => handleMenuClick(menu.route)}
              className={`flex items-center gap-8 p-3 text-black 
                hover:bg-amber-400 rounded-md cursor-pointer transition-all duration-300 hover:text-white 
                ${!open && "justify-center -ml-2"} ${
                selected === menu.route && "bg-amber-400"
              }`}
            >
              <span className="text-2xl flex-shrink-0">{menu.icon}</span>
              <span
                className={`absolute left-16 text-lg font-bold transition-opacity duration-350 
                ${open ? "opacity-100" : "opacity-0"}`}
              >
                {menu.title}
              </span>
            </li>
          ))}
        </ul>

        <ul>
          <li
            onClick={() => setShowLogoutModal(true)}
            className={`flex items-center gap-8 p-3 text-black 
              hover:bg-amber-400 rounded-md cursor-pointer transition-all duration-300 hover:text-white 
              ${!open && "justify-center -ml-2"}`}
          >
            <span className="text-2xl flex-shrink-0">
              <FaSignOutAlt />
            </span>
            <span
              className={`absolute left-16 text-lg font-bold transition-opacity duration-350 
              ${open ? "opacity-100" : "opacity-0"}`}
            >
              Log out
            </span>
          </li>
        </ul>
      </div>

      {/* Navbar inferior solo en móviles */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md grid grid-cols-4 p-2">
        {mobileMenuItems.map((menu, index) => (
          <button
            key={index}
            onClick={() => handleMenuClick(menu.route)}
            className={`flex flex-col items-center ${
              selected === menu.route ? "text-amber-400" : "text-black"
            } hover:text-amber-400 transition-colors`}
          >
            <span className="text-2xl">{menu.icon}</span>
            <span className="text-xs">{menu.title}</span>
          </button>
        ))}
        <button
          onClick={() => setShowLogoutModal(true)}
          className="flex flex-col items-center text-black hover:text-amber-400 transition-colors"
        >
          <FaSignOutAlt className="text-2xl" />
          <span className="text-xs">Log out</span>
        </button>
      </div>

      {showLogoutModal && (
        <LogOutModal
          onClose={() => setShowLogoutModal(false)}
          onConfirm={handleLogout}
        />
      )}
    </>
  );
}

export default SideNavBar;
