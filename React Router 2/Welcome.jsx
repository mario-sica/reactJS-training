import { useParams } from "react-router-dom";

export function Welcome() {
  const { name = "World" } = useParams();

  return (
    <div>
      <h2>
        Welcome, <span>{name}</span>!
      </h2>
    </div>
  );
}
