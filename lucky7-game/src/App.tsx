import { useState } from "react";
import "./App.css";

function getDisk(n: number) {
  const disk = [];
  for (let i = 0; i < n; i++) {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    disk.push(randomNumber);
  }
  console.log(disk);
  return disk;
}

function App() {
  const [disk, setDisk] = useState(getDisk(2));
  console.log(disk);
  const handleClick = () => {
    console.log("clicked");
    setDisk(getDisk(2));
  };

  return (
    <>
      {disk[0]+ disk[1] === 7 ? <h1>You Win!</h1>: <h1></h1>}
      <div className="main-container">
        <div className="container">
          <div className="disk-rotation">
            <p>{disk[0]}</p>
            <p>{disk[1]}</p>
          </div>
          <button onClick={() => handleClick()}>Run Again!</button>
        </div>
      </div>
    </>
  );
}
export default App;
