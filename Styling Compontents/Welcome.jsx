import { Age } from "./Age";
import "./index.css"

export function Welcome({ name, age }) {
  return (
    <div className="welcome">
      <p>
        Welcome, <strong>{name}</strong>!
      </p>
      <Age name={name} age={age} />
      {age > 18 && <Age name={name} age={age} />}
      {age && <Age name={name} age={age} />}
      {age > 18 && age < 65 && <Age name={name} age={age} />}
      {age > 18 && age < 65 && name === "John" && <Age name={name} age={age} />}
    </div>
  );
}
