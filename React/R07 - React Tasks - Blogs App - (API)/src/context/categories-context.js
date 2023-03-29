import { createContext, useState } from "react";

export const CategoriesContext = createContext({
    categories: [],
    setCategories: () => {}
});

export const CategoriesContextProvider = (props) => {
    let [categoriesArray, setCategorriesArray] = useState([]);

    return (
      <CategoriesContext.Provider
        value={{
          categories: categoriesArray,
          setCategories: setCategorriesArray,
        }}
      >
        {props.children}
      </CategoriesContext.Provider>
    );
};