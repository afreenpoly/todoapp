import React from "react";

<<<<<<< HEAD
function TaskItem({task}) {
  return (
    <div className="done">
      <input type="checkbox" name="" id="" />
=======
function TaskItem({ task, onTaskDone }) {
  return (
    <div className="done">
      <input
        type="checkbox"
        name=""
        id=""
      />
>>>>>>> 3aabb6316b7ead50ceb3bd0b92b20b79429816c3
      <p>{task.text}</p>
    </div>
  );
}

export default TaskItem;
