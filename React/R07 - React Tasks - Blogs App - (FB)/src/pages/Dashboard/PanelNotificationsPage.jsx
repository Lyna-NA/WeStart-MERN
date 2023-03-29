import img from "../../resources/images/img.png";

let PanelNotificationsPage = () => {
  return (
    <div className="panel-notify">
      <span>Notifications</span>
      <span>Recent Notification</span>
      <section>
        <section>
          <div>
            <img src={img} alt="An image here" />
          </div>
          <div>
            <span>Asmaa H. Madi</span>
            <span>Project name 12h</span>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod.
            </p>
          </div>
        </section>
        <section>
          <div>
            <img src={img} alt="An image here" />
          </div>
          <div>
            <span>Asmaa H. Madi</span>
            <span>Project name 12h</span>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod.
            </p>
          </div>
        </section>
        <section>
          <div>
            <img src={img} alt="An image here" />
          </div>
          <div>
            <span>Asmaa H. Madi</span>
            <span>Project name 12h</span>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod.
            </p>
          </div>
        </section>
        <div>
          <button>Load More</button>
        </div>
      </section>
    </div>
  );
};
export default PanelNotificationsPage;
