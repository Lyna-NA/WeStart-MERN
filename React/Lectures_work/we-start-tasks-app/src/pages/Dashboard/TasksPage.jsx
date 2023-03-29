import { Fragment } from "react";

let TasksPage = () => {
  return (
    <Fragment>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Dashboard</h1>

          <div className=" mb-2 mb-md-0">
            <div className="d-flex align-items-center ms-3 ms-lg-4"></div>
            <div className="d-flex align-items-center ms-3 ms-lg-4"></div>
          </div>

          <ul className="list-inline">
            <li className="list-inline-item">
              {" "}
              <select
                className=" dropdown form-control pull-right"
                placeholder="Filter By status"
                autocomplete="off"
              >
                <option value="">Filter By status</option>
                <option value="4">Done</option>
                <option value="1">In Progress</option>
                <option value="3">Complete</option>
                <option value="5">Canceled</option>
              </select>
            </li>
            <li className="list-inline-item mt-3">
              {" "}
              <select
                className=" dropdown form-control pull-right"
                placeholder="Filter By status"
                autocomplete="off"
              >
                <option value="">Filter By category</option>
                <option value="4">Category 1</option>
                <option value="1"> Category 2</option>
                <option value="3">Category 3</option>
                <option value="5">Category 4</option>
              </select>
            </li>
          </ul>
        </div>

        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card task card">
              <img src="img/3.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Task title can be here</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {" "}
                  <span data-feather="calendar"></span> 07-10-2022{" "}
                  <span className="main-color">To </span> 23-10-2022
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <hr />
                <span className="btn badge-light-warning status-btn Wating">
                  Wating
                </span>

                <a href="#" className="btn btn-bg-gray pull-right">
                  <span data-feather="arrow-right"></span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card task card">
              <img src="img/1.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Task title can be here</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {" "}
                  <span data-feather="calendar"></span> 07-10-2022{" "}
                  <span className="main-color">To </span> 23-10-2022
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <hr />
                <span className="btn badge-light-primary inprogress">
                  In Progress
                </span>

                <a href="#" className="btn btn-bg-gray pull-right">
                  <span data-feather="arrow-right"></span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card task card">
              <img src="img/login.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Task title can be here</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {" "}
                  <span data-feather="calendar"></span> 07-10-2022{" "}
                  <span className="main-color">To </span> 23-10-2022
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <hr />
                <span className="btn badge-light-primary badge-light-danger ">
                  Canceled
                </span>

                <a href="#" className="btn btn-bg-gray pull-right">
                  <span data-feather="arrow-right"></span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card task card">
              <img src="img/login.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Task title can be here</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {" "}
                  <span data-feather="calendar"></span> 07-10-2022{" "}
                  <span className="main-color">To </span> 23-10-2022
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <hr />
                <span className="btn badge-light-warning status-btn Wating">
                  Wating
                </span>

                <a href="#" className="btn btn-bg-gray pull-right">
                  <span data-feather="arrow-right"></span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card task card">
              <img src="img/2.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Task title can be here</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {" "}
                  <span data-feather="calendar"></span> 07-10-2022{" "}
                  <span className="main-color">To </span> 23-10-2022
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <hr />
                <span className="btn badge-light-primary inprogress">
                  In Progress
                </span>

                <a href="#" className="btn btn-bg-gray pull-right">
                  <span data-feather="arrow-right"></span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card task card">
              <img src="img/1.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Task title can be here</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {" "}
                  <span data-feather="calendar"></span> 07-10-2022{" "}
                  <span className="main-color">To </span> 23-10-2022
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <hr />
                <span className="btn badge-light-warning status-btn Wating">
                  Wating
                </span>

                <a href="#" className="btn btn-bg-gray pull-right">
                  <span data-feather="arrow-right"></span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card task card">
              <img src="img/3.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Task title can be here</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {" "}
                  <span data-feather="calendar"></span> 07-10-2022{" "}
                  <span className="main-color">To </span> 23-10-2022
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <hr />
                <span className="btn badge-light-primary inprogress">
                  In Progress
                </span>

                <a href="#" className="btn btn-bg-gray pull-right">
                  <span data-feather="arrow-right"></span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card task card">
              <img src="img/login.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Task title can be here</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {" "}
                  <span data-feather="calendar"></span> 07-10-2022{" "}
                  <span className="main-color">To </span> 23-10-2022
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <hr />
                <span className="btn badge-light-primary badge-light-danger ">
                  Canceled
                </span>

                <a href="#" className="btn btn-bg-gray pull-right">
                  <span data-feather="arrow-right"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card task card">
              <img src="img/1.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Task title can be here</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {" "}
                  <span data-feather="calendar"></span> 07-10-2022{" "}
                  <span className="main-color">To </span> 23-10-2022
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <hr />
                <span className="btn btn-light-main status-btn Complete">
                  Complete
                </span>

                <a href="#" className="btn btn-bg-gray pull-right">
                  <span data-feather="arrow-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};
export default TasksPage;
