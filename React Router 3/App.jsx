import { Link, Route, Routes } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";
import { Container } from "./Container";
import { GithubUserList } from "./GithubUserList";

export function App() {
  return (
    <Container
      title={
        <div>
          <h1>My app</h1>
          <Link to="/Luigi">Home</Link> | <Link to="counter">Counter</Link> |{" "}
          <Link to="users">Github users</Link>
        </div>
      }
    >
      <Routes>
        <Route path="users/*" element={<GithubUserList />}>
          <Route index element={<p>Add a user and select it</p>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
      </Routes>
    </Container>
  );
}
