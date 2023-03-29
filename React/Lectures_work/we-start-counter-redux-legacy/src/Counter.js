import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  let counter = useSelector((state) => state.counter);
  let visible = useSelector((state) => state.visible);
  let dispatch = useDispatch();

  let incrementActionHandler = () => {
    dispatch({type : "Increment"});
  }

  let decrementActionHandler = () => {
    dispatch({type : "Decrement"});
  }

  let toggleActionHandler = () => {
    dispatch({type : "Toggle"});
  }

  let incrementByValueActionHandler = () => {
    dispatch({type : "IncrementByValue", incrementValue: 10});
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {visible && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementActionHandler}>Increment</button>
        <button onClick={incrementByValueActionHandler}>Increase by 10</button>
        <button onClick={decrementActionHandler}>Decrement</button>
      </div>
      <button onClick={toggleActionHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;