import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const Minus = () => (
  <svg
    width="12"
    height="2"
    viewBox="0 0 12 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.9 1L1.09998 1L10.9 1Z" fill="#898587" />
    <path
      d="M10.9 1L1.09998 1"
      stroke="#898587"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const Edit = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.02939 4.51L7.48939 4.97L2.95939 9.5H2.49939V9.04L7.02939 4.51ZM8.82939 1.5C8.70439 1.5 8.57439 1.55 8.47939 1.645L7.56439 2.56L9.43939 4.435L10.3544 3.52C10.5494 3.325 10.5494 3.01 10.3544 2.815L9.18439 1.645C9.08439 1.545 8.95939 1.5 8.82939 1.5ZM7.02939 3.095L1.49939 8.625V10.5H3.37439L8.90439 4.97L7.02939 3.095Z"
      fill="white"
    />
  </svg>
);

const Camera = () => (
  <svg
    width="12"
    height="10"
    viewBox="0 0 12 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.2 1.17648H9.3708L9.2682 0.975303C9.11952 0.681592 8.88992 0.434564 8.60542 0.262195C8.32091 0.0898251 7.99285 -0.000998521 7.6584 9.46075e-06H4.3416C4.00714 -0.00106694 3.67905 0.0897285 3.39453 0.262106C3.11001 0.434483 2.88042 0.681548 2.7318 0.975303L2.6292 1.17648H1.8C1.32261 1.17648 0.864773 1.3624 0.527208 1.69335C0.189642 2.0243 0 2.47315 0 2.94118V8.82353C0 9.13555 0.126428 9.43479 0.351472 9.65542C0.576515 9.87605 0.88174 10 1.2 10H10.8C11.1183 10 11.4235 9.87605 11.6485 9.65542C11.8736 9.43479 12 9.13555 12 8.82353V2.94118C12 2.47315 11.8104 2.0243 11.4728 1.69335C11.1352 1.3624 10.6774 1.17648 10.2 1.17648ZM8.1 5.29412C8.1 5.70132 7.97684 6.09937 7.74609 6.43794C7.51534 6.77651 7.18736 7.0404 6.80364 7.19623C6.41991 7.35205 5.99767 7.39283 5.59031 7.31339C5.18295 7.23394 4.80877 7.03786 4.51508 6.74993C4.22139 6.462 4.02138 6.09515 3.94035 5.69578C3.85932 5.29641 3.90091 4.88245 4.05985 4.50625C4.2188 4.13005 4.48796 3.8085 4.8333 3.58227C5.17865 3.35605 5.58466 3.2353 6 3.2353C6.55695 3.2353 7.0911 3.45221 7.48492 3.83832C7.87875 4.22442 8.1 4.74809 8.1 5.29412Z"
      fill="white"
    />
  </svg>
);

const TradeRow = ({
  date,
  symbol,
  position,
  entry,
  size,
  tp,
  sl,
  fees,
  roi,
  pl,
}) => {
  const modifiedDate = date?.split(" ")[0];
  const modifiedTime = date?.split(" ")[1];
  return (
    <tr>
      <td className="py-2">
        <p>{modifiedDate}</p>
        <span className="text-secondary">{modifiedTime}</span>
      </td>
      <td className="py-2">{symbol}</td>
      <td className={`py-2 ${position === "long" ? "text-green" : "text-red"}`}>
        {position.toUpperCase()}
      </td>
      <td className="py-2">{entry}</td>
      <td className="py-2">{size}</td>
      <td className="py-2 text-secondary">{tp ? tp : "-"}</td>
      <td className="py-2 text-secondary">{sl ? sl : "-"}</td>
      <td className="py-2">${fees.toFixed(2)}</td>
      <td className={`py-2 ${roi < 0 ? "text-red" : "text-green"}`}>
        {roi.toFixed(2)}%
      </td>
      <td className={`py-2 ${pl < 0 ? "text-red" : "text-green"}`}>
        {pl < 0 ? `-$${Math.abs(pl).toFixed(2)}` : `$${pl.toFixed(2)}`}
      </td>
      <td className="py-2">
        <div className="flex justify-end items-center space-x-2">
          <button className="border rounded-md p-2 border-borderMain">
            <Edit />
          </button>
          <button className="border rounded-md p-2 border-borderMain">
            <Camera />
          </button>
        </div>
      </td>
    </tr>
  );
};

TradeRow.propTypes = {
  date: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  entry: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  tp: PropTypes.number.isRequired,
  sl: PropTypes.number.isRequired,
  fees: PropTypes.number.isRequired,
  roi: PropTypes.number.isRequired,
  pl: PropTypes.number.isRequired,
};

const TradesTable = ({ positions }) => {
  const titles = [
    "OPEN (GMT)",
    "SYMBOL",
    "POSITION",
    "ENTRY",
    "SIZE",
    "TP",
    "SL",
    "FEES",
    "ROI",
    "P/L",
    "",
  ];

  return (
    <table className="table-fixed w-full text-left text-white">
      <thead>
        <tr className="border-y bg-[#151314] border-borderMain font-semibold text-secondary text-[10px]">
          {titles.map((e) => (
            <th className="py-2">{e}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y text-xs divide-borderMain">
        {positions.map((trade) => (
          <TradeRow
            key={trade.order_id}
            date={trade.open_time}
            symbol={trade.symbol}
            position={trade.position_type}
            entry={trade.entry}
            size={trade.quantity}
            tp={trade.tp}
            sl={trade.sl}
            fees={trade.fees}
            roi={trade.roi}
            pl={trade.pl}
          />
        ))}
      </tbody>
    </table>
  );
};

const OpenPositions = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await axios.get("/open_positions");
        setPositions(response.data.open_trades);
      } catch (error) {
        console.error("Error fetching positions:", error);
      }
    };

    fetchPositions();
  }, []);

  const buttons = [
    { id: 1, title: "Sync Open Trades", color: "green" },
    { id: 2, title: "Close Profits", color: "green" },
    { id: 3, title: "Close Losses", color: "red" },
    { id: 4, title: "Close All", color: "red" },
  ];

  return (
    <div className="bg-card text-card-foreground my-10 p-4 bg-bgMain text-white w-[1036px]">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4 font-medium text-sm">
          <button className="text-white border-b-2 border-primary pb-3">
            Open Positions{" "}
            <span className="bg-[#252223] rounded-[4px] px-1.5 py-0.5">
              {positions.length}
            </span>
          </button>
          <button className={`text-secondary pb-3`}>
            Open Orders{" "}
            <span className="bg-[#252223] rounded-[4px] px-1.5 py-0.5">4</span>
          </button>
          <button className={`text-secondary pb-2`}>
            Order History{" "}
            <span className="bg-[#252223] rounded-[4px] px-1.5 py-0.5">4</span>
          </button>
        </div>
        <div className="flex space-x-5 divide-x mb-3 divide-borderMain">
          <div className="flex space-x-3 font-medium text-xs">
            {buttons.map((e) => (
              <button
                key={e.id}
                className={`text-${e.color} px-3 py-1 border border-${e.color} rounded-md`}
              >
                {e.title}
              </button>
            ))}
          </div>
          <div className="flex items-center">
            <button className="ml-5 mr-2">
              <Minus />
            </button>
          </div>
        </div>
      </div>
      <TradesTable positions={positions} />
    </div>
  );
};

export default OpenPositions;
