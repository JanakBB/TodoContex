import { useContext, useState } from "react"
import { TodoContext } from "../Context/TodoContex"

const Input = () => {
    let {todos, addData} = useContext(TodoContext)
    let [inputValue, setInputValue] = useState("");


    const dataP = (e) => {
        setInputValue(e.target.value)
        
    }

    const onClickAddData = () => {
        setInputValue("")
        return addData({
            id: todos.length + 1,
            title: inputValue,
            isAdmin: true});
    }

    return(
        <div className="inputSection">
        <input 
        type="text" 
        value={inputValue}
        placeholder="add to do"
        onChange={dataP}
        />
        <button onClick={onClickAddData}>Submit</button>
        </div>
    )
}

export default Input;