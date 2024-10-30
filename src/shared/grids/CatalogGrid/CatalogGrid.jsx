import styles from "./CatalogGrid.module.scss";
import classNames from "classnames";

const CatalogGrid = ({children}) => {
  const className = classNames(styles.catalogGrid)

  return (
    <div
      className={className}
    >
      {children}
    </div>
  );
};

export default CatalogGrid;