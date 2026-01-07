import { useEffect } from "react";
import axios from "axios"; 

export default function FetchUserData({ userName, setUserInfo }) {
  console.log("userName::::::::::::::", userName);
  useEffect(() => {
    fetchUser();
  }, [userName, setUserInfo]);

  async function fetchUser() {
    try {
      const response = await axios.get(userName);
      const data = JSON.stringify(response.data, null, 2);
      setUserInfo(data);
    } catch (error) {
      console.error(error);
    }
  }
  return null;
}
