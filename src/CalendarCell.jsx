import { useState } from "react"

export function CalendarCell() {
  
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (todos.length < 4) {
      setTodos(currentTodos => {
        return [...currentTodos,
        {id: crypto.randomUUID(), title: newItem, completed: false}]
      });
      setNewItem("");
    }
  }

  function handleItemChange(value) {
    if (value.length <= 14) {
      setNewItem(value)
    }
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  } 

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed};
        }
        return todo
      })
    })
  }

  return (
    <>
    <div className="w-28 h-56 bg-violet-900">
      <h5>1</h5>
      <form onSubmit = {handleSubmit} className = "new-item-form">
        <div className = "form-row">
        <label htmlFor = "item">New Item</label>
          <input 
          value = {newItem} 
          onChange = {e => handleItemChange(e.target.value)} 
          type = "text" 
          id = "item"/>
        </div>
      </form>
      <ul className = "list">
        {todos.map(todo => {
          return (<li key = {todo.id}>
            <label>
            <input 
              type = "checkbox" 
              checked = {todo.completed} 
              onChange = {e => toggleTodo(todo.id, e.target.checked)}/>
            {todo.title}
            </label>
            <button 
              className = "btn btn-danger" 
              onClick = {() =>  deleteTodo(todo.id)}>
            X
            </button>
          </li>)
        })}
      </ul>
    </div>
    </>
  )
}