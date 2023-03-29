import axios from "axios";
import Category from "../models/Category";

class CategoriesController {
  //CRUD
  async create(category) {
    try {
      let response = await axios.post(
        "https://r07---react-tasks---blogs-app-default-rtdb.firebaseio.com/categories.json",
        {
          name: category.name,
        }
      );
      // console.log("response");
      // console.log(response);
      if (response.status == 200) {
        return response.data.name;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async read() {
    let response = await axios.get(
      "https://r07---react-tasks---blogs-app-default-rtdb.firebaseio.com/categories.json"
    );
    if(response.data != null && response.data.length != 0){
        let categories = [];
        for(let key in response.data){
            let category = new Category();
            category.id = key;
            category.name = response.data[key].name;
            categories.push(category);
            // console.log("pushedCat");
            // console.log(category);
        }
        // console.log("read controller");
        // console.log(categories);
        return categories;
    }
  }

  async delete(id) {
    try {
        let response = await axios.delete(
          `https://r07---react-tasks---blogs-app-default-rtdb.firebaseio.com/categories/${id}.json`
        );
        return true;
    } catch (error) {
        return false;
    }
  }
}
export default CategoriesController;