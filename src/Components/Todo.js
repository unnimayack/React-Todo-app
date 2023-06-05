import React from 'react'
import './Todo.css'


function Todo() {

  return (
    <div className='container'>
      <h2>TODO APP</h2>
      <form className='form-group'>
        <input className='form-control' type="text"   placeholder="Enter Your Todo"  />
        <button >ADD</button>
      </form >
      <div className='list'>
        <ul>
          <li>Read news paper</li>
        </ul>
      </div>
    </div>
  )
}

export default Todo

