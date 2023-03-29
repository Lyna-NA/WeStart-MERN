import axios from "axios";

class CategoriesController {
  //CRUD
  async create(category) {
    try {
      axios.defaults.baseURL = "https://tasks-api.mr-dev.tech/api";
      axios.defaults.withCredentials = true;

      let response = await axios.post("/categories", {
        name: category.name,
      });

      if (response.status == 200) {
        return response.data.object;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async read() {
    axios.defaults.baseURL = "https://tasks-api.mr-dev.tech/api";
    axios.defaults.withCredentials = true;

    try {
      let response = await axios.get("/categories");

      if (response.data.length != 0) {
        return response.data.data;
      }
      return [];
    } catch (error) {
      return [];
    }
  }

  async delete(id) {
    axios.defaults.baseURL = "https://tasks-api.mr-dev.tech/api";
    axios.defaults.withCredentials = true;

    try {
      let response = await axios.delete(`categories/${id}`);
      return true;
    } catch (error) {
      return false;
    }
  }
}
export default CategoriesController;
