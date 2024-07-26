import { useContext } from "react"
import { TodoContext } from "../Context/TodoContex"

const Header = () => {
    let {todos} = useContext(TodoContext)
    return(
        <p>This todo length is {todos.length}</p>
    )
}

export default Header;