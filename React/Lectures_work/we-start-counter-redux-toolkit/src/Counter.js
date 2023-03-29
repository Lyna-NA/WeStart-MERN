import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import "./Index.css";
import { counterActions } from "./redux/redux-store";

const Counter = () => {
  
  // Single Reducer => Single State
  // let counter = useSelector((state) => state.counter);
  // let visible = useSelector((state) => state.visible);

  let counter = useSelector((state) => state.counterReducer.counter);
  let visible = useSelector((state) => state.counterReducer.visible);

  let dispatch = useDispatch();

  let incrementActionHandler = () => {
    dispatch(counterActions.increment());
  };
  let decrementActionHandler = () => {
    dispatch(counterActions.decrement());
  };
  let toggleActionHandler = () => {
    dispatch(counterActions.toggle());
  };
  let incrementByValueActionHandler = () => {
    dispatch(counterActions.incrementByValue(10));
    // dispatch(counterActions.incrementByValue({value : 10}));

  };

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
