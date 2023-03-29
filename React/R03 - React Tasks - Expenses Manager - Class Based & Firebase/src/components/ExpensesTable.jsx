import React from "react";
import ExpenseTableRow from "./ExpenseTableRow";

class ExpensesTable extends React.Component{

    render(){
        return (
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
              {this.props.expenses.map((element) => (
                <ExpenseTableRow
                  key={element.id}
                  expense={element}
                  onDeleteExpense={this.props.onDeleteExpense}
                />
              ))}
            </tbody>
          </table>
        );
    }
}
export default ExpensesTable;