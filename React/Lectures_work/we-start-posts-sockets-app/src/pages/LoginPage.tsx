import { FormEvent, useRef } from "react";
import "../resources/css/login.css";

let LoginPage = () => {
  let emailRef = useRef<HTMLInputElement>(null);
  let passwordRef = useRef<HTMLInputElement>(null);

  let onFormSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
  }

  return (
    <div id="login-form-wrap">
      <h2>Login</h2>
      <form id="login-form" onSubmit={onFormSubmitHandler}>
        <p>
          <input
            type="email"
            id="email"
            name="email"
            ref={emailRef}
            placeholder="Email Address"
            required
          />
          <i className="validation">
            <span></span>
            <span></span>
          </i>
        </p>
        <p>
          <input
            type="text"
            id="password"
            name="password"
            ref={passwordRef}
            placeholder="Password"
            required
          />
          <i className="validation">
            <span></span>
            <span></span>
          </i>
        </p>
        <p>
          <input type="submit" id="login" value="Login" />
        </p>
      </form>
      <div id="create-account-wrap">
        <p>
          Not a member? <a href="#">Create Account</a>
        </p>
      </div>
    </div>
  );
};
export default LoginPage;