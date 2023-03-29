import axios from "axios";

class AuthController {
  async login(email, password) {
    try {
      let response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCgKPmFZ5YfkuQwly5ijMYXlYJUkHUnJls`,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      );
    //   console.log(response.data);
    return {status: true, message: "Logged In Successfully!", token: response.data.idToken}
    } catch (error) {
      //Error
      return { status: false, message: error.response.data.error.message };
    //   console.log(error.response.data);
    }
  }

  async register(email, password) {
    try {
      let response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCgKPmFZ5YfkuQwly5ijMYXlYJUkHUnJls`,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      );
      console.log(response.data);
      return { status: true, message: "Registered Successfully!", token: response.data.idToken };
    } catch (error) {
      //Error
      console.log(error);
      return {status: false, message: "Registration failed. Try again."}
    }
  }
}
export default AuthController;