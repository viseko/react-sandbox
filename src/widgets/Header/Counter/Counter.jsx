import styles from "./Counter.module.scss";
import classNames from "classnames";

import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "../../../app/redux/slices/counterSlice";

const Counter = () => {
  const className = classNames(styles.counter);

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div
      className={className}
    >
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;