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
  const [transactionEdit, SetTransactionEdit] = useState(null);

  const addIncome = (newIncome, isAdd) => {
    if (isAdd) {
      setIncomeList([...incomeList, newIncome]);
    } else {
      setIncomeList(
        incomeList.map((income) =>
          income.id === newIncome.id ? newIncome : income
        )
      );
    }
    SetTransactionEdit(null);
  };

  const addExpense = (newExpense, isAdd) => {
    if (isAdd) {
      setExpenseList([...expenseList, newExpense]);
    } else {
      setExpenseList(
        expenseList.map((expense) =>
          expense.id === newExpense.id ? newExpense : expense
        )
      );
    }
    SetTransactionEdit(null);
  };

  // calculate amount
  const totalIncome = incomeList.reduce(
    (sum, income) => sum + income.amount,
    0
  );

  const totalExpense = expenseList.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const totalBalance = totalIncome - totalExpense;

  // Edit transaction
  const handleEditIncome = (income) => {
    SetTransactionEdit(income)
    console.log("income");
  }
  const handleEditExpense = (expense) => {
    SetTransactionEdit(expense)
    console.log("exp");
  }

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
            transactionEdit={transactionEdit}

          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            <IncomeList incomeList={incomeList} onEdit={handleEditIncome}/>
            <ExpenseList expenseList={expenseList} onEdit={handleEditExpense}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
