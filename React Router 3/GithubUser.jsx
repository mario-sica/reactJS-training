import { useEffect, useState } from "react";

export function GithubUser({ username }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('User not found');
        }
        return res.json();
      })
      .then((data) => {
        setData((data));
      })
      .catch((error) => {
        console.error(error);
      })
  }, [username]);

  return (
    <div>
      <img src={data.avatar_url} alt={`${data.login}'s profile picture`} />
      <h1>{data.name}</h1>
      <p>Login: {data.login}</p>
    </div>
  );
}
