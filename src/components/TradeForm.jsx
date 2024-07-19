import React, { useEffect, useState } from "react";
import axios from "axios";
import EUR from "../images/EUR.png";
import US from "../images/US.png";
import InfoRowValueIcon from "../images/icon1.png";

const Trade = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.8936 14.6654H1.26305C0.92807 14.6654 0.606808 14.5337 0.36994 14.2992C0.133071 14.0648 0 13.7469 0 13.4154V2.58203C0 2.25051 0.133071 1.93257 0.36994 1.69815C0.606808 1.46373 0.92807 1.33203 1.26305 1.33203C1.59804 1.33203 1.9193 1.46373 2.15617 1.69815C2.39303 1.93257 2.52611 2.25051 2.52611 2.58203V12.1654H13.8936C14.2286 12.1654 14.5498 12.2971 14.7867 12.5315C15.0236 12.7659 15.1566 13.0838 15.1566 13.4154C15.1566 13.7469 15.0236 14.0648 14.7867 14.2992C14.5498 14.5337 14.2286 14.6654 13.8936 14.6654Z"
      fill="white"
    />
    <path
      d="M4.63119 11.332C4.39663 11.332 4.1667 11.2674 3.96717 11.1453C3.76764 11.0233 3.60638 10.8487 3.50148 10.641C3.39658 10.4334 3.35218 10.201 3.37324 9.96977C3.39431 9.73857 3.48001 9.51774 3.62075 9.33203L6.14686 5.9987C6.34058 5.74311 6.62584 5.57063 6.94405 5.5167C7.26226 5.46276 7.58925 5.53147 7.85787 5.7087L9.28175 6.64786L11.1267 3.6062C11.2145 3.46113 11.3313 3.33523 11.4698 3.23612C11.6083 3.13701 11.7656 3.06674 11.9324 3.02958C12.0991 2.99242 12.2717 2.98913 12.4398 3.01992C12.6078 3.05071 12.7678 3.11493 12.9101 3.2087L15.4362 4.87536C15.7153 5.05925 15.9092 5.34535 15.9753 5.67072C16.0413 5.9961 15.974 6.3341 15.7882 6.61036C15.6024 6.88663 15.3133 7.07854 14.9845 7.14386C14.6557 7.20919 14.3142 7.14258 14.035 6.9587L12.6112 6.01953L10.7663 9.0612C10.6784 9.20626 10.5616 9.33216 10.4231 9.43128C10.2847 9.53039 10.1273 9.60065 9.96054 9.63782C9.7938 9.67498 9.62118 9.67827 9.45312 9.64748C9.28507 9.61669 9.12508 9.55247 8.98283 9.4587L7.45117 8.44786L5.64164 10.832C5.52399 10.9873 5.37143 11.1133 5.19605 11.2001C5.02067 11.2868 4.82728 11.332 4.63119 11.332Z"
      fill="white"
    />
  </svg>
);

const Book = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.6666 11.2V1.6C14.6666 1.17565 14.491 0.768687 14.1784 0.468629C13.8659 0.168571 13.4419 0 12.9999 0H2.99992C2.55789 0 2.13397 0.168571 1.82141 0.468629C1.50885 0.768687 1.33325 1.17565 1.33325 1.6V13.6C1.33325 14.2365 1.59664 14.847 2.06549 15.2971C2.53433 15.7471 3.17021 16 3.83325 16H13.8333C14.0543 16 14.2662 15.9157 14.4225 15.7657C14.5788 15.6157 14.6666 15.4122 14.6666 15.2C14.6666 14.9878 14.5788 14.7843 14.4225 14.6343C14.2662 14.4843 14.0543 14.4 13.8333 14.4H12.9999V12.8C13.4419 12.8 13.8659 12.6314 14.1784 12.3314C14.491 12.0313 14.6666 11.6243 14.6666 11.2ZM4.66659 1.6H6.33325V11.2H4.66659V1.6ZM11.3333 14.4H3.83325C3.61224 14.4 3.40028 14.3157 3.244 14.1657C3.08772 14.0157 2.99992 13.8122 2.99992 13.6C2.99992 13.3878 3.08772 13.1843 3.244 13.0343C3.40028 12.8843 3.61224 12.8 3.83325 12.8H11.3333V14.4Z"
      fill="#898587"
    />
  </svg>
);

const Calender = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_5293_5496)">
      <path
        d="M0 14.4C0 14.8243 0.168571 15.2313 0.468629 15.5314C0.768687 15.8314 1.17565 16 1.6 16H14.4C14.8243 16 15.2313 15.8314 15.5314 15.5314C15.8314 15.2313 16 14.8243 16 14.4V6.4H0V14.4ZM11.2 8.4C11.2 8.29391 11.2421 8.19217 11.3172 8.11716C11.3922 8.04214 11.4939 8 11.6 8H12.4C12.5061 8 12.6078 8.04214 12.6828 8.11716C12.7579 8.19217 12.8 8.29391 12.8 8.4V9.2C12.8 9.30609 12.7579 9.40783 12.6828 9.48284C12.6078 9.55786 12.5061 9.6 12.4 9.6H11.6C11.4939 9.6 11.3922 9.55786 11.3172 9.48284C11.2421 9.40783 11.2 9.30609 11.2 9.2V8.4ZM11.2 11.6C11.2 11.4939 11.2421 11.3922 11.3172 11.3172C11.3922 11.2421 11.4939 11.2 11.6 11.2H12.4C12.5061 11.2 12.6078 11.2421 12.6828 11.3172C12.7579 11.3922 12.8 11.4939 12.8 11.6V12.4C12.8 12.5061 12.7579 12.6078 12.6828 12.6828C12.6078 12.7579 12.5061 12.8 12.4 12.8H11.6C11.4939 12.8 11.3922 12.7579 11.3172 12.6828C11.2421 12.6078 11.2 12.5061 11.2 12.4V11.6ZM7.2 8.4C7.2 8.29391 7.24214 8.19217 7.31716 8.11716C7.39217 8.04214 7.49391 8 7.6 8H8.4C8.50609 8 8.60783 8.04214 8.68284 8.11716C8.75786 8.19217 8.8 8.29391 8.8 8.4V9.2C8.8 9.30609 8.75786 9.40783 8.68284 9.48284C8.60783 9.55786 8.50609 9.6 8.4 9.6H7.6C7.49391 9.6 7.39217 9.55786 7.31716 9.48284C7.24214 9.40783 7.2 9.30609 7.2 9.2V8.4ZM7.2 11.6C7.2 11.4939 7.24214 11.3922 7.31716 11.3172C7.39217 11.2421 7.49391 11.2 7.6 11.2H8.4C8.50609 11.2 8.60783 11.2421 8.68284 11.3172C8.75786 11.3922 8.8 11.4939 8.8 11.6V12.4C8.8 12.5061 8.75786 12.6078 8.68284 12.6828C8.60783 12.7579 8.50609 12.8 8.4 12.8H7.6C7.49391 12.8 7.39217 12.7579 7.31716 12.6828C7.24214 12.6078 7.2 12.5061 7.2 12.4V11.6ZM3.2 8.4C3.2 8.29391 3.24214 8.19217 3.31716 8.11716C3.39217 8.04214 3.49391 8 3.6 8H4.4C4.50609 8 4.60783 8.04214 4.68284 8.11716C4.75786 8.19217 4.8 8.29391 4.8 8.4V9.2C4.8 9.30609 4.75786 9.40783 4.68284 9.48284C4.60783 9.55786 4.50609 9.6 4.4 9.6H3.6C3.49391 9.6 3.39217 9.55786 3.31716 9.48284C3.24214 9.40783 3.2 9.30609 3.2 9.2V8.4ZM3.2 11.6C3.2 11.4939 3.24214 11.3922 3.31716 11.3172C3.39217 11.2421 3.49391 11.2 3.6 11.2H4.4C4.50609 11.2 4.60783 11.2421 4.68284 11.3172C4.75786 11.3922 4.8 11.4939 4.8 11.6V12.4C4.8 12.5061 4.75786 12.6078 4.68284 12.6828C4.60783 12.7579 4.50609 12.8 4.4 12.8H3.6C3.49391 12.8 3.39217 12.7579 3.31716 12.6828C3.24214 12.6078 3.2 12.5061 3.2 12.4V11.6Z"
        fill="#898587"
      />
      <path
        d="M16 3.2C16 2.77565 15.8314 2.36869 15.5314 2.06863C15.2313 1.76857 14.8243 1.6 14.4 1.6H12.8V0.8C12.8 0.587827 12.7157 0.384344 12.5657 0.234315C12.4157 0.0842854 12.2122 0 12 0C11.7878 0 11.5843 0.0842854 11.4343 0.234315C11.2843 0.384344 11.2 0.587827 11.2 0.8V1.6H8.8V0.8C8.8 0.587827 8.71571 0.384344 8.56569 0.234315C8.41566 0.0842854 8.21217 0 8 0C7.78783 0 7.58434 0.0842854 7.43431 0.234315C7.28429 0.384344 7.2 0.587827 7.2 0.8V1.6H4.8V0.8C4.8 0.587827 4.71571 0.384344 4.56569 0.234315C4.41566 0.0842854 4.21217 0 4 0C3.78783 0 3.58434 0.0842854 3.43431 0.234315C3.28429 0.384344 3.2 0.587827 3.2 0.8V1.6H1.6C1.17565 1.6 0.768687 1.76857 0.468629 2.06863C0.168571 2.36869 0 2.77565 0 3.2V4.8H16V3.2Z"
        fill="#898587"
      />
    </g>
    <defs>
      <clipPath id="clip0_5293_5496">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const DownArrow = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.01543 10.5C6.68129 10.4999 6.36085 10.3772 6.12461 10.1589L1.08461 5.50174C0.964272 5.39434 0.868282 5.26586 0.802247 5.12382C0.736211 4.98177 0.701453 4.82899 0.699999 4.6744C0.698545 4.51981 0.730425 4.36649 0.793779 4.22341C0.857133 4.08032 0.950692 3.95033 1.069 3.84101C1.1873 3.73169 1.32798 3.64524 1.48283 3.5867C1.63768 3.52816 1.8036 3.4987 1.9709 3.50004C2.1382 3.50139 2.30354 3.53351 2.45726 3.59452C2.61099 3.65554 2.75002 3.74424 2.86625 3.85544L7.01543 7.68942L11.1646 3.85544C11.4023 3.64336 11.7205 3.52601 12.0509 3.52866C12.3813 3.53131 12.6973 3.65376 12.9309 3.86962C13.1645 4.08549 13.297 4.37751 13.2999 4.68278C13.3028 4.98805 13.1758 5.28215 12.9463 5.50174L7.90625 10.1589C7.67001 10.3772 7.34958 10.4999 7.01543 10.5Z"
      fill="#9CA3AF"
    />
  </svg>
);

const Minus = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.5999 8L2.3999 8L13.5999 8Z" fill="#898587" />
    <path
      d="M13.5999 8L2.3999 8"
      stroke="#898587"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const Plus = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_5293_7554)">
      <path d="M8.0001 8.00156H1.6001H8.0001Z" fill="#898587" />
      <path
        d="M8.0001 1.60156V8.00156M8.0001 8.00156V14.4016M8.0001 8.00156H14.4001M8.0001 8.00156H1.6001"
        stroke="#898587"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_5293_7554">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
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

const UpperArrow = () => (
  <svg
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.0417 10.9857C11.708 10.9856 11.388 10.8629 11.152 10.6445L7.00782 6.81043L2.86364 10.6445C2.74755 10.7557 2.60868 10.8445 2.45514 10.9055C2.3016 10.9665 2.13647 10.9986 1.96937 11C1.80227 11.0013 1.63655 10.9718 1.48189 10.9133C1.32723 10.8548 1.18671 10.7683 1.06855 10.659C0.950389 10.5497 0.856943 10.4197 0.793666 10.2766C0.730388 10.1335 0.698547 9.98016 0.699999 9.82556C0.701451 9.67096 0.736168 9.51818 0.802123 9.37613C0.868079 9.23407 0.963953 9.1056 1.08415 8.99819L6.11807 4.3409C6.35407 4.12262 6.67411 4 7.00782 4C7.34152 4 7.66156 4.12262 7.89756 4.3409L12.9315 8.99819C13.1074 9.16102 13.2272 9.36847 13.2758 9.59429C13.3243 9.82011 13.2994 10.0542 13.2042 10.2669C13.1089 10.4796 12.9477 10.6614 12.7408 10.7894C12.5339 10.9173 12.2906 10.9856 12.0417 10.9857Z"
      fill="#898587"
    />
  </svg>
);

const CheckBox = ({ id }) => (
  <div class="inline-flex items-center">
    <label
      class="relative flex items-center rounded-full cursor-pointer"
      htmlFor={id}
    >
      <input
        type="checkbox"
        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#4F494C] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-4 before:w-4 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-[#4F494C] hover:before:opacity-10"
        id={id}
      />
      <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3.5 w-3.5"
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="1"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </span>
    </label>
  </div>
);

const InfoRow = ({ label, value, valueIcon }) => (
  <div className="flex text-xs justify-between">
    <span className={"text-secondary"}>{label}:</span>
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

const TradeForm = () => {
  const [price, setPrice] = useState(0);
  const [accountInfo, setAccountInfo] = useState(null);

  useEffect(() => {
    fetchCurrentPrices();
  }, []);

  const fetchCurrentPrices = async () => {
    try {
      const response = await axios.get("/current_prices");
      setPrice(response.data.prices?.[0]);
      console.log("response.data :: ", response.data);
    } catch (error) {
      console.error("Error fetching current prices:", error);
    }
  };

  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const response = await axios.get("/account_details");
        setAccountInfo(response.data);
      } catch (error) {
        console.error("Error fetching account details:", error);
      }
    };

    fetchAccountDetails();
  }, []);

  return (
    <div className="bg-bgMain h-fit text-white w-[402px]">
      <div className="flex">
        <div className="w-full">
          <div className={"py-5 px-6 w-full border-b-2 border-[#232323]"}>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="flex relative">
                  <img src={EUR} alt="" />
                  <img src={US} className="z-10 -ml-2" alt="" />
                </div>
                <span className="text-white font-semibold">EURUSD</span>
              </div>
              <div className="flex items-center cursor-pointer gap-3">
                <span className={"text-red font-medium"}>
                  {price["EURUSD"]}
                </span>
                <DownArrow />
              </div>
            </div>
          </div>
          <div className="p-6 pb-[250px] border-b-2 border-[#232323]">
            <div className="flex mb-5 justify-between">
              <div className="flex gap-4 font-semibold">
                <button>Limit</button>
                <button className="text-secondary">Market</button>
              </div>
              <button className="text-xs text-primary">Calculator</button>
            </div>
            <div className="mb-5 text-white text-xs flex font-semibold">
              <button className="rounded-s-md w-full border-y border-l border-borderMain py-1.5 px-3 bg-[#4F494C]">
                Open By Lots
              </button>
              <button className="rounded-e-md w-full border-y border-r border-borderMain py-1.5 px-3 bg-[#252223]">
                Open By PL
              </button>
            </div>
            <div className="mb-5">
              <div className="mb-2">
                <span className="text-xs font-medium">Limit Price</span>
              </div>
              <div className="flex">
                <button className="py-3 px-5 bg-[#1A1819] rounded-l-md border-y border-l border-borderMain">
                  <Minus />
                </button>
                <input
                  type="number"
                  className="py-3 px-5 border-borderMain border-y bg-[#1A1819] text-secondary text-center text-sm outline-none"
                  placeholder={"0.00"}
                />
                <button className="py-3 px-5 bg-[#1A1819] rounded-r-md border-y border-r border-borderMain">
                  <Plus />
                </button>
              </div>
            </div>
            <div className="mb-5">
              <div className="mb-2 flex justify-between text-xs">
                <span className="font-medium">Quantity</span>
                <span>$199,287.50</span>
              </div>
              <div className="flex">
                <button className="py-3 px-5 bg-[#1A1819] rounded-l-md border-y border-l border-borderMain">
                  <Minus />
                </button>
                <input
                  type="number"
                  className="py-3 px-5 border-borderMain border-y bg-[#1A1819] text-secondary text-center text-sm outline-none"
                  placeholder={"0.00"}
                />
                <button className="py-3 px-5 bg-[#1A1819] rounded-r-md border-y border-r border-borderMain">
                  <Plus />
                </button>
              </div>
            </div>
            <div className="mb-5">
              <div className="text-xs">
                <label
                  htmlFor="addSetTp"
                  className="flex items-center gap-2 mb-2"
                >
                  <CheckBox id={"addSetTp"} />
                  <span>
                    Add Set TP{" "}
                    <span className="text-secondary">(Optional)</span>
                  </span>
                </label>
                <label htmlFor="addTp" className="flex items-center gap-2">
                  <CheckBox id={"addTp"} />
                  <span>
                    Add TP <span className="text-secondary">(Optional)</span>
                  </span>
                </label>
              </div>
            </div>
            <div className="mb-2 flex justify-evenly items-center text-xs bg-[#252223] rounded-md py-2 px-4 gap-4">
              <span className="text-green">1.06915</span>
              <div className="h-[21px] w-[1px] border border-borderMain" />
              <span className="text-red">1.06939</span>
            </div>
            <div className="flex gap-2 font-medium text-sm">
              <button className="bg-[#31C48D] w-full outline-none rounded-md py-2.5 px-5">
                Buy / Long
              </button>
              <button className="bg-[#F05252] w-full outline-none rounded-md py-2.5 px-5">
                Sell / Short
              </button>
            </div>
          </div>
          <div className="p-6">
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
                    <UpperArrow />
                  </div>
                </button>
              </div>
            </div>
            <div className="space-y-1">
              <InfoRow label="Name" value={accountInfo?.account_name} />
              <InfoRow
                label="Balance"
                value={`$${accountInfo?.balance?.toFixed(2)}`}
              />
              <InfoRow
                label="Equity"
                value={`$${accountInfo?.equity?.toFixed(2)}`}
              />
              <InfoRow
                label="Exchange"
                valueIcon={InfoRowValueIcon}
                value={accountInfo?.exchange}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center py-2 px-1 border-l-2 border-[#232323]">
          <div className="h-8 w-8 cursor-pointer rounded-md bg-[#252223] flex justify-center items-center">
            <Trade />
          </div>
          <div className="h-8 w-8 cursor-pointer flex justify-center items-center">
            <Book />
          </div>
          <div className="w-5 border border-borderMain" />
          <div className="h-8 w-8 cursor-pointer flex justify-center items-center">
            <Calender />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeForm;
