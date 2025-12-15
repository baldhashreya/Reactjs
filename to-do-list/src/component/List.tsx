import { Pencil, Trash } from "lucide-react";
import listData from "../data/list.json";
import "./List.css";

export function List() {
  const items = listData;
  console.log(items);
  return (
    <div className="list-container">
      {
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                id={item.id.toString()}
                checked={item.completed}
              />
              <div className="list-task">
                <div className="task-title">
                  {item.completed ? (
                    <s>{item.title}</s>
                  ) : (
                    item.title
                  )}
                </div>

                <div className="task-desc">
                  <div>
                    <Pencil />
                  </div>
                  <div>
                    <Trash />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      }
    </div>
  );
}
