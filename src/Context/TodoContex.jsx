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

    const deleteApp = (id) => {
         return setTodos(todos.filter(todo => todo.id !== id));
    }

    return(
        <TodoContext.Provider value={{todos, addData, deleteApp}}>{children}</TodoContext.Provider>
    )
}

export default TodoProvider;