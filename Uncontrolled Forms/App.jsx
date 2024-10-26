import { UncontrolledLogin } from "./UncontrolledLogin";

export function App() {
  function handleLogin(data) {
    console.log(data);
  }

  return (
    <div>
      <UncontrolledLogin />
    </div>
  );
}
