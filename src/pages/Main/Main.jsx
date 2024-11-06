import Test from "../../widgets/Test";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div
      className={styles.main}
    >
      <Test />
    </div>
  );
};

export default Main;