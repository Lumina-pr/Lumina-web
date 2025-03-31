import React from "react";
import HomeHello from "../molecules/DashHello";
import HomeHelp from "../molecules/DashHelp";
import DeviceList from "../molecules/DeviceList";
import DeviceUsageChart from "../molecules/DeviceUsageChart";

const DashboardCard: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col bg-gray-100 p-4">
            <header className="flex items-start gap-4 pt-2">
                <HomeHello />
                <HomeHelp />
            </header>

            <div className="mt-4 flex-1">
                <DeviceList />
            </div>

            <div className="grid grid-cols-3 gap-4 flex-1">
                <DeviceUsageChart name="Purificador" dataPoints={[250, 400, 340, 280, 400, 450, 470]} />
                <DeviceUsageChart name="Wifi" dataPoints={[220, 280, 290, 260, 310, 370, 410]} />
                <DeviceUsageChart name="Luz" dataPoints={[280, 320, 350, 300, 370, 410, 390]} />
            </div>
        </div>
    );
};

export default DashboardCard;
