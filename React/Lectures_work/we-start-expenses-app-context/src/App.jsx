import { useContext, useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpensesTable from './components/ExpensesTable';
import { AppContext } from './context/app-context';
import './resources/css/';
import MainImage from './resources/images/m1.png'

let App = () => {
  // let expenses = [];  // Stateless Array

  // State Management - useState Hook
  // let [expenses, setExpeneses] = useState([])   // Array Destructuring

//   let appContext = useContext(AppContext);
//   let onNewExpenseHandler = (expense) => {
    //  alert(`Expense Tilte: ${expense.title}`);
    // expenses.push(expense);
    // appContext.setExpenses((prevState) => {
    //   return [expense, ...prevState];
    // });
    //console.log(expenses);
//   };

//   let onDeleteExpenseHandler = (id) => {
//     let filteredArray = expenses.filter((element) => element.id != id);
//     appContext.setExpenses(filteredArray);
//   };
 
  return (
    <div className="content-wrapper">
      <section className="top-section">
        <img src={MainImage} alt="Image Title" />
        <section>
          <span>Welcome to Expenses Manager</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <ExpenseForm 
        // onNewExpense={onNewExpenseHandler} 
          />
        </section>
      </section>
      <ExpensesTable
        // expenses = {expenses}
        // onDeleteExpense={onDeleteExpenseHandler}
      />
    </div>
  );
};
export default App;