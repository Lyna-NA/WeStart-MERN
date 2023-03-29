import { clear } from "@testing-library/user-event/dist/clear";
import { useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import { CategoriesContext } from "../../context/categories-context";
import CategoriesController from "../../controllers/categories-controller";
import Category from "../../models/Category";

let NewCategoryPage = () => {
  
  let categoriesContext = useContext(CategoriesContext);
  let categoriesController = new CategoriesController();

  let categoryNameRef = useRef();

  let onSubmitHandler = (event) => {
    event.preventDefault();
    if(checkData()){
      saveCategory();
    }
  }

  let checkData = () => {
    if (categoryNameRef.current.value != "") {
      return true;
    }
    alert("Please,\nEnter required data.");
    return false;
  }

  let saveCategory = async() => {
    let category = new Category(categoryNameRef.current.value);
    // console.log(category);

    let newCategoryId = await categoriesController.create(category);
    if(newCategoryId != null){
      category.id = newCategoryId;
      console.log("--------------");
      console.log("save category");
      console.log(category);
      console.log("--------------");
      categoriesContext.setCategories((prevState) => {
        return [category, ...prevState];
      });
      clear();
    }
  }

  let clear = () => {
    categoryNameRef.current.value = "";
  }

  return (
    <div className="new-category">
      <span>Add new category</span>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="">Category name</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Ex:  Development"
            ref={categoryNameRef}
          />
        </div>
        <div>
          <button><NavLink to={"/dashboard/categories"}>Back</NavLink></button>
          <button type="submit">Create Category</button>
        </div>
      </form>
    </div>
  );
}
export default NewCategoryPage;