import { useRef } from "react";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthController from "../../controllers/auth-controller";
import { authActions } from "../../redux/auth-slice";
import SocialIcons from "./SocialIcons";

let LoginTab = () => {
  let dispatch = useDispatch();
  let navigator = useNavigate();

  let emailRef = useRef();
  let passwordRef = useRef();
  let authController = new AuthController();

  let onSubmitHandler = (event) => {
    event.preventDefault();
    if(checkData()){
      login();
    }
  };

  let checkData = () => {
    if (emailRef.current.value != "" && passwordRef.current.value != "") {
      return true;
    }
    return false;
  };

  let login = async () => {
    let response = await authController.login(emailRef.current.value, passwordRef.current.value);
    // console.log(response);
    if(response.status){
      localStorage.setItem('token', response.token);
      localStorage.setItem('logged_in', true);
      dispatch(authActions.login());
      navigator("/dashboard", { replace: true });
    }else{
      alert(response.message);
    }
  }

  return (
    <Fragment>
      <div
        className="tab-pane  fade show active"
        id="pills-login"
        role="tabpanel"
        aria-labelledby="tab-login"
      >
        <form onSubmit={onSubmitHandler}>
          <SocialIcons />
          <h4 className="mb-5 mt-2 text-center">or</h4>

          <div className="form-outline mb-4">
            <input
              type="email"
              id="loginName"
              className="form-control"
              ref={emailRef}
              placeholder="Email or username"
            />
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              id="loginPassword"
              className="form-control"
              ref={passwordRef}
              placeholder="Password"
            />
          </div>

          <div className="row mb-4">
            <div className="col-md-6 d-flex justify-content-center">
              <div className="form-check mb-3 mb-md-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="loginCheck"
                  checked
                />
                <label className="form-check-label" for="loginCheck">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div className="col-md-6 d-flex justify-content-center">
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          <button type="submit" className="btn btn-main btn-block mb-4">
            Sign in
          </button>

          <div className="text-center">
            <p>
              Not a member? <a href="#!">Register</a>
            </p>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
export default LoginTab;
