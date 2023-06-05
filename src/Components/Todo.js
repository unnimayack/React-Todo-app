import React from "react";
import "./Todo.css";
import { useState, useRef, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { IoMdDoneAll } from "react-icons/io";
import { FaPenNib } from "react-icons/fa";

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
    if(editId){
      const editTodo = todos.find((todo)=>todo.id === editId)
      const updateTodo = todos.map((obj)=>obj.id === editTodo.id
      ?(obj = {id : obj.id ,list : todo})
      : (obj = {id : obj.id ,list : obj.list}))
      setTodos(updateTodo)
      setEditId(0)
      setTodo('')

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

  const allClear = ()=>{
    setTodos([])
  }

  return (
    <div className="container">
      <h1>TODO APP</h1>
      <p><span className="pencil"><FaPenNib/></span>Get things done! Make your day organized...</p>
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
      <button  onClick={allClear} className="clear-button">All Clear</button>
    </div>
  );
}

export default Todo;
