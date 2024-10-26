import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers() {
  const [username, setUsername] = useState("");
  const [usersList, setUsersList] = useState([]);

  function handleInputChange(event) {
    const value = event.target.value;

    setUsername(value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setUsersList([...usersList, username]);
    setUsername("");
  }

  return (
    <div>
      <h1>GitHub Users</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Search by username</label>
          <input
            onChange={handleInputChange}
            value={username}
            name="username"
            type="text"
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div>
        <ul>
          {usersList.map((user, index) => (
            <li key={index}>
              <GithubUser username={user} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
