import { createContext, useState } from "react";
import { isPropertySignature } from "typescript";
import Mark from "../models/Mark";

export const AppContext = createContext<{
  //Skelton
  marks: Mark[];
  setMarks: (mark: Mark) => void;
  deleteMark: (id: number) => void;
}>({
  marks: [],
  setMarks: () => {},
  deleteMark: () => {},
});

type ProviderObject = { children: React.ReactNode; name?: string };

export const AppContextProvider = (props: ProviderObject) => {
  let [marks, setMarks] = useState<Mark[]>([]);

  let setNewMark = (mark: Mark) => {
    setMarks((prevState: Mark[]) => {
      return [mark, ...prevState];
    });
  };

  let deleteMark = (id: number) => {
    let filteredMarks = marks.filter((element) => element.id != id);
    setMarks(filteredMarks);
  };

  return (
    <AppContext.Provider
      value={{
        marks: marks,
        setMarks: setNewMark,
        deleteMark: deleteMark,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
