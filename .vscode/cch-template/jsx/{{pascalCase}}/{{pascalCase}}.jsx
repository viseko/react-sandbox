import styles from "./{{pascalCase}}.module.scss";
import classNames from "classnames";

const {{pascalCase}} = () => {
  const className = classNames(styles.{{camelCase}})

  return (
    <div
      className={className}
    >
      {{pascalCase}}
    </div>
  );
};

export default {{pascalCase}};