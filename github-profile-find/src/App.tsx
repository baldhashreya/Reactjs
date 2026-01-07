import { useState } from "react";
import "./App.css";
import Form from "./Form";
import FetchUserData from "./FetchUserData";

const API = "https://api.github.com/users/";

function App() {
  const [userData, setUserData] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  return (
    <div className="main-container">
      <h1>Github Profile Finder</h1>
      <Form setItem={setUserData} />
      {userData && (
        <div className="card">
          <FetchUserData
            userName={`${API}${userData}`}
            setUserInfo={setUserInfo}
          />
          {userInfo && (
            <div className="user_info">
              <img
                src={JSON.parse(userInfo).avatar_url}
                alt="avatar"
              />
              <div className="sub-content">
              <h3>Name: {JSON.parse(userInfo).name}</h3>
              <p>Bio: {JSON.parse(userInfo).bio}</p>
              <p>Location: {JSON.parse(userInfo).location}</p>
              <p>Public Repos: {JSON.parse(userInfo).public_repos}</p>
              <p>Public Gists: {JSON.parse(userInfo).public_gists}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
