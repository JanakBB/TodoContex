import { useContext } from 'react'
import './App.css'
import { TodoContext } from './Context/TodoContex'
import Header from './components/Header'
import Input from './components/Input'

function App() {
  let {todos, deleteApp} = useContext(TodoContext)



  return (
    <>
      <div className="container">
      <h4>Todos</h4>
    <Input />
    <Header />
    <div className='ulSection'>
      {todos.map(todo => (
        <ul>
          <li key={todo.id}>{todo.title}  </li> <button onClick={() => deleteApp(todo.id)}>delete</button>
        </ul>
      ))}
    </div>
      </div>
    </>
  )
}

export default App
