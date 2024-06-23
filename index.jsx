import { useEffect, useState } from "react";
import User from "./user";
import "./styles.css";

export default function Githubprofilefinder() {
  const [username, setusername] = useState("kalidas31");
  const [userdata, setuserdata] = useState("");
  const [loading, setloading] = useState(true);
  async function fetchdetails() {
    setloading(true);
    const responce = await fetch(`https://api.github.com/users/${username}`);
    const data = await responce.json();
    console.log(data);
    if (data) {
      setuserdata(data);
      setloading(false);
      setusername("");
    }
  }

  function handleclick() {
    fetchdetails();
  }
  useEffect(() => {
    fetchdetails();
  }, []);

  if (loading) {
    return <h1>Loading Please Wait.......</h1>;
  }
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="enter git profile name"
          value={username}
          onChange={(event) => setusername(event.target.value)}
        />
        <button onClick={handleclick}>get details</button>
      </div>
      <div>{userdata !== null ? <User user={userdata} /> : null}</div>
    </div>
  );
}
