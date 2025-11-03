import React, { useState } from 'react';

export default function TaskForm({addTask}) {
  const [task, setTask] = useState('');
/*
* Handling the form submission after adding a new task
* Prevents page from reload after submission
* prevents adding empty task in list  
* Reset the input field after submission 
*/
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return; 

    const newTask = {
      id: Date.now(), //assigns a unique id to using timestamp 
      text: task, 
      completed: false, //initially marks the task as pending
    };

    addTask(newTask);
    setTask('');//Resest the input field
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between gap-3 mb-4 bg-white p-3 rounded-xl shadow"
    >
      <input
        type="text"
        placeholder="Enter the task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
      <button
        type="submit"
        className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
      >
        Add Task
      </button>
    </form>
  );
}
