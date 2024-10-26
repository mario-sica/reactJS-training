export function AlertClock({buttonClick}) {
  return (
    <div>
      <p>Click the button below to show the current time.</p>
      <button onClick={buttonClick}>Click me!</button>
    </div>
  );
}
