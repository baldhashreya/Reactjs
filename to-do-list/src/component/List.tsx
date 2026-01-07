import { Check, Pencil, Plus, Trash, X } from "lucide-react";
import { useState } from "react";
import listData from "../data/list.json";
import "./List.css";

export function List() {
  const [todos, setTodos] =
    useState<{ id: number; title: string; completed: boolean }[]>(listData);
  const [editId, setEditId] = useState<number | null>(null);

  const handleTitleChange = (id: number, value: string) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, title: value } : item))
    );
  };

  const handleCheckboxChange = (id: number) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleOnSubmit = () => {
    if (todos.some((t) => t.id === editId && !t.title.trim())) return;

    localStorage.setItem("todos", JSON.stringify(todos));
    setEditId(null);
  };

  const handleAddTodo = () => {
    const newTodo = {
      id: Date.now(),
      title: "",
      completed: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
    setEditId(newTodo.id);
  };

  return (
    <div>
      <div className="add-task">
        <button onClick={handleAddTodo}>
          <Plus />
        </button>
      </div>
      <div className="list-container">
        <ul>
          {todos.map((item) => (
            <li key={item.id}>
              <div className="list-task">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => handleCheckboxChange(item.id)}
                />
                {editId === item.id && !item.completed ? (
                  <div>
                    <input
                      value={item.title}
                      onChange={(e) =>
                        handleTitleChange(item.id, e.target.value)
                      }
                    />
                    <button onClick={handleOnSubmit}>
                      <Check />
                    </button>
                    <button
                      onClick={() => {
                        setTodos((prev) => {
                          const saved = localStorage.getItem("todos");
                          const source = saved ? JSON.parse(saved) : listData;
                          return prev.map((t) =>
                            t.id === item.id
                              ? source.find((s: any) => s.id === t.id) ?? t
                              : t
                          );
                        });
                        setEditId(null);
                      }}
                    >
                      <X />
                    </button>
                  </div>
                ) : item.completed ? (
                  <s>{item.title}</s>
                ) : (
                  item.title
                )}

                {!item.completed && (
                  <div className="task-desc">
                    <button onClick={() => setEditId(item.id)}>
                      <Pencil />
                    </button>
                    <button
                      onClick={() => {
                        setTodos((prev) =>
                          prev.filter((t) => t.id !== item.id)
                        );
                        setEditId(null);
                      }}
                    >
                      <Trash />
                    </button>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
