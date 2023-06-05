import React from 'react';
import './Todo.css';
import { useState } from 'react';

function Todo() {
  const [todo , setTodo] = useState('')
  const [todos , setTodos] = useState([])

  const handleSubmit = (e) =>{
    e.preventDefault();
  } 

  const addTodo =() =>{
    setTodos([...todos,todo])
    console.log(todos);
  }
  return (
    <div className='container'>
      <h2>TODO APP</h2>
      <form onSubmit={handleSubmit} className='form-group'>
        <input className='form-control' value={todo} type="text"   placeholder="Enter Your Todo" onChange={(event)=>setTodo(event.target.value)}/>
        <button onClick={addTodo}>ADD</button>
      </form>
      <div className='list'>
        <ul>
         {todos.map((obj)=>
            <li>{obj}</li>
         )}
        </ul>
      </div>
    </div>
  )
}

export default Todo

