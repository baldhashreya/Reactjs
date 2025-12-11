import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="box">
        <h1>Counter App</h1>
        <p>This is a simple counter application.</p>
        <div className="counter">
          <button onClick={() => setCount(count - 1)}>-</button>
          <span className="font-bold p-2 text-[50px]">{count}</span>
          <button onClick={() => setCount(count + 1)}>+</button>
          <p>Counter functionality is under development.</p>
        </div>
      </div>
    </>
  );
}

export default App;
