import axios from "axios";
import Category from "../models/Category";

class CategoriesController{
    // CRUD
    async create(category){
        try{
            let response = await axios.post(
                "https://we-start-tasks-app-5c968-default-rtdb.firebaseio.com/categories.json",
                {
                  name: category.name,
                }
            );

            console.log("Hi");
            console.log(response);
            if(response.status == 200){
                // return true;
                return response.data.name;
            }
        }catch(error){
            //Error 4xx-5xx
            // return false;
            return null;
        }
    }

    async read(){
        try{
            let response = await axios.get(
                "https://we-start-tasks-app-5c968-default-rtdb.firebaseio.com/categories.json",
            );
            // console.log(response.data);
            if(response.data.length != 0){
                let categories = [];
                for(let key in response.data){
                    let category = new Category();
                    category.id = key;
                    category.name = response.data[key].name;
                    categories.push(category);
                }
                console.log(categories);
                return categories;
            }
            return [];
        }catch(error){
            //Error
            return [];
        }
    }

    async update(category){
        try{
            let response = await axios.put(
                `https://we-start-tasks-app-5c968-default-rtdb.firebaseio.com/categories/${category.id}.json`,
                {
                    name: category.name,
                }
            );
            return true;
        }catch(error){
            //Error
            return false;
        }
    }

    async delete(id){
        try{
            let response = await axios.delete(
              `https://we-start-tasks-app-5c968-default-rtdb.firebaseio.com/categories/${id}.json`
            );
            return true;
        }catch(error){
            //Error
            return false;
        }
    }
}
export default CategoriesController;