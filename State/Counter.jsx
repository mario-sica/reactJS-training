import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({
  initialValue = 0,
  incrementAmount = 1,
  decrementAmount = 1,
}) {
  const [counter, setCounter] = useState(initialValue);
  function handleIncrement() {
    setCounter((c) => c + incrementAmount);
  }
  function handleDecrement() {
    setCounter((c) => c - decrementAmount);
  }
  function handleReset() {
    setCounter(initialValue);
  }
  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={handleIncrement}>Increment counter</button>
      <button onClick={handleDecrement}>Decrement counter</button>
      <button onClick={handleReset}>Reset counter</button>
    </div>
  );
}
