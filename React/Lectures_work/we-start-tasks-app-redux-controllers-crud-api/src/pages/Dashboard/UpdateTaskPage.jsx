import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import TasksController from "../../controllers/tasks-controller";
import Task from "../../models/Task";
import { tasksActoins } from "../../redux/tasks-slice";

let UpdateTaskPage = () => {
  let categories = useSelector((state) => state.categories.data);
  let task = useSelector((state) => state.tasks.item);
  let dispatch = useDispatch();
  let tasksController = new TasksController();
  let navigator = useNavigate();

  let nameRef = useRef();
  let categoryRef = useRef();
  let briefDetailsRef = useRef();
  let detailsRef = useRef();
  let fromDateRef = useRef();
  let toDateRef = useRef();
  let imageRef = useRef();

  let onSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(imageRef);
    // console.log(imageRef.current.files.length);
    
    if (checkData()) {
      save();
    }
  };

  let checkData = () => {
    if (
      nameRef.current.value != "" &&
      categoryRef.current.value != "" &&
      briefDetailsRef.current.value != "" &&
      detailsRef.current.value != "" &&
      fromDateRef.current.value != "" &&
      toDateRef.current.value != ""
    ) {
      return true;
    }
    alert("Enter required data!");
    return false;
  };

  let save = async () => {
    //TODO: get new Task Object
    let category = categories.find(
      (element) => (element.id = categoryRef.current.value)
    );
    let updatedTask = new Task(
      nameRef.current.value,
      category.id,
      briefDetailsRef.current.value,
      detailsRef.current.value,
      fromDateRef.current.value,
      toDateRef.current.value,
      imageRef.current.files[0] ?? null
    );
    updatedTask.id = task.id;

    let response = await tasksController.update(task);
    alert(response.message);
    if (response.status) {
      dispatch(tasksActoins.update(response.object));
      navigator(-1);
    }
  };

  let setFormData = () => {
    nameRef.current.value = task.name;
    categoryRef.current.value = task.category_id;
    imageRef.current.value = task.image;
    briefDetailsRef.current.value = task.brief_details;
    detailsRef.current.value = task.details;
    fromDateRef.current.value = task.from_date;
    toDateRef.current.value = task.to_date;
  }
  useEffect(setFormData, []);

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2 mt-3">Update Task </h1>
      </div>

      <form className="row mt-5" onSubmit={onSubmitHandler}>
        <div className="col-md-12">
          <div className="form-outline mb-4">
            <label className="form-label">Task name</label>
            <input
              type="texy"
              id="loginName"
              className="form-control"
              placeholder="Task name"
              ref={nameRef}
            />
          </div>
        </div>

        <div className="col-md-12">
          <div className="form-outline mb-4">
            <label className="form-label">Task Category</label>
            <select className="dropdown form-control" ref={categoryRef}>
              {categories.map((element) => (
                <option value={element.id} key={element.id}>
                  {element.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="col-md-12">
          <div className="form-outline mb-4">
            <label className="form-label">Image For Task</label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              ref={imageRef}
            />
          </div>
        </div>

        <div className="col-md-12">
          <label className="form-label">Task Brief Details</label>
          <div className="form-outline mb-4">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              ref={briefDetailsRef}
            ></textarea>
          </div>
        </div>

        <div className="col-md-12">
          <label className="form-label">Task Details</label>
          <div className="form-outline mb-4">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              ref={detailsRef}
            ></textarea>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-outline mb-4">
            <label className="form-label">From date</label>
            <input
              type="date"
              className="form-control"
              placeholder="From Date"
              ref={fromDateRef}
            />
          </div>
        </div>

        <div className="col-md-6">
          <label className="form-label">To date</label>
          <div className="form-outline mb-4">
            <input
              type="date"
              className="form-control"
              placeholder="To Date"
              ref={toDateRef}
            />
          </div>
        </div>

        <div>
          <button type="submit" className="pull-right btn btn-main mb-4">
            Add New Task
          </button>
        </div>
      </form>
    </main>
  );
};
export default UpdateTaskPage;
