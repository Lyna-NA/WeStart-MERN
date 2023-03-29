import axios from "axios";

class AuthController {
  async csrfCookie() {
    try {
      axios.defaults.baseURL = "https://tasks-api.mr-dev.tech";
      axios.defaults.withCredentials = true;
      let response = await axios.get("/sanctum/csrf-cookie");
      console.log(response);
      return true;
    } catch (error) {}
    return false;
  }

  async login(email, password) {
    try {
      let csrfRequest = await this.csrfCookie();
      if (csrfRequest) {
        console.log("CSRF-Request TRUE");
        let response = await axios.post("/api/auth/login", {
          email: email,
          password: password,
        });
        console.log(response);
        return true;
      }
    } catch (error) {
      //Error
      alert(error.message);
    }
    return false;
  }

  async register(email, password) {
    try {
      // let response = await axios.post(
      //   `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCgKPmFZ5YfkuQwly5ijMYXlYJUkHUnJls`,
      //   {
      //     email: email,
      //     password: password,
      //     returnSecureToken: true,
      //   }
      // );

      let response = await axios.post("/api/auth/register", {
        email: email,
        password: password,
        // returnSecureToken: true,
      });
      console.log(response.data);
      return {
        status: true,
        message: "Registered Successfully!",
        // token: response.data.idToken,
      };
    } catch (error) {
      //Error
      console.log(error);
      return { status: false, message: "Registration failed. Try again." };
    }
  }
}
export default AuthController;
