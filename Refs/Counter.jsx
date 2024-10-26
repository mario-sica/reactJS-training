import { useEffect, useRef, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({
  initialValue = 0,
  incrementAmount = 1,
  decrementAmount = 1,
}) {
  const [counter, setCounter] = useState(initialValue);

  const currentRef = useRef(null);
  const previousRef = useRef(null);

  useEffect(() => {
    const previousDir = previousRef.current;
    let currentDir = null;

    if (counter > initialValue) {
      currentDir = "up";
    } else if (counter < initialValue) {
      currentDir = "down";
    }

    if (currentDir !== previousDir && currentDir !== null) {
      console.log(`The counter went ${currentDir}.`);
      currentRef.current = currentDir;
      previousRef.current = currentDir;
    }

    console.log(`The value of the counter is: ${counter}`);
    return () => {
      console.log(`The value of the counter was: ${counter}`);
    };
  }, [counter, initialValue]);

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
