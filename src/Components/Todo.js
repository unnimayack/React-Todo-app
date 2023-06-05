import React from "react";
import "./Todo.css";
import { useState, useRef, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { IoMdDoneAll } from "react-icons/io";
function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId , setEditId]  = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addTodo = () => {
    if(todo !== ''){
    setTodos([...todos, {list : todo , id : Date.now() , status:false}]);
    console.log(todos);
    setTodo("");
    }
  };

  const inputRef = useRef("null");

  useEffect(() => {
    inputRef.current.focus();
  });

  const onDelete = (id) =>{
    setTodos(todos.filter((list) => list.id !== id))
  }

  const onComplete = (id) =>{
    let complete = todos.map((list)=>{
      if(list.id === id){
      return({...list, status : !list.status})
      }
    return list
  })
  setTodos(complete)
  }

  const onEdit = (id) =>{
    const editTodo = todos.find((to)=> to.id === id)
  
    setTodo(editTodo.list)
    setEditId(editTodo.id)
    console.log(editTodo);
  }

  return (
    <div className="container">
      <h2>TODO APP</h2>
      <form onSubmit={handleSubmit} className="form-group">
        <input
          className="form-control"
          value={todo}
          type="text"
          ref={inputRef}
          placeholder="Enter Your Todo"
          onChange={(event) => setTodo(event.target.value)}
        />
        <button onClick={addTodo}>{editId ? 'EDIT' : 'ADD'} </button>
      </form>
      <div className="list">
        <ul>
          {todos.map((obj) => (
            <li className="list-items">
              <div className="list-item-list" id={obj.status ? 'list-item' : '' }>{obj.list} </div>
              <span>
                <IoMdDoneAll
                  className="list-item-icons"
                  title="Complete"
                  id="complete"
                  onClick={()=>onComplete(obj.id)}
                 
                />
                <FiEdit 
                  className="list-item-icons" 
                  title="Edit" 
                  id="edit" 
                  onClick={()=>onEdit(obj.id)}
                />
                <MdDelete
                  className="list-item-icons"
                  title="Delete"
                  id="delete"
                  onClick={()=>onDelete(obj.id)}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
