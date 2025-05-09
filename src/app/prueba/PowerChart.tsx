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
        label: "Power (Watts)",
        data: messages.map((msg) => msg.power || msg.current * msg.voltage),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        tension: 0.4,
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
          text: "Time",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Power (Watts)",
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Real-time Power Consumption",
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
    <div style={{ height: "400px", width: "100%" }}>
      <Line ref={chartRef} options={options} data={chartData} />
    </div>
  );
};

export default PowerChart;
