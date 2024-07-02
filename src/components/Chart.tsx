import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  ArcElement,
} from "chart.js";

import { Bar, Doughnut,Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const months = ["January", "February", "March", "April", "May", "June", "July"];

interface BarChartProps {
  data_1: number[];
  data_2: number[];
  title_1: string;
  title_2: string;
  bgColor_1: string;
  bgColor_2: string;
  horizontal?: boolean;
  labels?: string[];
}

export function Barchart({
  data_1,
  data_2,
  title_1,
  title_2,
  bgColor_1,
  bgColor_2,
  labels = months,
  horizontal = false,
}: BarChartProps) {
  const options: ChartOptions<"bar"> = {
    responsive: true,
    indexAxis: horizontal ? "y" : "x",
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const data: ChartData<"bar", number[], string> = {
    labels,
    datasets: [
      {
        label: title_1,
        data: data_1,
        backgroundColor: bgColor_1,
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
      {
        label: title_2,
        data: data_2,
        backgroundColor: bgColor_2,
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
interface DoughnutChartProps {
  data: number[];
  labels: string[];
  backgroundColor: string[];
  cutout?: number | string;
  legends?: boolean;
  offset?: number[];
}

export const DoughnutChart = ({
  data,
  labels,
  backgroundColor,
  cutout,
  legends = true,
  offset,
}: DoughnutChartProps) => {
  const DoughnutChartData: ChartData<"doughnut", number[], string> = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderWidth: 0,
        offset,
      },
    ],
  };
  
  const DoughnutChartOptions: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        display: legends,
        position: "bottom",
        labels: {
          padding: 40,
        },
      },
    },
    cutout,
  };
  
  return <Doughnut data={DoughnutChartData} options={DoughnutChartOptions} />;
};

interface PieChartProps {
  data: number[];
  labels: string[];
  backgroundColor: string[];
  offset?: number[];
}
export const PieChart = ({
  data,
  labels,
  backgroundColor,
  offset,
}: PieChartProps) => {
  const PieChartData: ChartData<"pie", number[], string> = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderWidth: 0,
        offset,
      },
    ],
  };

  const PieChartOptions: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Pie data={PieChartData} options={PieChartOptions} />;
};
