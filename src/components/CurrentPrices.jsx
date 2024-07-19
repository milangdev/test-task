import React, { useEffect, useState } from "react";
import axios from "axios";
import AUD from "../images/AUD.png";
import CAD from "../images/CAD.png";
import CH from "../images/CH.png";
import EUR from "../images/EUR.png";
import GBP from "../images/GBP.png";
import JP from "../images/JP.png";
import NZD from "../images/NZD.png";
import US from "../images/US.png";

const UpperArrow = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.01543 3.5C6.68129 3.50007 6.36085 3.62277 6.12461 3.84114L1.08461 8.49826C0.964272 8.60566 0.868282 8.73414 0.802247 8.87618C0.736211 9.01823 0.701453 9.17101 0.699999 9.3256C0.698545 9.48019 0.730425 9.63351 0.793779 9.77659C0.857133 9.91968 0.950692 10.0497 1.069 10.159C1.1873 10.2683 1.32798 10.3548 1.48283 10.4133C1.63768 10.4718 1.8036 10.5013 1.9709 10.5C2.1382 10.4986 2.30354 10.4665 2.45726 10.4055C2.61099 10.3445 2.75002 10.2558 2.86625 10.1446L7.01543 6.31058L11.1646 10.1446C11.4023 10.3566 11.7205 10.474 12.0509 10.4713C12.3813 10.4687 12.6973 10.3462 12.9309 10.1304C13.1645 9.91451 13.297 9.62249 13.2999 9.31722C13.3028 9.01195 13.1758 8.71785 12.9463 8.49826L7.90625 3.84114C7.67001 3.62277 7.34958 3.50007 7.01543 3.5Z"
      fill="#9CA3AF"
    />
  </svg>
);

const cardClass =
  "bg-card text-card-foreground p-4 rounded-lg max-w-md mx-auto";
const currencyPairs = [
  { flag1: AUD, flag2: US, pair: "AUDUSD", color: "red" },
  { flag1: EUR, flag2: US, pair: "EURUSD", color: "green" },
  { flag1: GBP, flag2: US, pair: "GBPUSD", color: "white" },
  { flag1: NZD, flag2: US, pair: "NZDUSD", color: "red" },
  { flag1: US, flag2: CAD, pair: "USDCAD", color: "green" },
  { flag1: EUR, flag2: CH, pair: "EURCHF", color: "white" },
  { flag1: EUR, flag2: JP, pair: "EURJPY", color: "white" },
];

const CurrentPrices = () => {
  const [prices, setPrices] = useState(null);
  const REACT_APP_API_BASE_URL = "http://13.41.72.245";
  useEffect(() => {
    fetchCurrentPrices();
  }, []);

  const fetchCurrentPrices = async () => {
    try {
      const response = await axios.get(`${REACT_APP_API_BASE_URL}/current_prices`);
      setPrices(response.data.prices?.[0]);
      console.log("response.data :: ", response.data);
    } catch (error) {
      console.error("Error fetching current prices:", error);
    }
  };

  if (!prices) {
    return <div className={cardClass}>Loading...</div>;
  }

  return (
    <div className="w-[360px]">
      <div className={"bg-bgMain p-5"}>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="flex relative">
              <img src={EUR} alt="" />
              <img src={US} className="z-10 -ml-2" alt="" />
            </div>
            <span className="text-white font-semibold">EURUSD</span>
          </div>
          <div className="flex items-center cursor-pointer gap-3">
            <span className={"text-red font-medium"}>{prices["EURUSD"]}</span>
            <UpperArrow />
          </div>
        </div>
      </div>
      <div className="bg-[#161314] border py-5 px-2.5 rounded-lg border-[#2B2B2B]">
        {currencyPairs.map(({ flag1, flag2, pair, color }) => (
          <div
            key={pair}
            className={`flex justify-between items-center py-1 px-2.5 ${
              pair === "EURUSD" && "bg-[#252223] rounded"
            }`}
          >
            <div className="flex items-center space-x-2">
              <div className="flex relative">
                <img src={flag1} alt="" />
                <img src={flag2} className="z-10 -ml-2" alt="" />
              </div>
              <span className="text-white font-semibold">{pair}</span>
            </div>
            <span className={`text-${color} font-medium`}>{prices[pair]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentPrices;
