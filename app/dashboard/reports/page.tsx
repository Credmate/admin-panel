"use client";

import React from "react";
import { Line, Pie, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Calendar, ListFilter } from "lucide-react";

// Register all necessary Chart.js components
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

const Reports = () => {
  const lineData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Reports Resolved",
        data: [20, 30, 25, 35, 40, 50, 45, 55, 50, 60, 65, 70],
        borderColor: "#22C55E",
        tension: 0.4,
        fill: false,
      },
      {
        label: "Reports Flagged",
        data: [5, 7, 4, 6, 8, 3, 5, 4, 6, 5, 7, 3],
        borderColor: "#B02828",
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const pieData = {
    labels: ["Normal Warning", "Potential Fraud"],
    datasets: [
      {
        data: [20, 4],
        backgroundColor: ["#E3B727", "#B02828"],
        hoverBackgroundColor: ["#EAB308", "#B91C1C"],
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false
  };

  const completed = 80;
  const remaining = 100 - completed;
  const doughnutData = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: [completed, remaining],
        backgroundColor: ["#6DA52E", "#E5E7EB"],
        hoverBackgroundColor: ["#16A34A", "#D1D5DB"],
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  };

  const options = {
    rotation: -90,
    circumference: 180,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    maintainAspectRatio: false
  };

  return (
    <div className="px-5 py-6 space-y-6">
      <h1 className="text-2xl font-semibold">Resolution Rates</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Line Chart Section */}
        <div className="col-span-2 bg-white p-6 shadow-md rounded-lg h-[400px] flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-5 items-center">
              <div>
                <p className="text-lg font-medium text-[#555555]">
                  Reports Resolved
                </p>
                <h1 className="text-3xl font-semibold">263</h1>
              </div>
              <div>
                <p className="text-lg font-medium text-[#555555]">
                  Reports Flagged
                </p>
                <h1 className="text-3xl font-semibold">7</h1>
              </div>
            </div>
            <button className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-md text-gray-700">
              <span>This year</span>
              <Calendar className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Line data={lineData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>

        {/* Pie chart warning Section */}
        <div className="bg-white p-6 shadow-md rounded-lg h-[400px] flex flex-col">
          <div className="mb-4">
            <p className="text-lg font-medium">Warnings Distribution</p>
          </div>
          <div className="flex-1 flex justify-center items-center">
          <Pie data={pieData} options={pieOptions} height={100} />
          </div>
          <div className="text-sm mt-4">
            <p>
              <span className="inline-block w-6 h-1 rounded-lg bg-[#E3B727] mr-2"></span>
              Normal Warning: 20
            </p>
            <p>
              <span className="inline-block w-6 h-1 rounded-lg bg-red-500 mr-2"></span>
              Potential Fraud: 4
            </p>
          </div>
        </div>

        {/* Gauge Section */}
        <div className="bg-white px-6 py-5 shadow-md rounded-lg h-[400px] flex flex-col">
          <div className="flex items-center justify-between cursor-pointer">
            <p className="text-lg font-medium">Borrower Trust Restoration</p>
            <div className="border border-gray-300 p-1.5 rounded-lg">
              <ListFilter className=" text-gray-500" />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative">
              <Doughnut data={doughnutData} options={options} />
              <div className="absolute inset-0 top-[70px] flex items-center justify-center">
                <span className="text-4xl font-semibold">{completed}%</span>
              </div>
            </div>
          </div>

          <div className="text-sm -mt-5">
            <p>Resolved Reports: 263</p>
            <p>
              Repayment Rate: <span className="text-green-500">85%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
