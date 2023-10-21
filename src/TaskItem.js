import React from "react";

function TaskItem({ task, onCheckboxChange }) {
  const handleCheckboxChange = () => {
    onCheckboxChange(task.id);
  };

  return (
    <div className="done">
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={task.status === "completed"}
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label">{task.text}</label>
      </div>
    </div>
  );
}

export default TaskItem;
