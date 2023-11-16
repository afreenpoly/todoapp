import React from "react";
import { useState } from "react";
import "./App.css";
import TaskItem from "./TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask) {
      const newTaskObj = {
        id: tasks.length + 1,
        text: newTask,
        status: "pending",
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask("");
    }
  };

  const handleCheckboxChange = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? {
            ...task,
            status: task.status === "pending" ? "completed" : "pending",
          }
        : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const handleInputChange = (e) => {
    // Capitalize the first letter and set the newTask value
    const newValue = e.target.value;
    setNewTask(newValue.charAt(0).toUpperCase() + newValue.slice(1));
  };

  const completedTasks = tasks.filter((task) => task.status === "completed");
  const pendingTasks = tasks.filter((task) => task.status === "pending");

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12 card mb-4 rounded-3">
          <div className="card-header py-3 mb-4">
            <h2 className="my-0 fw-normal">Active Tasks</h2>
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="🖊 Add item..."
              value={newTask}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
            />
            <div className="input-group-append">
              <button className="btn btn-primary" onClick={addTask}>
                Add
              </button>
            </div>
          </div>
          {pendingTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onCheckboxChange={handleCheckboxChange}
              onDelete={handleDelete}
            />
          ))}
        </div>
        <div className="col-lg-6 col-md-12 card mb-4 rounded-3">
          <div className="card-header py-3 mb-4">
            <h2 className="my-0 fw-normal">Tasks done</h2>
          </div>
          {completedTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onCheckboxChange={handleCheckboxChange}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
