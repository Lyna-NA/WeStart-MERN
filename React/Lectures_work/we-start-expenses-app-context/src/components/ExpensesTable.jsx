import { useContext } from 'react';
import { AppContext } from '../context/app-context';
import ExpeneseRow from './ExpenseRow';

export default function ExpensesTable(){
    let appContext = useContext(AppContext);

    return (
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
            {appContext.expenses.map((element) => (
              <ExpeneseRow
                key={element.id}
                expense={element}
                // onDeleteExpense={props.onDeleteExpense}
              />
            ))}
          </tbody>
        </table>
      </section>
    );
}