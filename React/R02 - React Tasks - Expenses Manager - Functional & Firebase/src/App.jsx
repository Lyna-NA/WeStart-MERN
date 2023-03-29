import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpensesTable from "./components/ExpensesTable";
import "./resources/css/style.css";
import MainImage from "./resources/images/m1.png";

let App = () => {
  // let expenses = [];  // Stateless Array

  // State Management - useState Hook
  let [expenses, setExpeneses] = useState([]); // Array Destructuring

  let onNewExpenseHandler = (expense) => {
    saveExpense(expense);
    //alert(`Expense Tilte: ${expense.title}`);
    //expenses.push(expense);
    // setExpeneses((prevState) => {
    //     return [expense, ...prevState];
    // });
    // console.log(expenses);
  };

  let saveExpense = (expense) => {
    fetch(
      "https://ws-expenses-react-d2a8e-default-rtdb.firebaseio.com/expenses.json",
      {
        method: "POST",
        body: JSON.stringify(expense), //ُEncoding => JS obj to String
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
      }
    )
      .then(function (response) {
        return response.json(); //decoding => String json to json obj
      })
      .then(function (jsonData) {
    
        // console.log(jsonData);
        // console.log(jsonData["name"]);
        expense.firebase_id = jsonData["name"];
        setExpeneses((prevState) => {
          return [expense, ...prevState];
        });
        console.log(expenses);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  let onDeleteExpenseHandler = (firebaseId) => {
    // alert(id);
    // let filteredArray = expenses.filter((element) => element != id);
    // setExpeneses(filteredArray);
    fetch(
      `https://ws-expenses-react-d2a8e-default-rtdb.firebaseio.com/expenses/${firebaseId}.json`,
      {
        method: "DELETE",
        headers: {
          accept: "application/json",
        },
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        let filteredArray = expenses.filter(
          (element) => element.firebase_id != firebaseId
        );
        setExpeneses(filteredArray);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  let fetchExpenses = () => {
    fetch(
        "https://ws-expenses-react-d2a8e-default-rtdb.firebaseio.com/expenses.json",
        {
            method: "Get",
            headers: {
                accept: "application/json",
            },
        }

    ).then(function (response){
        return response.json();

    }).then(function (jsonData){

        // console.log(jsonData);
        let expensesArray = [];

        for(let key in jsonData){
            let expense = jsonData[key];
            expense.firebase_id = key;
            // console.log(expense);
            expensesArray.push(expense);
            // console.log(key);
            // console.log(jsonData[key]);
        }
        //console.log(expensesArray);
        setExpeneses(expensesArray);

    }).catch(function (error){
        console.log(error);
    });
  }

   // fetchExpenses();
   useEffect(fetchExpenses, []);

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
          <ExpenseForm onNewExpense={onNewExpenseHandler} />
        </section>
      </section>
      <ExpensesTable
        expenses={expenses}
        onDeleteExpense={onDeleteExpenseHandler}
      />
    </div>
  );
};
export default App;
