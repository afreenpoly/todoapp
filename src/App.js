import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hey, What's Up (●'◡'●)</h1>
      <div className="heading-row">
        <div className="column">
          <h2 className="heading-left">Active Tasks</h2>
          <div className="input">
            <input type="text" placeholder="🖊️ Add item..." />
            <i className="fas fa-plus"></i>
          </div>
        </div>
        <div className="column">
          <h2 className="heading-right">Tasks done</h2>
          <div className="done">
            <input type="checkbox" name="" id="" />
            <p>React tutorial</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
