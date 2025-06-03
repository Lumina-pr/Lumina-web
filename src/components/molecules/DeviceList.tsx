import React from "react";
import DeviceCard from "../atoms/DeviceCard";
import { FaLightbulb, FaTv, FaTemperatureHigh, FaWifi, FaWind, FaPlus } from "react-icons/fa";

const devices = [
    { name: "Purificador", icon: <FaWind />, isOn: true },
    { name: "Android TV", icon: <FaTv />, isOn: false },
    { name: "Temperatura", icon: <FaTemperatureHigh />, isOn: false },
    { name: "Wifi", icon: <FaWifi />, isOn: true },
    { name: "Luces", icon: <FaLightbulb />, isOn: true },
];

const DeviceList: React.FC = () => {
    return (
        <div className="w-full ">
            <h1 className="text-xl font-semibold text-gray-800 pb-3">Hogar de Luis</h1>

            <div className="grid grid-cols-[repeat(auto-fit,110px)] gap-2">
                {devices.map((device, index) => (
                    <DeviceCard key={index} name={device.name} icon={device.icon} isOn={device.isOn} />
                ))}

                <div className="w-[110px] h-[120px] bg-white rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition">
                    <FaPlus className="text-yellow-500 text-xl" />
                    <span className="text-yellow-500 text-sm font-medium">Añadir</span>
                </div>
            </div>
        </div>
    );
};

export default DeviceList;
