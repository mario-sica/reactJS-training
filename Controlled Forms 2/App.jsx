import { Login } from "./Login";

export function App() {
  function handleLogin(data) {
    console.log(data);
  }

  return (
    <div>
      <Login onLogin={handleLogin} />
    </div>
  );
}
