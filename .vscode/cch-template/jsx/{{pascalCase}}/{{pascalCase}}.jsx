import styles from ".{{pascalCase}}.module.scss";

const {{pascalCase}} = () => {
  return (
    <div
      className={styles.{{kebabCase}}}
    >
      {{pascalCase}}
    </div>
  );
};

export default {{pascalCase}};