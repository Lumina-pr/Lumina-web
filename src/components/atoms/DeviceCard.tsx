"use client";

import React, { JSX, useState } from "react";

interface DeviceCardProps {
    name: string;
    icon: JSX.Element;
    isOn: boolean;
}

const DeviceCard: React.FC<DeviceCardProps> = ({ name, icon, isOn }) => {
    const [checked, setChecked] = useState(isOn);

    return (
        <div className="w-[110px] h-[120px] bg-white rounded-lg shadow-md flex flex-col items-center justify-between p-2">
            
            <div className="flex items-center justify-between w-full px-2">
                <span className={`text-xs font-semibold ${checked ? "text-yellow-500" : "text-gray-400"}`}>
                    {checked ? "On" : "Off"}
                </span>

                <div 
                    className={`w-9 h-4 flex items-center rounded-full cursor-pointer 
                        ${checked ? "bg-yellow-500" : "bg-gray-300"}`}
                    onClick={() => setChecked(!checked)}
                >
                    <div 
                        className={`w-3 h-3 bg-white rounded-full shadow-md transform duration-300 
                            ${checked ? "translate-x-5" : "translate-x-0 ml-1"}`}
                    ></div>
                </div>
            </div>

            <div className={`text-2xl ${checked ? "text-yellow-500" : "text-gray-400"}`}>
                {icon}
            </div>

            <span className={`text-sm font-semibold ${checked ? "text-yellow-500" : "text-gray-400"}`}>
                {name}
            </span>

        </div>
    );
};

export default DeviceCard;
