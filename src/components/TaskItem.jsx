import React, { useState } from "react";

export default function TaskItem({task,onToggle,onEdit,onDelete}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.title);

  /*
  * Handles the form submission after saving the edited task
  * Prevents page from reload after submission
  * prevents adding empty task in list after edit  
  */
  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (!editedText.trim()) return;
     //call the onEdit parent function and passes task id, editedt text as props
    onEdit(task.id, { text: editedText });
    setIsEditing(false);
  };

  return (
    <li
      className={`flex items-center justify-between p-3 border rounded-lg mb-2 transition ${
        task.completed ? "bg-green-100" : "bg-yellow-100"
      }`}
    >
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="h-4 w-4 cursor-pointer"
        />

        {isEditing ? (
          <form onSubmit={handleEditSubmit} className="flex-1 flex gap-2">
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition"
            >
              Save
            </button>
          </form>
        ) : (
          <span
            className={`${
              task.completed ? "line-through text-gray-500" : "text-gray-800"
            } flex-1`}
          >
            {task.text}
          </span>
        )}
      </div>

      
      {!isEditing && (
        <div className="flex gap-2">
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-400 text-white px-2 py-1 rounded-md text-sm hover:bg-blue-500 transition"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="bg-red-500 text-white px-2 py-1 rounded-md text-sm hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      )}
    </li>
  );
}

