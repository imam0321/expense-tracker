import React from "react";

const BalanceStat = ({ totalIncome, totalExpense, totalBalance }) => {
  const balanceBgColor =
    totalBalance < 0 ? "bg-red-500 text-gray-50" : "bg-[#F9FAFB] text-gray-600";
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl">
        <dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
          <div
            className={`flex lg:max-w-xs flex-col px-4 py-4 ${balanceBgColor}`}
          >
            <dt className="text-base leading-7">Balance</dt>
            <dd className="order-first text-xl font-semibold tracking-tight sm:text-3xl">
              BDT <span>{totalBalance}</span>
            </dd>
          </div>
          <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
            <dt className="text-base leading-7 text-gray-600">Total Income</dt>
            <dd className="order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
              BDT <span>{totalIncome}</span>
            </dd>
          </div>
          <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
            <dt className="text-base leading-7 text-gray-600">Total Expense</dt>
            <dd className="order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
              BDT <span>{totalExpense}</span>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default BalanceStat;
