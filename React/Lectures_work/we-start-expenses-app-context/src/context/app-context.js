import { createContext, useState } from "react";

export const AppContext = createContext({
    expenses: [],
    setExpenses: () => {}
});

export const AppContextProvider = (props) => {
    let [expensesArray, setExpensesArray] = useState([]);
    // let expensesArray = [];
    // let setExpensesArray = (expense) => {
    //     expensesArray = [...expense];
    //     alert(expensesArray.length);
    // }

    return (
      <AppContext.Provider
        value={{
          expenses: expensesArray,
          setExpenses: setExpensesArray,
        }}
      >
        {props.children}
      </AppContext.Provider>
    );
};