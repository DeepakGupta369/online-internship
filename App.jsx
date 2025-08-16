import React, { useState } from 'react';
import Todo from './Todo';

function App(){
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo=()=>{
    if(task.trim() === "") return;
    const newTodo ={
      id: Date.now(),
      text: task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTask("");
  };

  const toggleComplete=(id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return(
    <div className="container">
      <h1>React To-Do App</h1>
      <div className="input-container">
        <input type="text" placeholder="Add a task"
        value={task}
        onChange={(e) => setTask(e.target.value)} />
        
        <button onClick={addTodo}>Add</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}
export default App;