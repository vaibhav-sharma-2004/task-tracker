import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks,toggleTask,editTask,deleteTask }) {
  const [filter, setFilter] = useState("all");

  //Updates the filter state
  const handleFilterChange = (type) => {
    setFilter(type);
  };

  // filters the tasks based on completed status
  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="p-4 mx-auto rounded-2xl shadow-md bg-white">
      <h2 className="text-xl font-semibold text-center mb-4">Task List</h2>

      
      <div className="flex justify-center gap-3 mb-5">
        <button
          onClick={() => handleFilterChange("all")}
          className={`px-3 py-1 rounded-lg ${
            filter === "all" ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>
        <button
          onClick={() => handleFilterChange("pending")}
          className={`px-3 py-1 rounded-lg ${
            filter === "pending" ? "bg-yellow-500 text-white" : "bg-gray-200"
          }`}
        >
          Pending
        </button>
        <button
          onClick={() => handleFilterChange("completed")}
          className={`px-3 py-1 rounded-lg ${
            filter === "completed" ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
        >
          Completed
        </button>
      </div>

     
      <ul className="space-y-2">
        {filteredTasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks found.</p>
        ) : (
          filteredTasks.map((task) => (
            <TaskItem
                key={task.id}
              task={task}
              onToggle={toggleTask}
              onEdit={editTask}
              onDelete={deleteTask}
            />
          ))
        )}
      </ul>
    </div>
  );
}

