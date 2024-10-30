import styles from "./InnerHeader.module.scss";
import classNames from "classnames";

const InnerHeader = ({
  title
}) => {
  const className = classNames(styles.innerHeader)

  return (
    <div
      className={className}
    >
      <h1>{title}</h1>
    </div>
  );
};

export default InnerHeader;