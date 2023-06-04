import { useEffect, useState } from "react"
import { NewToDoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"
import "./styles.css"



export default function App(){
  const [toDos, setToDos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(toDos))
  }, [toDos])

  function addToDo(title){
    setToDos(currentToDos =>{
      return [
        ...currentToDos, 
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }
  
  function toggleToDo(id,completed){
    setToDos(currentToDos => {
      return currentToDos.map(toDo => {
        if(toDo.id === id){
          return { ...toDo, completed}
        }

        return toDo
      })
    })
  }
  
  function deleteToDo(id){
    setToDos(currentToDos =>{
      return currentToDos.filter(toDo => toDo.id !== id)
    })
  }


  return (
    <>
  <NewToDoForm onSubmit={addToDo}/>
  <h1 className="header">To Do List</h1>
  <TodoList toDos={toDos} toggleToDo={toggleToDo} deleteToDo={deleteToDo}/>
  </>
  )
}
