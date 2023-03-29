import { useSelector } from 'react-redux';
import ExpeneseRow from './ExpenseRow';

export default function ExpensesTable(props){

    let expenses = useSelector((state) => state.expenses);

    return(
        <section className="bottom-section">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Value</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((element) => (
                        <ExpeneseRow key={element.id} 
                        expense = {element} 
                        // onDeleteExpense = {props.onDeleteExpense} 
                        />
                    ))}
                </tbody>
            </table>
        </section>
    );
}