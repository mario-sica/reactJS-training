import { Container } from "./Container";
import { Counter } from "../State/Counter";
import { Clock } from "../Effect/Clock";

export function App() {
  return (
    <Container title="My container's title">
      <Counter />
      <Clock />
    </Container>
  );
}
