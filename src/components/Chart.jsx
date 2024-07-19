import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns"; // Import the date adapter

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  TimeScale
);

const Chart = ({ data, options }) => {
  const chartRef = React.useRef(null);

  React.useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current;
      const gradient = chart.ctx?.createLinearGradient(0, 0, 0, chart.height);
      gradient.addColorStop(0, "rgba(255,0,128,0.4)");
      gradient.addColorStop(1, "rgba(255,0,128,0)");

      chart.data.datasets[0].backgroundColor = gradient;
      chart.update();
    }
  }, [data]);

  return (
    <div className="bg-bgMain my-10 text-secondary text-xs p-6 w-[972px]">
      <div className="mb-6 text-white text-xs font-semibold">
        <button className="rounded-s-md border-y border-l border border-borderMain py-1.5 px-3 bg-[#4F494C]">
          Balance
        </button>
        <button className="rounded-e-md border-y border-r border border-borderMain py-1.5 px-3 bg-[#252223]">
          Daily PL
        </button>
      </div>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default Chart;
