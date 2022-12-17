import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../store/Counter";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const showCounter = useSelector((counter) => counter.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterAction.increment());
  };

  const incrementCounterHandler = () => {
    dispatch(counterAction.increase(9));
  };

  const decrementCounterHandler = () => {
    dispatch(counterAction.decrement());
  };

  const toggleHandler = () => {
    dispatch(counterAction.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={decrementCounterHandler}>Decrement</button>
      <button onClick={toggleHandler}>Toggle</button>
      <button onClick={incrementCounterHandler}>Increament</button>
    </main>
  );
};

export default Counter;
