import axios from "axios";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { expenseActions } from "../redux/expenses-slice";

function ExpeneseRow(props){
    
    let dispatch = useDispatch();

    let onDeleteExpenseHandler = () =>{
       Swal.fire({
        icon: "question",
        title: "Delete Expense!",
        text: "Are you sure?",
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonColor: "#CF0A0A",
        cancelButtonColor: "#B2B2B2",
        confirmButtonText: "Delete",
        cancelButtonText: "Deny",
       }).then((result) => {
        if(result.isConfirmed){
            deleteExpense();
        }
       })
    }

    let deleteExpense = () => {
        axios
        .delete(`https://ws-expenses-react-d2a8e-default-rtdb.firebaseio.com/expenses/${props.expense.firebase_id}.json`
        ).then(function(response){
         // props.onDeleteExpense(props.expense.id);
            dispatch(expenseActions.delete(props.expense.id));
            Swal.fire({
                icon: "success",
                title: "Done!",
                text: "Expense deleted successfully",
                timer: 2000,
                showConfirmButton: false,
            })
        }).catch(function(error){});
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