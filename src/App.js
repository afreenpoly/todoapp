import "./App.css";
import { useState } from "react";
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

  const completedTasks = tasks.filter((task) => task.status === "completed");
  const pendingTasks = tasks.filter((task) => task.status === "pending");

  return (
    <div className="App">
      <h1>Hey, What's Up (●'◡'●)</h1>
      <div className="heading-row">
        <div className="column">
          <h2 className="heading-left">Active Tasks</h2>
          <div className="input">
            <input
              type="text"
              placeholder="🖊️ Add item..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask}>Add</button>
          </div>
          {pendingTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onCheckboxChange={handleCheckboxChange}
            />
          ))}
        </div>
        <div className="column">
          <h2 className="heading-right">Tasks done</h2>
          {completedTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
