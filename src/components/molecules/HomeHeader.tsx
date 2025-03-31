"use client";

import React, { useState } from "react";
import Title from "../atoms/TitleLumina";
import { FaBars } from "react-icons/fa";

const HomeHeader: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="flex justify-between items-center py-4">
            <Title />

            <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
                <a href="#" className="hover:text-yellow-500">How it Works</a>
                <a href="#" className="hover:text-yellow-500">More Info</a>
                <a href="#" className="hover:text-yellow-500">Why Choose Us</a>
                <a href="#" className="hover:text-yellow-500">Testimonial</a>
            </nav>

            <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
                <FaBars size={24} />
            </button>

            {menuOpen && (
                <div className="absolute top-16 right-6 bg-white shadow-lg p-4 rounded-md flex flex-col space-y-2">
                    <a href="#" className="hover:text-yellow-500">How it Works</a>
                    <a href="#" className="hover:text-yellow-500">More Info</a>
                    <a href="#" className="hover:text-yellow-500">Why Choose Us</a>
                    <a href="#" className="hover:text-yellow-500">Testimonial</a>
                </div>
            )}
        </header>
    );
};

export default HomeHeader;
