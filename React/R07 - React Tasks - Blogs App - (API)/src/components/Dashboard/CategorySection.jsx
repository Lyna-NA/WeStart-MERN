import { useContext } from "react";
import { CategoriesContext } from "../../context/categories-context";
import CategoriesController from "../../controllers/categories-controller";

let CategorySection = (props) => {

  let categoriesContext = useContext(CategoriesContext);
  let categoriesController = new CategoriesController();

  let onDeleteBlogHandler = async () => {

    let result = await categoriesController.delete(props.category.id);
    console.log("deleted? :" + result);

    if(result){
      let filteredArray = categoriesContext.categories.filter(
        (element) => element.id != props.category.id
      );
      categoriesContext.setCategories(filteredArray);
    }
  }

  return (
    <section>
      <span>{props.category.name}</span>
      <span>{props.category.id}</span>
      <span>23 Blog</span>
      <button onClick={onDeleteBlogHandler}>
        Delete
      </button>
    </section>
  );
}
export default CategorySection;