import "./App.css";
import AccountDetails from "./components/AccountDetails";
import CurrentPrices from "./components/CurrentPrices";
import HeaderAndChart from "./components/HeaderAndChart";
import OpenPositions from "./components/OpenPositions";
import TradeForm from "./components/TradeForm";

function App() {
  return (
    <div>
      <OpenPositions />
      <HeaderAndChart />
      <div className="grid grid-cols-3 my-10 justify-items-center">
        <TradeForm />
        <AccountDetails />
        <CurrentPrices />
      </div>
    </div>
  );
}

export default App;
