import Button from "../../shared/buttons/Button/Button";
import Counter from "../../widgets/Header/Counter/Counter";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div
      className={styles.main}
    >
      <Counter />
      <br />
      <Button
        size="sm"
        text="Привет"
        icon="sun"
      />
      <br />
      <Button
        text="Привет"
        icon="sun"
      />
      <br />
      <Button
        size="lg"
        text="Привет"
        icon="sun"
      />
    </div>
  );
};

export default Main;