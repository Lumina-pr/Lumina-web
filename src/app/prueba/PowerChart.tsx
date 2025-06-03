import React, { useRef, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface PowerChartProps {
  messages: {
    current: number;
    voltage: number;
    timestamp?: Date;
    power?: number;
  }[];
}

const PowerChart: React.FC<PowerChartProps> = ({ messages }) => {
  const chartRef = useRef<ChartJS<"line">>(null);

  // Format time for x-axis
  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  // Prepare data for the chart
  const chartData: ChartData<"line"> = {
    labels: messages.map((msg) =>
      msg.timestamp ? formatTime(msg.timestamp) : ""
    ),
    datasets: [
      {
        label: "Potencia (Watts)",
        data: messages.map((msg) => msg.power || msg.current * msg.voltage),
        borderColor: "#e3c20c",
        backgroundColor: "rgba(227, 194, 12, 0.2)",
        tension: 0.4,
        pointRadius: 2,
        pointBackgroundColor: "#4F46E5",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: "Hora",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Potencia (Watts)",
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Consumo de Potencia en Tiempo Real",
      },
    },
  };

  // Scroll to latest data point when new data arrives
  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.update();
    }
  }, [messages]);

  return (
    <div className="w-full h-[400px]">
      <Line ref={chartRef} options={options} data={chartData} />
    </div>
  );
};

export default PowerChart;
