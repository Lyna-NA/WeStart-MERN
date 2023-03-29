import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CategoriesController from "../../controllers/categories-controller";
import Category from "../../models/Category";
import { categoreisActions } from "../../redux/categories-slice";

let UpdateCategoryPage = () => {

  let nameRef = useRef();
  // let params = useParams();
  let navigator = useNavigate();
  // let category = null;
  // let [category, setCategory] = useState({});
  // let categories = useSelector((state) => state.categories.data);
  let dispatch = useDispatch();
  let category = useSelector((state) => state.categories.category);
  let categoriesController = new CategoriesController();

  // let getTargetCategory = () => {
  //   let target = categories.find((element) => element.id == params.id);
  //   nameRef.current.value = target.name;
  //   setCategory(target);
  // }

  // useEffect(getTargetCategory, []);

  
  // useEffect(() => nameRef.current.value = category.name, []);

  let setCategoryName = () => {
    nameRef.current.value = category.name;
  }

  useEffect(setCategoryName, []);

  let onSubmitHandler = (event) => {
    event.preventDefault();
    // alert(params.id);
    if(checkData()){
      save();
    }
  }

  let checkData = () => {
    if(nameRef.current.value != ""){
      return true;
    }
    alert("Enter Required Data...");
    return false;
  }

  let save = async () => {
    // alert("update");
    // let updatedCategory = new Category(category.id, nameRef.current.value);
    let updatedCategory = new Category(nameRef.current.value);
    updatedCategory.id = category.id;
    let result = await categoriesController.update(updatedCategory);
    // setCategory(updatedCategory);
    // category.name = nameRef.current.value;  // Wrong
    // alert(category.name);
    if(result){
      dispatch(categoreisActions.update({category: updatedCategory}));
      //nameRef.current.value = "";
      navigator(-1);
    }
  }

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2 mt-3">Update {category.name} </h1>
      </div>

      <form className="row mt-5" onSubmit={onSubmitHandler}>
        <div className="col-md-12">
          <div className="form-outline mb-4">
            <label className="form-label">Category name</label>
            <input
              type="texy"
              id="loginName"
              ref={nameRef}
              // value={category.name}
              className="form-control"
              placeholder="Category name"
            />
          </div>
        </div>

        {/* <div className="col-md-12">
            <div className="form-outline mb-4">
              <label className="form-label">Image For Task</label>
              <input className="form-control" type="file" id="formFile" />
            </div>
          </div> */}

        <div>
          <button type="submit" className="pull-right btn btn-main mb-4">
            Update Category
          </button>
        </div>
      </form>
    </main>
  );
};
export default UpdateCategoryPage;
