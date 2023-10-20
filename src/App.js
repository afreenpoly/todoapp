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
        done: false, // Initialize the task as not done
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask("");
    }
  };

  const markTaskDone = (taskId, isDone) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, done: isDone };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

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
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} onTaskDone={markTaskDone} />
          ))}
        </div>
        <div className="column">
          <h2 className="heading-right">Tasks done</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
