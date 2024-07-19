import React, { useEffect, useState } from "react";
import axios from "axios";
import { DashboardHeader } from "./DashboardHeader";
import Chart from "./Chart";

const HeaderAndChart = () => {
  const [metrics, setMetrics] = useState(null);
  const [balanceData, setBalanceData] = useState(null);
  const REACT_APP_API_BASE_URL = "http://13.41.72.245";

  useEffect(() => {
    fetchMetrics();
    const interval = setInterval(() => {
      fetchMetrics();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const fetchMetrics = async () => {
    try {
      const response = await axios.get(`${REACT_APP_API_BASE_URL}/fetch_metrics`);
      setMetrics(response.data);

      const dailySummary = response.data.daily_summary || [];
      const chartLabels = dailySummary.map((summary) => summary.date);

      let runningBalance = response.data.starting_balance;
      const balanceValues = dailySummary.map((summary) => {
        runningBalance += summary.total_pl;
        return runningBalance;
      });

      setBalanceData({
        labels: chartLabels,
        datasets: [
          {
            label: "Balance",
            data: balanceValues,
            fill: true,
            backgroundColor: "rgba(255,0,128,0.2)",
            borderColor: "rgba(255,0,128,1)",
            borderWidth: 0.8,
            pointRadius: 0,
            pointHoverRadius: 0,
            pointBackgroundColor: "rgba(255,0,128,1)",
            pointBorderColor: "rgba(255,0,128,1)",
            cubicInterpolationMode: "monotone",
            tension: 0.2,
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching metrics:", error);
    }
  };

  const chartOption = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: (tooltipItems) => {
            return tooltipItems[0].label;
          },
          label: (tooltipItem) => {
            return `Balance: $${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
          tooltipFormat: "MMM dd",
          displayFormats: {
            day: "MMM dd",
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          callback: (value) => `$${value}`,
          stepSize: 5000,
        },
        beginAtZero: true,
      },
    },
  };

  if (!metrics || !balanceData) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <>
      <DashboardHeader metrics={metrics} />
      <Chart data={balanceData} options={chartOption} />
    </>
  );
};

export default HeaderAndChart;
