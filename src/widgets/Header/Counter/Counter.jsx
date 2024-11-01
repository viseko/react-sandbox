import styles from "./Counter.module.scss";
import classNames from "classnames";

import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, reset, fetchRandomNumber} from "../../../app/redux/slices/counterSlice";
import { useEffect } from "react";

const Counter = () => {
  const className = classNames(styles.counter);

  const count = useSelector((state) => state.counter.count);
  const loading = useSelector((state) => state.counter.loading);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  useEffect(() => {
    dispatch(fetchRandomNumber());
  }, [dispatch])

  return (
    <div
      className={className}
    >
      <p>
        {loading ? "Loading" : `Count: ${count}`}
      </p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;