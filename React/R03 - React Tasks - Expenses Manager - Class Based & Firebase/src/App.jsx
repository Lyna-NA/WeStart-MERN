import React from "react";
import ExpensesTable from "./components/ExpensesTable";
import ExpenseForm from "./components/ExpenseForm";
import "./resources/css/style.css";
import MainImage from "./resources/images/m1.png";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = { expenses: [] };
  }

  // onNewExpenseHandler = (newExpense) => {
  //   // this.setState({ expenses: [newExpense, ...this.state.expenses] });  // valid
  //   // A better way:
  //   this.setState((prevState) => ({
  //     expenses: [newExpense, ...prevState.expenses],
  //   }));
  // }

  onNewExpenseHandler(newExpense) {
    axios
      .post(
        "https://ws-expenses-react-d2a8e-default-rtdb.firebaseio.com/expenses.json",
        newExpense,
        {
          headers: { accept: "application/json" },
        }
      )
      .then((response) => {
        //console.log(response.data);
        newExpense.firebase_id = response.data.name;
        this.setState((prevState) => ({
          expenses: [newExpense, ...prevState.expenses],
        }));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }

  onDeleteExpenseHandler = (firebaseId) => {
    axios
      .delete(
        `https://ws-expenses-react-d2a8e-default-rtdb.firebaseio.com/expenses/${firebaseId}.json`,
        {
          headers: {
            accept: "application/json",
          },
        }
      )
      .then((response) => {
        let filteredExpenses = this.state.expenses.filter(
          (element) => element.firebase_id != firebaseId
        );
        this.setState({ expenses: filteredExpenses });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect(action, [])
  componentDidMount() {
    console.log("componentDidMount");
    this.fetchExpenses();
  }

  fetchExpenses = () => {
    axios
      .get(
        `https://ws-expenses-react-d2a8e-default-rtdb.firebaseio.com/expenses.json`,
        {
          headers: {
            accept: "application/json",
          },
        }
      )
      .then((response) => {
        //console.log(response.data);
        let expensesArray = [];
        for (let key in response.data) {
          let expense = response.data[key];
          expense.firebase_id = key;
          expensesArray.push(expense);
        }
        this.setState({ expenses: expensesArray });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="content-wrapper">
        <section className="top-section">
          <img src={MainImage} alt="Image Title" />
          <section>
            <span>Welcome to Expenses Manager</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <ExpenseForm onNewExpense={this.onNewExpenseHandler.bind(this)} />
          </section>
        </section>
        <section className="bottom-section">
          <ExpensesTable
            expenses={this.state.expenses}
            onDeleteExpense={this.onDeleteExpenseHandler}
          />
        </section>
      </div>
    );
  }
}
export default App;
