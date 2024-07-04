import { useState } from "react";
import Form from "./components/Form/Form";
import "./App.css";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseForm from "./expense-tracker/components/ExpenseForm/ExpenseForm";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import categories from "./expense-tracker/categories";

const App = () => {
  const [selectCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aa", amount: 10, category: "Utilities" },
    { id: 2, description: "ddd", amount: 40, category: "Groceries" },
    { id: 3, description: "vvv", amount: 20, category: "Entertainment" },
    { id: 4, description: "sss", amount: 80, category: "Utilities" },
  ]);

  const visibleExpenses = selectCategory
    ? expenses.filter((e) => e.category === selectCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm></ExpenseForm>
      </div>
      <div className="expense-filter">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        ></ExpenseFilter>
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
};

export default App;
