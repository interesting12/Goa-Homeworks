const Counter = ({ count, onIncrement, onDecrement, onReset }) => {
  return (
    <div className="counter">
      <h2>Counter</h2>
      <div className="count-display">{count}</div>
      <div className="counter-buttons">
        <button onClick={onDecrement}>-</button>
        <button onClick={onReset}>Reset</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
};

export default Counter;