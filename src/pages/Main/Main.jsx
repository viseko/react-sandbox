import Counter from "../../widgets/Header/Counter/Counter";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div
      className={styles.main}
    >
      <Counter />
    </div>
  );
};

export default Main;