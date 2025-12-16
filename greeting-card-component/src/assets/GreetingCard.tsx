import { Heart, MessageCircle, Pencil } from "lucide-react";
import "./greetingCard.css";
export function GreetingCard({ theme }: { theme: boolean }) {
  return (
    <div className={`container ${theme ? "light" : "dark"}`}>
      <div>
        <h1>Hello, Shreya Baldha</h1>
        <hr></hr>
        <div className={`summery-${theme ? "l" : "d"}`}>
          <p>Wishing you a wonderful day full of success and smiles!</p>
        </div>
        <div className="nav">
          <button><Heart /></button>
          <button><MessageCircle /></button>
          <button><Pencil /></button>
        </div>
      </div>
    </div>
  );
}
