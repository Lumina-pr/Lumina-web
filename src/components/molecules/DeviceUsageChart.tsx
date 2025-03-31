"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title as ChartTitle, Tooltip, Legend, PointElement } from "chart.js";
import ChartContainer from "../atoms/ChartContainer";
import Title from "../atoms/Title";
import { FaWifi, FaLightbulb, FaWind } from "react-icons/fa";

ChartJS.register(CategoryScale, LinearScale, LineElement, ChartTitle, Tooltip, Legend, PointElement);

interface DeviceUsageChartProps {
    name: string;
    dataPoints: number[];
}

const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
        case "wifi":
            return <FaWifi className="text-yellow-500 text-3xl" />;
        case "luz":
            return <FaLightbulb className="text-yellow-500 text-3xl" />;
        case "purificador":
            return <FaWind className="text-yellow-500 text-3xl" />;
        default:
            return null;
    }
};

const DeviceUsageChart: React.FC<DeviceUsageChartProps> = ({ name, dataPoints }) => {
    const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                data: dataPoints,
                borderColor: "rgba(255, 165, 0, 1)",
                backgroundColor: "rgba(255, 165, 0, 0.2)",
                fill: true,
                pointBackgroundColor: "rgba(255, 165, 0, 1)"
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
        }
    };

    return (
        <ChartContainer>
            <div className="flex items-center gap-2 p-1">
                {getIcon(name)}
                <Title text={name} className=" text-yellow-500 font-semibold" />
            </div>
            <Line data={data} options={options} />
        </ChartContainer>
    );
};

export default DeviceUsageChart;
