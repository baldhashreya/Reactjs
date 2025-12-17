import { useState } from "react";
import "./App.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

function App() {
  const [count, setCount] = useState(0);
  const [isLiked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(true);
    setCount((prev) => prev + 1);
  };

  const handleUnlike = () => {
    setLiked(false);
  };

  return (
    <div className="card">
      {isLiked ? (
        <button onClick={handleUnlike}>
          <FavoriteIcon sx={{ color: "#e63946", fontSize: 40 }} />
        </button>
      ) : (
        <button onClick={handleLike}>
          <FavoriteIcon sx={{ fontSize: 40 }} />
        </button>
      )}
      <p>{count}</p>
    </div>
  );
}

export default App;
