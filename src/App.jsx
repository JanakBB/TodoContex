import { useContext } from 'react'
import './App.css'
import { TodoContext } from './Context/TodoContex'
import Header from './components/Header'
import Input from './components/Input'

function App() {
  let {todos} = useContext(TodoContext)

  return (
    <>
    <h1>Todos</h1>
    <Input />
    <Header />
    <div>
      {todos.map(todo => (
        <ul>
          <li>{todo.title}</li>
        </ul>
      ))}
    </div>
    </>
  )
}

export default App
