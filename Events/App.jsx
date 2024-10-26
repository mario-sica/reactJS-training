import { AlertClock } from "./AlertClock";

export function App() {
  function handleButtonClick() {
    const currentTime = new Date();
    alert(`The current time is ${currentTime.toLocaleTimeString()}`);
  }
  return <AlertClock buttonClick={handleButtonClick} />;
}
