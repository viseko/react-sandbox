import Breadcrumbs from "../../buttons/Breadcrumbs/Breadcrumbs";
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
      <Breadcrumbs currentTitle={title} />
      <h1
        className={styles.innerHeader__title}
      >{title}</h1>
    </div>
  );
};

export default InnerHeader;