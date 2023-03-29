import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ExpenseForm from './components/ExpenseForm';
import ExpensesTable from './components/ExpensesTable';
import { expenseActions } from './redux/expenses-slice';
import './resources/css/style.css';
import MainImage from './resources/images/m1.png'

let App = () => {

    let dispatch = useDispatch();

    let fetchExpenses = () => {
        axios.get("https://ws-expenses-react-d2a8e-default-rtdb.firebaseio.com/expenses.json"
        ).then(function(response){
            let expenses = [];
            for(let key in response.data){
                // console.log(response.data[key]);
                let expense = response.data[key];
                expense.firebase_id = key;
                expenses.push(expense);
            }
            dispatch(expenseActions.read(expenses));
        }).catch(function(error){

        });
    }

    useEffect(fetchExpenses, []);
    
    // let expenses = [];  // Stateless Array 

    // State Management - useState Hook 
    // let [expenses, setExpeneses] = useState([])   // Array Destructuring

    // let onNewExpenseHandler = (expense) => {
    //     //alert(`Expense Tilte: ${expense.title}`);
    //     //expenses.push(expense);
    //     setExpeneses((prevState) => {
    //         return [expense, ...prevState];
    //     });
    //     console.log(expenses);
    // };

    // let onDeleteExpenseHandler = (id) => {
    //     //alert(id);

    //     let filteredArray = expenses.filter((element) => element.id != id);
    //     setExpeneses(filteredArray);
    // };

    return(
        <div className="content-wrapper">
            <section className="top-section">
                <img src={MainImage} alt="Image Title" />
                <section>
                    <span>Welcome to Expenses Manager</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <ExpenseForm 
                    // onNewExpense = {onNewExpenseHandler}
                    />
                </section>
            </section>
            <ExpensesTable 
            // expenses = {expenses} onDeleteExpense = {onDeleteExpenseHandler} 
            />
        </div>
    );
};
export default App;