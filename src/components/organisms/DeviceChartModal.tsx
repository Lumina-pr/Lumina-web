"use client";

import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import ModalBase from "../molecules/ModalBase";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

type Device = {
  id: number;
  name: string;
};

type Props = {
  device: Device;
  onClose: () => void;
};

const DeviceChartModal: React.FC<Props> = ({ device, onClose }) => {
  const [voltageData, setVoltageData] = useState<number[]>([5, 8, 10, 4]);

  const getNewVoltageData = () => {
    const newVoltage = Math.floor(Math.random() * 15) + 1;
    return newVoltage;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setVoltageData((prevData) => {
        // Generamos un nuevo dato aleatorio
        const newVoltage = getNewVoltageData();
        return [...prevData.slice(1), newVoltage];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const data = {
    labels: ["Dato 1", "Dato 2", "Dato 3", "Dato 4"],
    datasets: [
      {
        label: `${device.name} - Voltaje`,
        data: voltageData,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.3,
      },
    ],
  };

  return (
    <ModalBase onClose={onClose}>
      <div className="">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">
          Gráfica de {device.name}
        </h3>
        <div className="h-38">
          <Line data={data} />
        </div>
      </div>
    </ModalBase>
  );
};

export default DeviceChartModal;
