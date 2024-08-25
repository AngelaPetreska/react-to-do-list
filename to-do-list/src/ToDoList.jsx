import React, { useState } from 'react';
import styles from './ToDoList.module.css';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]); // State to store the list of tasks
  const [input, setInput] = useState(''); // State to store the current input value

  // Function to handle input change
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Function to add a task
  const addTask = () => {
    if (input.trim() !== '') { // Only add if input is not empty
      setTasks([...tasks, input]);
      setInput(''); // Clear the input field after adding a task
    }
  };

  // Function to remove a task
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); // Remove task by filtering it out
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
