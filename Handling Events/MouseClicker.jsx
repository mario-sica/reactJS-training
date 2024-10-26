export function MouseClicker() {
  function handleButtonClick(event) {
    console.log(event.target, event.currentTarget);
  }
  function handlePicClick(event) {
    event.stopPropagation();
    console.log(event.target.src);
  }
  return (
    <div>
      <button name="one" onClick={handleButtonClick}>
        <img
          src="/assets/react-original.svg"
          alt="React logo"
          width={48}
          height={48}
          onClick={handlePicClick}
        />
        Click me!
      </button>
    </div>
  );
}
