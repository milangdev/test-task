import React, { useEffect, useState } from "react";
import axios from "axios";
import InfoRowValueIcon from "../images/icon1.png";
import InfoRowLabelIcon from "../images/icon2.png";

const sharedClasses = {
  textMuted: "text-secondary",
  primaryBg: "bg-primary",
};

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

const Plus = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.2666 5.46589H6.53328V1.73255C6.53328 1.5911 6.47709 1.45545 6.37707 1.35543C6.27706 1.25541 6.1414 1.19922 5.99995 1.19922C5.8585 1.19922 5.72285 1.25541 5.62283 1.35543C5.52281 1.45545 5.46662 1.5911 5.46662 1.73255V5.46589H1.73328C1.59184 5.46589 1.45618 5.52208 1.35616 5.6221C1.25614 5.72212 1.19995 5.85777 1.19995 5.99922C1.19995 6.14067 1.25614 6.27632 1.35616 6.37634C1.45618 6.47636 1.59184 6.53255 1.73328 6.53255H5.46662V10.2659C5.46662 10.4073 5.52281 10.543 5.62283 10.643C5.72285 10.743 5.8585 10.7992 5.99995 10.7992C6.1414 10.7992 6.27706 10.743 6.37707 10.643C6.47709 10.543 6.53328 10.4073 6.53328 10.2659V6.53255H10.2666C10.4081 6.53255 10.5437 6.47636 10.6437 6.37634C10.7438 6.27632 10.8 6.14067 10.8 5.99922C10.8 5.85777 10.7438 5.72212 10.6437 5.6221C10.5437 5.52208 10.4081 5.46589 10.2666 5.46589Z"
      fill="#E74694"
    />
  </svg>
);

const Eye = () => (
  <svg
    width="16"
    height="13"
    viewBox="0 0 16 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 9.92857C7.3671 9.92857 6.74841 9.72749 6.22218 9.35075C5.69594 8.97402 5.28579 8.43855 5.04359 7.81206C4.80138 7.18557 4.73801 6.4962 4.86149 5.83112C4.98496 5.16604 5.28973 4.55513 5.73726 4.07563C6.18479 3.59614 6.75497 3.2696 7.37571 3.13731C7.99645 3.00501 8.63986 3.07291 9.22459 3.33241C9.80931 3.59191 10.3091 4.03136 10.6607 4.59519C11.0123 5.15901 11.2 5.82189 11.2 6.5C11.2 7.40931 10.8629 8.28138 10.2627 8.92437C9.66263 9.56735 8.84869 9.92857 8 9.92857ZM8 4.78571C7.68355 4.78571 7.37421 4.88626 7.11109 5.07462C6.84797 5.26299 6.64289 5.53073 6.52179 5.84397C6.40069 6.15722 6.36901 6.5019 6.43074 6.83444C6.49248 7.16698 6.64487 7.47244 6.86863 7.71218C7.09239 7.95193 7.37749 8.1152 7.68786 8.18135C7.99823 8.24749 8.31993 8.21354 8.61229 8.08379C8.90466 7.95404 9.15454 7.73432 9.33035 7.45241C9.50616 7.17049 9.6 6.83905 9.6 6.5C9.6 6.04534 9.43143 5.60931 9.13137 5.28782C8.83131 4.96633 8.42435 4.78571 8 4.78571Z"
      fill="#898587"
    />
    <path
      d="M8 12.5C2.8368 12.5 0 7.99314 0 6.5C0 5.07371 3.6896 0.5 8 0.5C12.3104 0.5 16 5.07371 16 6.5C16 7.99314 13.1632 12.5 8 12.5ZM1.6104 6.524C2.17958 7.81795 3.08525 8.90838 4.21868 9.66434C5.3521 10.4203 6.66509 10.8097 8 10.7857C9.33491 10.8097 10.6479 10.4203 11.7813 9.66434C12.9147 8.90838 13.8204 7.81795 14.3896 6.524C14.0992 5.69257 11.404 2.21429 8 2.21429C4.596 2.21429 1.9008 5.69257 1.6104 6.524Z"
      fill="#898587"
    />
  </svg>
);

const Setting = () => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.8 16.5H7.2C6.77565 16.5 6.36869 16.3314 6.06863 16.0314C5.76857 15.7313 5.6 15.3243 5.6 14.9V14.8288L5.2216 14.6688L5.1712 14.7192C4.87116 15.0192 4.46426 15.1877 4.04 15.1877C3.61574 15.1877 3.20884 15.0192 2.9088 14.7192L1.7776 13.5912C1.47765 13.2912 1.30914 12.8843 1.30914 12.46C1.30914 12.0357 1.47765 11.6288 1.7776 11.3288L1.828 11.2784L1.6712 10.9H1.6C1.17565 10.9 0.768687 10.7314 0.468629 10.4314C0.168571 10.1313 0 9.72435 0 9.3V7.7C0 7.27565 0.168571 6.86869 0.468629 6.56863C0.768687 6.26857 1.17565 6.1 1.6 6.1H1.6712L1.8312 5.7216L1.7808 5.6712C1.48085 5.37116 1.31234 4.96426 1.31234 4.54C1.31234 4.11574 1.48085 3.70884 1.7808 3.4088L2.9088 2.2776C3.20884 1.97765 3.61574 1.80914 4.04 1.80914C4.46426 1.80914 4.87116 1.97765 5.1712 2.2776L5.2224 2.3288L5.6 2.1712V2.1C5.6 1.67565 5.76857 1.26869 6.06863 0.968629C6.36869 0.668571 6.77565 0.5 7.2 0.5H8.8C9.22435 0.5 9.63131 0.668571 9.93137 0.968629C10.2314 1.26869 10.4 1.67565 10.4 2.1V2.1712L10.7776 2.3312L10.8288 2.2808C11.1288 1.98109 11.5355 1.81274 11.9596 1.81274C12.3837 1.81274 12.7904 1.98109 13.0904 2.2808L14.2224 3.4128C14.5224 3.71284 14.6909 4.11974 14.6909 4.544C14.6909 4.96826 14.5224 5.37516 14.2224 5.6752L14.1712 5.7264L14.3312 6.104H14.4C14.8243 6.104 15.2313 6.27257 15.5314 6.57263C15.8314 6.87269 16 7.27965 16 7.704V9.304C16 9.72835 15.8314 10.1353 15.5314 10.4354C15.2313 10.7354 14.8243 10.904 14.4 10.904H14.3288L14.1688 11.2816L14.2192 11.3328C14.5189 11.6328 14.6873 12.0395 14.6873 12.4636C14.6873 12.8877 14.5189 13.2944 14.2192 13.5944L13.0872 14.7264C12.7872 15.0264 12.3803 15.1949 11.956 15.1949C11.5317 15.1949 11.1248 15.0264 10.8248 14.7264L10.7744 14.676L10.396 14.836V14.9C10.396 15.3237 10.228 15.73 9.92879 16.03C9.62959 16.3299 9.22365 16.4989 8.8 16.5ZM5.0344 12.9288C5.13927 12.9288 5.2431 12.9495 5.34 12.9896L6.7056 13.5552C6.8519 13.6157 6.97697 13.7182 7.06498 13.8498C7.15298 13.9814 7.19997 14.1361 7.2 14.2944V14.9H8.8V14.2944C8.80003 14.1361 8.84702 13.9814 8.93503 13.8498C9.02303 13.7182 9.1481 13.6157 9.2944 13.5552L10.66 12.9896C10.806 12.9291 10.9667 12.9132 11.1218 12.944C11.2768 12.9747 11.4193 13.0507 11.5312 13.1624L11.9592 13.5904L13.0912 12.46L12.6632 12.0312C12.5514 11.9194 12.4753 11.777 12.4444 11.6219C12.4135 11.4669 12.4292 11.3061 12.4896 11.16L13.0552 9.7944C13.1157 9.6481 13.2182 9.52303 13.3498 9.43503C13.4814 9.34702 13.6361 9.30003 13.7944 9.3H14.4V7.7H13.7944C13.6361 7.69997 13.4814 7.65298 13.3498 7.56498C13.2182 7.47697 13.1157 7.3519 13.0552 7.2056L12.4896 5.84C12.4292 5.69388 12.4135 5.53315 12.4444 5.37809C12.4753 5.22303 12.5514 5.08061 12.6632 4.9688L13.0912 4.54L11.96 3.4088L11.5312 3.8368C11.4194 3.94859 11.277 4.02474 11.1219 4.05563C10.9669 4.08653 10.8061 4.07079 10.66 4.0104L9.2944 3.4448C9.1481 3.38433 9.02303 3.28181 8.93503 3.15023C8.84702 3.01864 8.80003 2.8639 8.8 2.7056V2.1H7.2V2.7056C7.19997 2.8639 7.15298 3.01864 7.06498 3.15023C6.97697 3.28181 6.8519 3.38433 6.7056 3.4448L5.34 4.0104C5.19388 4.07079 5.03315 4.08653 4.87809 4.05563C4.72303 4.02474 4.58061 3.94859 4.4688 3.8368L4.04 3.4088L2.9088 4.54L3.3376 4.9688C3.44925 5.0807 3.52525 5.22316 3.55601 5.37822C3.58676 5.53327 3.57089 5.69396 3.5104 5.84L2.9448 7.2056C2.88433 7.3519 2.78181 7.47697 2.65023 7.56498C2.51864 7.65298 2.3639 7.69997 2.2056 7.7H1.6V9.3H2.2056C2.3639 9.30003 2.51864 9.34702 2.65023 9.43503C2.78181 9.52303 2.88433 9.6481 2.9448 9.7944L3.5104 11.16C3.57089 11.306 3.58676 11.4667 3.55601 11.6218C3.52525 11.7768 3.44925 11.9193 3.3376 12.0312L2.9096 12.4592L4.04 13.5912L4.4688 13.1624C4.61893 13.0127 4.82236 12.9286 5.0344 12.9288Z"
      fill="#898587"
    />
    <path
      d="M8 11.7C7.3671 11.7 6.74841 11.5123 6.22218 11.1607C5.69594 10.8091 5.28579 10.3093 5.04359 9.72459C4.80138 9.13986 4.73801 8.49645 4.86149 7.87571C4.98496 7.25497 5.28973 6.68479 5.73726 6.23726C6.18479 5.78973 6.75497 5.48496 7.37571 5.36149C7.99645 5.23801 8.63986 5.30138 9.22459 5.54359C9.80931 5.78579 10.3091 6.19594 10.6607 6.72218C11.0123 7.24841 11.2 7.8671 11.2 8.5C11.2 9.34869 10.8629 10.1626 10.2627 10.7627C9.66263 11.3629 8.84869 11.7 8 11.7ZM8 6.9C7.68355 6.9 7.37421 6.99384 7.11109 7.16965C6.84797 7.34546 6.64289 7.59535 6.52179 7.88771C6.40069 8.18007 6.36901 8.50177 6.43074 8.81214C6.49248 9.12251 6.64487 9.40761 6.86863 9.63137C7.09239 9.85513 7.37749 10.0075 7.68786 10.0693C7.99823 10.131 8.31993 10.0993 8.61229 9.97821C8.90466 9.85711 9.15454 9.65203 9.33035 9.38891C9.50616 9.12579 9.6 8.81645 9.6 8.5C9.6 8.07565 9.43143 7.66869 9.13137 7.36863C8.83131 7.06857 8.42435 6.9 8 6.9Z"
      fill="#898587"
    />
  </svg>
);

const Minus = () => (
  <svg
    width="14"
    height="3"
    viewBox="0 0 14 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.2222 0.800781H0.777778C0.571498 0.800781 0.373667 0.911406 0.227806 1.10832C0.0819442 1.30523 0 1.5723 0 1.85078C0 2.12926 0.0819442 2.39633 0.227806 2.59324C0.373667 2.79016 0.571498 2.90078 0.777778 2.90078H13.2222C13.4285 2.90078 13.6263 2.79016 13.7722 2.59324C13.9181 2.39633 14 2.12926 14 1.85078C14 1.5723 13.9181 1.30523 13.7722 1.10832C13.6263 0.911406 13.4285 0.800781 13.2222 0.800781Z"
      fill="#898587"
    />
  </svg>
);

const ToggleRow = ({ label, isEnabled }) => (
  <div className="flex justify-between items-center">
    <span className={`text-xs ${sharedClasses.textMuted}`}>{label}</span>
    <button
      type="button"
      className={`relative inline-flex items-center h-6 rounded-full w-11 ${
        isEnabled ? sharedClasses.primaryBg : "bg-gray-600"
      }`}
    >
      <span className="sr-only">Enable {label}</span>
      <span
        className={`inline-block w-4 h-4 transform bg-white rounded-full ${
          isEnabled ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  </div>
);

const InfoRow = ({ label, value, labelIcon, valueIcon }) => (
  <div className="flex text-xs justify-between">
    {labelIcon ? (
      <span
        className={`${labelIcon && "flex space-x-1 items-center"} ${
          sharedClasses.textMuted
        }`}
      >
        <img
          aria-hidden="true"
          alt="icon"
          className="h-3 w-3"
          src={labelIcon}
        />
        <span>{label}:</span>
      </span>
    ) : (
      <span className={sharedClasses.textMuted}>{label}:</span>
    )}
    <span className="font-medium">
      {valueIcon ? (
        <span className="flex space-x-2">
          <img
            aria-hidden="true"
            alt="icon"
            className="h-4 w-4"
            src={valueIcon}
          />
          <span>{value}</span>
        </span>
      ) : (
        value
      )}
    </span>
  </div>
);

const ActionRowWithButton = ({ label, length }) => (
  <div className="flex justify-between text-xs items-center">
    <span className={sharedClasses.textMuted}>{label}:</span>
    {length > 0 ? (
      <div className="flex items-center space-x-1.5 font-medium">
        <button type="button" className={"bg-[#252223] px-2.5 py-1 rounded-md"}>
          <span className={"text-primary"}>{length} </span>
          Rules
        </button>
        <button className="border rounded-md p-1 border-borderMain">
          <Edit />
        </button>
      </div>
    ) : (
      <button className="border rounded-md p-1 border-primary">
        <Plus />
      </button>
    )}
  </div>
);

const AccountDetails = () => {
  const [accountInfo, setAccountInfo] = useState(null);
  const REACT_APP_API_BASE_URL="http://13.41.72.245"
  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const response = await axios.get(`${REACT_APP_API_BASE_URL}/account_details`);
        setAccountInfo(response.data);
      } catch (error) {
        console.error("Error fetching account details:", error);
      }
    };

    fetchAccountDetails();
  }, []);

  if (!accountInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-bgMain text-white p-6 shadow-md w-[360px] h-fit">
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="flex space-x-2">
            <h2 className="font-semibold">Account Info</h2>
            <button type="button">
              <Eye />
            </button>
          </div>
        </div>
        <div className="flex divide-x divide-borderMain">
          <button type="button">
            <div className="me-4">
              <Setting />
            </div>
          </button>
          <button type="button">
            <div className="ms-4">
              <Minus />
            </div>
          </button>
        </div>
      </div>
      <div className="divide-y divide-borderMain">
        <div className="space-y-1 pb-4">
          <InfoRow label="Name" value={accountInfo.account_name} />
          <InfoRow
            label="Balance"
            value={`$${accountInfo.balance.toFixed(2)}`}
          />
          <InfoRow label="Equity" value={`$${accountInfo.equity.toFixed(2)}`} />
          <InfoRow
            label="Exchange"
            valueIcon={InfoRowValueIcon}
            value={accountInfo.exchange}
          />
        </div>
        <div className="space-y-2 py-4">
          <InfoRow label="Leverage" value={`${accountInfo.leverage}x`} />
          <InfoRow
            label="Risk"
            labelIcon={InfoRowLabelIcon}
            value={`${accountInfo.risk}%`}
          />
          <InfoRow
            label="Daily Loss Limit"
            labelIcon={InfoRowLabelIcon}
            value={`${accountInfo.daily_loss_limit}%`}
          />
          <InfoRow
            label="Take Profit (RR)"
            labelIcon={InfoRowLabelIcon}
            value={accountInfo.take_profit_level}
          />
          <InfoRow
            label="Auto BE Level (RR)"
            labelIcon={InfoRowLabelIcon}
            value={accountInfo.auto_be_level}
          />
        </div>
        <div className="space-y-2 py-4">
          <ToggleRow
            label="One Click Trade"
            isEnabled={accountInfo.one_click}
          />
        </div>
        <div className="space-y-2 py-4">
          <ToggleRow
            label="Show Account on Leaderboard"
            isEnabled={accountInfo.show_leaderboard}
          />
        </div>
        <div className="space-y-2 pt-4">
          <ActionRowWithButton
            length={accountInfo?.max_lot_sizes?.length}
            label={"Max Lot Sizes"}
          />
          <ActionRowWithButton
            length={accountInfo?.commissions?.length}
            label={"Account Commissions"}
          />
          <ActionRowWithButton
            length={accountInfo?.symbol_mappings?.length}
            label={"Symbol Mappings"}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
