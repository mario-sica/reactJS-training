import { Link, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";
import { Container } from "./Container";

export function App3() {
  return (
    <Container
      title={
        <div>
          <h1>My app</h1>
          <Link to="/Luigi">Home</Link> | <Link to="counter">Counter</Link> | <Link to="/users/lcavalli97">My Github</Link>
        </div>
      }
    >
      <Routes>
        <Route path="/:name" element={<Welcome />} />
        <Route path="/" element={<Welcome />} />
        <Route path="counter" element={<Counter />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Routes>
    </Container>
  );
}
