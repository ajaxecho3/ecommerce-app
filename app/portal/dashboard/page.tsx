"use client";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { data } from "@/data/data";
import { ShoppingBag } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
type Props = {};

const Page = (props: Props) => {
  const [chartData, setChartData] = useState<any>({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Sales $",
          data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgb(53, 162, 235, 0.4",
        },
      ],
    });
    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Daily Revenue",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);
  return (
    <div className=" ">
      <div className="">Dashboard </div>
      <div className="grid gap-4 py-4 lg:grid-cols-5">
        <div className="col-span-1 flex w-full justify-between rounded-lg border bg-white p-4 lg:col-span-2">
          <div className="flex w-full flex-col pb-4">
            <p className="text-2xl font-bold">$7,846</p>
            <p className="text-gray-600">Daily Revenue</p>
          </div>
          <p className="flex items-center justify-center rounded-lg bg-green-200 p-2">
            <span className="text-lg text-green-700">+18%</span>
          </p>
        </div>
        <div className="col-span-1 flex w-full justify-between rounded-lg border bg-white p-4 lg:col-span-2">
          <div className="flex w-full flex-col pb-4">
            <p className="text-2xl font-bold">$1,437,876</p>
            <p className="text-gray-600">YTD Revenue</p>
          </div>
          <p className="flex items-center justify-center rounded-lg bg-green-200 p-2">
            <span className="text-lg text-green-700">+11%</span>
          </p>
        </div>
        <div className="flex w-full justify-between rounded-lg border bg-white p-4">
          <div className="flex w-full flex-col pb-4">
            <p className="text-2xl font-bold">11,437</p>
            <p className="text-gray-600">Customers</p>
          </div>
          <p className="flex items-center justify-center rounded-lg bg-green-200 p-2">
            <span className="text-lg text-green-700">+17%</span>
          </p>
        </div>
      </div>
      <div className="z-20 grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
        <div className="relative m-auto h-[50vh] w-full rounded-lg border bg-white p-4 md:col-span-2 lg:h-[70vh]">
          <Bar data={chartData} options={chartOptions} />
        </div>
        <div className="relative col-span-1 m-auto h-[50vh] w-full overflow-scroll rounded-lg border bg-white p-4 lg:h-[70vh]">
          <h1>Recent Orders</h1>
          <ul>
            {data.map((order, id) => (
              <li
                key={id}
                className="my-3 flex cursor-pointer items-center rounded-lg bg-gray-50 p-2 hover:bg-gray-100"
              >
                <div className="rounded-lg bg-purple-100 p-3">
                  <ShoppingBag className="text-purple-800" />
                </div>
                <div className="pl-4">
                  <p className="font-bold text-gray-800">${order.total}</p>
                  <p className="text-sm text-gray-400">{order.name.first}</p>
                </div>
                <p className="absolute right-6 text-sm md:hidden lg:flex">
                  {order.date}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
