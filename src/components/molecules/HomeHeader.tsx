"use client";

import React, { useState } from "react";
import Title from "../atoms/TitleLumina";
import { FaBars, FaTimes } from "react-icons/fa";

const HomeHeader: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="flex justify-between items-center py-4 relative">
            <Title />

            <nav className="hidden md:flex space-x-6 lg:space-x-8 text-gray-700 font-medium">
                <a href="#" className="hover:text-yellow-500 transition-colors">How it Works</a>
                <a href="#" className="hover:text-yellow-500 transition-colors">More Info</a>
                <a href="#" className="hover:text-yellow-500 transition-colors">Why Choose Us</a>
                <a href="#" className="hover:text-yellow-500 transition-colors">Testimonial</a>
            </nav>

            <button 
                className="md:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors" 
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {menuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white shadow-lg p-4 text-gray-500 rounded-md flex flex-col space-y-3 min-w-[200px] z-50">
                    <a href="#" className="hover:text-yellow-500 transition-colors py-1">How it Works</a>
                    <a href="#" className="hover:text-yellow-500 transition-colors py-1">More Info</a>
                    <a href="#" className="hover:text-yellow-500 transition-colors py-1">Why Choose Us</a>
                    <a href="#" className="hover:text-yellow-500 transition-colors py-1">Testimonial</a>
                </div>
            )}
        </header>
    );
};

export default HomeHeader;
