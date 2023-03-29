import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { categoreisActions } from "../../redux/categories-slice";

let CategoryRow = (props) => {
  let dispatch = useDispatch();
  let navigator = useNavigate();

  let onDeleteHandler = () => {
    dispatch(categoreisActions.delete(props.category.id));
  };

  let onUpdateHandler = () => {
    dispatch(categoreisActions.edit(props.category.id));
    // navigator(`/dashboard/categories/${props.category.id}/update`);
    navigator(`/dashboard/categories/update`);
  }

  return (
    <tr>
      <th scope="row">{props.category.id}</th>
      <td>{props.category.name}</td>
      <td>
        <div class="btn-group" role="group" aria-label="Basic example">
          {/* <NavLink to={`/dashboard/categories/${props.category.id}/update`}>
          <button type="button" class="btn btn-warning">
            Update
          </button>
        </NavLink> */}
          <button
            type="button"
            class="btn btn-warning"
            onClick={onUpdateHandler}
          >
            Update
          </button>
          <button
            type="button"
            class="btn btn-danger"
            onClick={onDeleteHandler}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};
export default CategoryRow;
