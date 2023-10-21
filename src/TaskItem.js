import React from "react";
import "./TaskItem.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function TaskItem({ task, onCheckboxChange, onDelete }) {
  const handleCheckboxChange = () => {
    onCheckboxChange(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div className="done">
      <div className="input-group mb-3">
        <div className="input-group-text">
          <input
            type="checkbox"
            className="form-check-input mt-0"
            checked={task.status === "completed"}
            onChange={handleCheckboxChange}
          />
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Text input with checkbox"
          value={task.text}
        />
        <div className="trashicon" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
