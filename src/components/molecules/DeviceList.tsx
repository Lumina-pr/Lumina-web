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

        <div>
            <h1 className="text-2xl font-semibold text-gray-800 pb-2">Hogar de Luis</h1>

            <div className="grid grid-cols-6 gap-1 ">
                {devices.map((device, index) => (
                    <DeviceCard key={index} name={device.name} icon={device.icon} isOn={device.isOn} />
                ))}

                <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center justify-center w-36 h-36 border border-gray-300">
                    <FaPlus className="text-yellow-500 text-2xl" />
                    <span className="text-yellow-500 font-sans text-lg">Añadir nuevo</span>
                </div>
            </div>
        </div>

        
    );
};

export default DeviceList;
