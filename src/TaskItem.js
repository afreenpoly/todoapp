import React from "react";

function TaskItem({task}) {
  return (
    <div className="done">
      <input type="checkbox" name="" id="" />
      <p>{task.text}</p>
    </div>
  );
}

export default TaskItem;
