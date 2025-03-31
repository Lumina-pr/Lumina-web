"use client";
import React, { useState, useEffect } from "react";
import SideNavBar from "../sideNavBar/page";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        const handleNavToggle = (e: Event) => {
            const customEvent = e as CustomEvent<boolean>; 
            setIsNavOpen(customEvent.detail); 
        };

        window.addEventListener("sideNavToggle", handleNavToggle);

        return () => {
            window.removeEventListener("sideNavToggle", handleNavToggle);
        };
    }, []);

    return (
        <div className="flex min-h-screen">
            <SideNavBar />

            <main className={`flex-1 transition-all duration-500 ${isNavOpen ? "ml-72" : "ml-20"}`}>
                {children}
            </main>
        </div>
    );
}
