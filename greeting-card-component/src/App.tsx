import { useState, useEffect } from "react";
import "./App.css";
import { GreetingCard } from "./assets/GreetingCard";
import { Moon, Sun } from "lucide-react";

function App() {
  const [theme, setTheme] = useState(true);
  useEffect(() => {
    document.body.style.backgroundColor = theme ? "white" : "black";
    document.body.style.color = theme ? "black" : "white";
  }, [theme]);
  return (
    <>
      <div className={theme ? "dark-theme" : "light-theme"}>
        <div className="theme-container">
          {theme ? (
            <button onClick={() => setTheme(!theme)}>
              <Sun />
            </button>
          ) : (
            <button onClick={() => setTheme(!theme)}>
              <Moon />
            </button>
          )}
        </div>
        <GreetingCard theme={theme} />
      </div>
    </>
  );
}

export default App;
