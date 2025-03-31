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
        <div className="p-3 bg-white rounded-lg shadow-md flex flex-col items-center w-36">

            <div className="mt-2 flex items-center gap-2 py-2">
                <span className={`text-sm font-semibold ${checked ? "text-yellow-500" : "text-gray-400"}`}>
                    {checked ? "On" : "Off"}
                </span>
                <input 
                    type="checkbox" 
                    id={`toggle-${name}`} 
                    checked={checked} 
                    onChange={() => setChecked(!checked)} 
                    className="peer hidden"
                />
                <label
                    htmlFor={`toggle-${name}`}
                    className="w-6 h-6 flex items-center justify-center border-2 border-gray-400 rounded-lg cursor-pointer 
                    peer-checked:border-yellow-500 peer-checked:bg-yellow-500 peer-checked:before:content-['✔'] 
                    peer-checked:before:text-white peer-checked:before:text-xl"
                ></label>
            </div>

            <div className={` text-3xl ${checked ? "text-yellow-500" : "text-gray-400"}`}>
                {icon}
            </div>
            <span className={`text-lg font-semibold ${checked ? "text-yellow-500" : "text-gray-400"}`}>
                {name}
            </span>

        </div>
    );
};

export default DeviceCard;
