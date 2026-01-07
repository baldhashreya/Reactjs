import { useState } from "react";

export default function Form({ setItem }) {
  const [userName, setUserName] = useState("");

  const handleChange = (e: any) => {
    setUserName(e.target.value);
  };
  console.log("userName", userName);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setItem(userName);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Github Username"
        value={userName}
        onChange={handleChange}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
}
