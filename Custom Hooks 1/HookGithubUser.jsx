import { useState, useEffect } from "react";

function useGithubUser(username) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("User not found");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [username]);

  return {data};
}

export function HookGithubUser({ username }) {
  const { data } = useGithubUser(username);

  return (
    <div>
      <img src={data.avatar_url} alt={`${data.login}'s profile picture`} />
      <h1>{data.name}</h1>
      <p>Login: {data.login}</p>
    </div>
  );
}
