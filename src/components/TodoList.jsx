import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  console.log(todos);
  return (
    <div className="todo-container">
      <ul className="todo-list"></ul>

      {filteredTodos.map((todo) => (
        <Todo
          text={todo.text}
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
