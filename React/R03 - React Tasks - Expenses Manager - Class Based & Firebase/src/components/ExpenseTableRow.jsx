import React from "react";

class ExpenseTableRow extends React.Component{
    
    onDeleteExpenseHandler = () =>{
        this.props.onDeleteExpense(this.props.expense.firebase_id);
    }

    render(){
        return(
            <tr>
                <td>{this.props.expense.title}</td>
                <td>{this.props.expense.date}</td>
                <td>{this.props.expense.price}</td>
                <td>{this.props.expense.description}</td>
                <td><a href="#" onClick={this.onDeleteExpenseHandler}>Delete</a></td>
            </tr>
        )
    }

}
export default ExpenseTableRow;