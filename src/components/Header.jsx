import { useContext } from "react"
import { TodoContext } from "../Context/TodoContex"

const Header = () => {
    let {todos} = useContext(TodoContext)
    return(
        <h1>This todo length is {todos.length}</h1>
    )
}

export default Header;