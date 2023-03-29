import axios from "axios";
import Category from "../models/Category";

class CategoriesController {
  // CRUD
  async create(category) {
    // let token = localStorage.getItem("token");

    try {
      // let response = await axios.post(
      //   `https://we-start-tasks-app-5c968-default-rtdb.firebaseio.com/categories.json?auth=${token}`,
      //   {
      //     name: category.name,
      //   }
      // );

      axios.defaults.baseURL = "https://tasks-api.mr-dev.tech/api";
      axios.defaults.withCredentials = true;

      let response = await axios.post("/categoreis", {
        name: category.name,
        active: true,
      });

      if (response.status == 201) {
        // return true;
        return response.data.object;
      }
    } catch (error) {
      //Error 4xx-5xx
      // return false;
      alert(error);
      return null;
    }
  }

  async read() {
    // let token = localStorage.getItem("token");
    axios.defaults.baseURL = "https://tasks-api.mr-dev.tech/api";
    axios.defaults.withCredentials = true;

    try {
      let response = await axios.get("/categories");

      // console.log(response.data);
      if (response.data.length != 0) {
        return response.data.data;

        // for (let key in response.data) {
        //   let category = new Category();
        //   category.id = key;
        //   category.name = response.data[key].name;
        //   categories.push(category);
        // }
        // console.log(categories);
        // console.log(response.data.data);
      }
      return [];
    } catch (error) {
      //Error
      return [];
    }
  }

  async update(category) {
    // let token = localStorage.getItem("token");
    axios.defaults.baseURL = "https://tasks-api.mr-dev.tech/api";
    axios.defaults.withCredentials = true;

    try {
      let response = await axios.put(`/categories/${category.id}`, {
        name: category.name,
        active: true,
      });
      return true;
    } catch (error) {
      //Error
      return false;
    }
  }

  async delete(id) {
    axios.defaults.baseURL = "https://tasks-api.mr-dev.tech/api";
    axios.defaults.withCredentials = true;

    // let token = localStorage.getItem("token");
    try {
      let response = await axios.delete(`/categories/${id}`);
      return true;
    } catch (error) {
      //Error
      return false;
    }
  }
}
export default CategoriesController;