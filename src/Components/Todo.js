import React from "react";
import "./Todo.css";
import { useState, useRef, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { IoMdDoneAll } from "react-icons/io";
function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addTodo = () => {
    setTodos([...todos, {list : todo , id : Date.now()}]);
    console.log(todos);
    setTodo("");
  };

  const inputRef = useRef("null");

  useEffect(() => {
    inputRef.current.focus();
  });

  const onDelete = (id) =>{
    setTodos(todos.filter((list) => list.id !== id))
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
        <button onClick={addTodo}>ADD</button>
      </form>
      <div className="list">
        <ul>
          {todos.map((obj) => (
            <li className="list-items">
              <div className="list-item-list">{obj.list}</div>
              <span>
                <IoMdDoneAll
                  className="list-item-icons"
                  title="Complete"
                  id="complete"
                />
                <FiEdit className="list-item-icons" title="Edit" id="edit" />
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
