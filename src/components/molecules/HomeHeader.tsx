import React from "react";
import Title from "../atoms/Title";

const HomeHeader: React.FC = () => {
    return (
        <header className="flex justify-between items-center">
            <Title/>

            <nav className="flex space-x-8 text-gray-700 font-medium">
                <a href="#" className="hover:text-yellow-500">How it Work</a>
                <a href="#" className="hover:text-yellow-500">MoreInfo</a>
                <a href="#" className="hover:text-yellow-500">Why Choose Us</a>
                <a href="#" className="hover:text-yellow-500">Testimonial</a>
            </nav>
        </header>
    );
};

export default HomeHeader;
