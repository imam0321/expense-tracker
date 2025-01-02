import React, { useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import Form from "../components/SubmissionForm/Form";
import BalanceStat from "../components/RightCoulam/BalanceStat/BalanceStat";

const Main = () => {
  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);

  const addIncome = (newIncome, isAdd) => {
    setIncomeList([...incomeList, newIncome]);
  };

  const addExpense = (newExpense, isAdd) => {
    setExpenseList([...expenseList, newExpense]);
  };

  const totalIncome = incomeList.reduce(
    (sum, income) => sum + income.amount,
    0
  );
  const totalExpense = expenseList.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
  const totalBalance = totalIncome - totalExpense;

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mt-4 mx-auto">
        <Form addIncome={addIncome} addExpense={addExpense} />
        <div className="lg:col-span-2">
          <BalanceStat
            totalIncome={totalIncome}
            totalExpense={totalExpense}
            totalBalance={totalBalance}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
