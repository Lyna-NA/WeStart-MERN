import { Fragment, useRef, FormEvent } from "react";

let NewPostPage = () => {
  let titleRef = useRef<HTMLInputElement>(null);
  let infoRef = useRef<HTMLTextAreaElement>(null);

  let onFormSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
  }

  return (
    <Fragment>
      <div>
        <form onSubmit={onFormSubmitHandler}>
          <div>
            <label>Title</label>
            <input type="text" ref={titleRef} />
          </div>
          <div>
            <label>Info</label>
            <textarea
              className=""
              placeholder=""
              maxLength={350}
              rows={5}
              ref={infoRef}
            ></textarea>
          </div>
          <button className="" type="submit">
            Add
          </button>
        </form>
      </div>
    </Fragment>
  );
};
export default NewPostPage;