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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const completedTasks = tasks.filter((task) => task.status === "completed");
  const pendingTasks = tasks.filter((task) => task.status === "pending");

  return (
    <div>
      <div className="row">
        <div className="col-lg-6 border">
          <h2 className="underline-heading">Active Tasks</h2>
          <div className="input-group mb-3 ">
            <input
              type="text"
              className="form-control me-4"
              placeholder="🖊 Add item..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
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
            />
          ))}
        </div>
        <div className="col-lg-6 border">
          <h2 className="underline-heading">Tasks done</h2>
          {completedTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onCheckboxChange={handleCheckboxChange}
            />
          ))}
        </div>
      </div>
    </div>
  );

}

export default App;
