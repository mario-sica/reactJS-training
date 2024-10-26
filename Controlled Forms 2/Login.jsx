import { useState } from "react";

export function Login({ onLogin }) {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    const type = event.target.type;
    const checked = event.target.checked;

    setData((d) => {
      const updatedData = {
        ...d,
        [name]: type === "checkbox" ? checked : value,
      };

      return updatedData;
    });
  }

  function handleLogin(event) {
    event.preventDefault();
    if (onLogin) {
      onLogin(data);
    }
  }

  function handleReset() {
    setData({
      username: "",
      password: "",
      remember: false,
    });
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>Username</label>
        <input
          name="username"
          type="text"
          value={data.username}
          onChange={handleInputChange}
        />
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={data.password}
          onChange={handleInputChange}
        />
        <label>Remember</label>
        <input
          name="remember"
          type="checkbox"
          checked={data.remember}
          onChange={handleInputChange}
        />
        <button
          disabled={!data.username || !data.password}
          onClick={handleLogin}
        >
          Login
        </button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
}
