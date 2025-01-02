import React, { useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import Form from "../components/SubmissionForm/Form";
import BalanceStat from "../components/RightCoulam/BalanceStat/BalanceStat";
import ExpenseList from "../components/RightCoulam/ExpenseList/ExpenseList";
import IncomeList from "../components/RightCoulam/IncomeList/IncomeList";

const Main = () => {
  const defaultIncome = [
    {
      id: crypto.randomUUID(),
      category: "Salary",
      amount: 2000,
      date: "21-02-2024",
    },
  ];
  const defaultExpense = [
    {
      id: crypto.randomUUID(),
      category: "Food",
      amount: 1500,
      date: "21-02-2024",
    },
  ];
  const [incomeList, setIncomeList] = useState(defaultIncome);
  const [expenseList, setExpenseList] = useState(defaultExpense);

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            <IncomeList incomeList={incomeList}/>
            <ExpenseList expenseList={expenseList} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
