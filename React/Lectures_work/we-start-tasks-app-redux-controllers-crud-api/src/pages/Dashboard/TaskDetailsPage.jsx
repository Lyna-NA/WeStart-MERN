import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TasksController from "../../controllers/tasks-controller";
import { tasksActoins } from "../../redux/tasks-slice";

let TaskDetailsPage = () => {
  // let [task, setTask] = useState(useSelector((state) => state.tasks.item));

  let task = useSelector((state) => state.tasks.item);
  let dispatch = useDispatch();
  let tasksController = new TasksController();
  let navigator = useNavigate();

  let updateTaskStatusHandler = async (status) => {
    // let updatedTask = task;
    // updatedTask.status = status;
    // setTask({ ...updatedTask });
    // setTask((prevState) => {
    //   prevState.status = status;
    //   return { ...prevState };
    // });
    // task.status = status;
    // dispatch(tasksActoins.updateStatus({task: task, status: status}));

    let updatedTask = { ...task };
    updatedTask.status = status;
    let result = await tasksController.update(updatedTask);
    if (result) {
      dispatch(tasksActoins.updateStatus(updatedTask));
    }
  };

  let editTaskHandler = () => {
    //dispatch(tasksActoins.seItem(task));  // I had already set it before navigating to this page (when I was in the TaskItem Page).
    navigator(`/dashboard/tasks/update`);
  };

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>

        <div className=" mb-2 mb-md-0">
          <div className="d-flex align-items-center ms-3 ms-lg-4"></div>
          <div className="d-flex align-items-center ms-3 ms-lg-4"></div>
        </div>

        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button
              type="button"
              onClick={() => updateTaskStatusHandler("In Progress")}
              className={`btn btn-sm btn-outline-secondary ${
                task.status == "In Progress" && "active"
              }`}
            >
              In Progress
            </button>
            <button
              type="button"
              onClick={() => updateTaskStatusHandler("Done")}
              className={`btn btn-sm btn-outline-secondary ${
                task.status == "Done" && "active"
              }`}
            >
              Done
            </button>
            <button
              type="button"
              onClick={() => updateTaskStatusHandler("Complete")}
              className={`btn btn-sm btn-outline-secondary ${
                task.status == "Complete" && "active"
              }`}
            >
              Complete
            </button>
            <button
              type="button"
              onClick={() => updateTaskStatusHandler("Waiting")}
              className={`btn btn-sm btn-outline-secondary ${
                task.status == "Waiting" && "active"
              }`}
            >
              Waiting
            </button>
            <button
              type="button"
              onClick={() => updateTaskStatusHandler("Canceled")}
              className={`btn btn-sm btn-outline-secondary ${
                task.status == "Canceled" && "active"
              }`}
            >
              Canceled
            </button>
          </div>
          <button
            type="button"
            onClick={editTaskHandler}
            className="btn btn-light-main btn"
          >
            <span data-feather="edit-3"></span> Edit
          </button>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <img src={task.img_url} className="img-fluid rounded de-img" />
        </div>
        <div className="col-md-6  mt-5">
          <div className=" mb-3">
            <span data-feather="bookmark" className="main-color"></span>{" "}
            <strong>Title:</strong> {task.name}
          </div>
          <div className="mb-3">
            <span data-feather="layers" className="main-color"></span>{" "}
            <strong>Category:</strong> {task.category_name}
          </div>
          <div className="">
            <span data-feather="calendar" className="main-color"></span>{" "}
            <strong>Date:</strong> {task.from_date} to {task.to_date}
          </div>
        </div>

        <div className="row mt-5">
          <div className="task-info">
            <h6>{task.brief_details}</h6>
            <p>{task.details}</p>
            {/* <strong>
              Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
              Cicero in 45 BC:
            </strong>
            <ul>
              <li>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem{" "}
              </li>
              <li>accusantium doloremque laudantium, totam rem aperiam.</li>
              <li> eaque ipsa quae ab illo inventore veritatis et quasi </li>
              <li>architecto beatae vitae dicta sunt explicabo. </li>
              <li>Nemo enim ipsam voluptatem quia voluptas sit </li>
            </ul> */}
          </div>
        </div>
      </div>
    </main>
  );
};
export default TaskDetailsPage;
