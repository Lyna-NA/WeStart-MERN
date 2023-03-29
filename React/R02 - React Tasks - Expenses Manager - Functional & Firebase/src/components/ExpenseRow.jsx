function ExpeneseRow(props){

    let onDeleteExpenseHandler = () =>{
        props.onDeleteExpense(props.expense.firebase_id);
    }

    return(
        <tr>
            <td>{props.expense.title}</td>
            <td>{props.expense.date}</td>
            <td>{props.expense.value}</td>
            <td>{props.expense.description}</td>
            <td>
                <a href="#" onClick={onDeleteExpenseHandler}>Delete</a>
            </td>
        </tr>
    );
}

export default ExpeneseRow;