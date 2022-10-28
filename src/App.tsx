import React from 'react';
import { useState } from "react";
import './App.css';
import AddTaskForm from "./AddTaskFrom";
import Task from "./Task";

function App() {
  const [todos, setTodos] = useState([
    {text: "Do homework", id: "task-1"},
    {text: 'Make a program "To-do list"', id: "task-2"}
  ]);

  const [userInput, setUserInput] = useState('');

  const inputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.currentTarget.value);
  };

  const addTask = (value: string) => {
    if (value) {
      const newItem = {
        id: Math.random().toString(36),
        text: value,
      };

      setTodos([...todos, newItem]);
    }
  };

  const inputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    addTask(userInput);
  }

  const deleteTask = (id: string) => {
    const fullTasks = [...todos];
    fullTasks.map(task => {
      if (id === task.id) {
        const index: number = fullTasks.indexOf(task);
        fullTasks.splice(index, 1);
      }
      return fullTasks;
    });
    return setTodos(fullTasks);
  }

  const tasksText = todos.map((task) => {
    return (
      <Task
        key={task.id}
        task={task.text}
        remove={() => deleteTask(task.id)}
      />
    );
  });

  return (
    <div className="App">
      <h1 className="header">TodoList: {todos.length}</h1>

      <AddTaskForm value={inputValue} task={inputClick}/>
      {tasksText}
    </div>
  );
}

export default App;
