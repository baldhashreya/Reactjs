import { useState } from "react";
import "./App.css";
import { ToggleLeft, ToggleRight } from "lucide-react";

function App() {
  const [checked, setChecked] = useState(true);

  return (
    <>
      <div className="box">
        <h1>Show/Hide Component</h1>
        <div className="icon">
          <button onClick={() => setChecked(!checked)}>
            {checked ? <ToggleRight /> : <ToggleLeft />}
          </button>
        </div>
      </div>
      {checked && (
        <div className="component">
          <p>This is a simple show/hide component application.</p>
        </div>
      )}
    </>
  );
}

export default App;
