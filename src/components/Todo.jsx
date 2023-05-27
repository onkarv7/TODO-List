import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  // item on i am clicking on match to state
  const deleteHandler = () => {
    console.log(todo);
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const completeHandler = () => {
    // console.log(todo)
    setTodos(
      todos.map((item) => {
        // same elemnet from state i am clicking on
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      {/* // todo todo.completed true then apply completed class */}
      <button onClick={completeHandler} className="complete-btn">
        <input className="checkbox" type="checkbox" />
      </button>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
