let TaskDetailsPage = () => {
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
            <button type="button" className="btn btn-sm btn-outline-secondary">
              in progress
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary active"
            >
              Complete
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Waiteing
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Canceled
            </button>
          </div>
          <button type="button" className="btn btn-light-main btn">
            <span data-feather="edit-3"></span> Edit
          </button>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <img src="img/1.png" className="img-fluid rounded de-img" />
        </div>
        <div className="col-md-6  mt-5">
          <div className=" mb-3">
            <span data-feather="bookmark" className="main-color"></span>{" "}
            <strong>Title:</strong> Task title
          </div>
          <div className="mb-3">
            <span data-feather="layers" className="main-color"></span>{" "}
            <strong>Category:</strong> category title
          </div>
          <div className="">
            <span data-feather="calendar" className="main-color"></span>{" "}
            <strong>Date:</strong> 07-10-2020 to 07-10-2022
          </div>
        </div>

        <div className="row mt-5">
          <div className="task-info">
            <p>
              he standard Lorem Ipsum passage, used since the 1500s Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <strong>
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
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};
export default TaskDetailsPage;
