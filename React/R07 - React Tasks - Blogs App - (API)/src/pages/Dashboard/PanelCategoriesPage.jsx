import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CategorySection from "../../components/Dashboard/CategorySection";
import { CategoriesContext } from "../../context/categories-context";
import CategoriesController from "../../controllers/categories-controller";

let PanelCategoriesPage = () => {
  let categoriesContext = useContext(CategoriesContext);
  let categoriesController = new CategoriesController();

  let categories = categoriesContext.categories;
  console.log("categories: ");
  console.log(categories);

  let fetchData = async () => {
    if (categories.length == 0) {
      let categories_fb = await categoriesController.read();
      console.log("categories_fb");
      console.log(categories_fb);
      categoriesContext.setCategories(categories_fb);
    }
  };

  useEffect(() => {fetchData()}, []);

  return (
    <div className="all-categories">
      <span>All Categories</span>
      <section>
        {categories?.map((element) => (
          <CategorySection
            /*key={element.id}*/
            key={element.id}
            category={element}
          />
        ))}
        <section>
          <NavLink
            to={"/dashboard/categories/new"}
            className="new-category-nav"
          >
            <span>Create new category</span>
          </NavLink>
        </section>
      </section>
    </div>
  );
};
export default PanelCategoriesPage;
