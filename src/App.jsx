import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([]);

/*
inserting tasks into local storage 
*/
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  /*
   adds a new task to existing task array 
  */
  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  /*
  toggles the state of complete between true and false in local storage
  */
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

/*
updates the value of an existing task 
*/
const editTask = (id, updates) => {
  setTasks((prevTasks) => 
    prevTasks.map((task) => {
      if (task.id === id) {
        return { ...task, ...updates };
      }
      return task;
    })
  );
};

/*
deletes the desired task from the task list in local storage
*/
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen  p-6 ">
      {/* Header */}
      <header className="text-center mb-6 bg-yellow-500 py-6 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-2 tracking-wide text-black">Task Tracker</h1>
        <p className="text-sm font-light uppercase tracking-wider text-black">
          Task Management Application
        </p>
      </header>

      {/* Form + Task List */}
      <div className=" mx-auto">
        <TaskForm addTask={addTask} />
        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

