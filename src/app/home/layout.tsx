import React from "react";
import SideNavBar from "../sideNavBar/page";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen">
        <SideNavBar />

        <main className="flex-1 overflow-auto">
            {children}
        </main>
        </div>
    );
}
