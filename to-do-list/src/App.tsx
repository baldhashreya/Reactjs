// import { useState } from "react";
import "./App.css";
import { List } from "./component/List";
import { Plus } from "lucide-react";

function App() {
  return (
    <>
      <div className="container">
        <div className="add-task">
          <Plus />
        </div>
        <List />
      </div>
    </>
  );
}

export default App;
