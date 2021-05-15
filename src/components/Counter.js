import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const upCount = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="counter-container">
      <h1>This button has been clicked</h1>
      <h1 className="counter">{counter}</h1>
      <h1>Times!</h1>
      <button className="btn-counter" onClick={upCount}>
        Click me !!
      </button>
    </div>
  );
};

export default Counter;
