import { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ({children}) => {
    let [todos, setTodos] = useState([{
        id: 1, title: "JavaScript", isAdmin: false
    }]);

    const addData = (dataInput) => {
        setTodos((prevData) => {
          return([...prevData, dataInput])
        })
      }

    return(
        <TodoContext.Provider value={{todos, addData}}>{children}</TodoContext.Provider>
    )
}

export default TodoProvider;