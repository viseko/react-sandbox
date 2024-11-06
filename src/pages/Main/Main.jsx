import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div
      className={styles.main}
    >

      <div className="bg-green-500 text-white px-10 py-5 rounded-lg">
        <h1 className="text-2xl font-bold">Ну здарова ёпта</h1>
      </div>
    </div>
  );
};

export default Main;