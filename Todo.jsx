import React from 'react';

function Todo({ todo, toggleComplete, deleteTodo }) {
  return(
    <li className="todo-item">
      <span style={{ 
        textDecoration: todo.completed ? "line-through" : "none", 
      }}
      onClick={() => toggleComplete(todo.id)}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>X</button>
    </li>
  );
}

export default Todo;