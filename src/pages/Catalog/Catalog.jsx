import CatalogGrid from "../../shared/grids/CatalogGrid/CatalogGrid";
import styles from "./Catalog.module.scss";

import goods from "../../entities/goods";
import CatalogCard from "../../shared/cards/CatalogCard/CatalogCard";

const Catalog = () => {
  const goodCards = goods.map(item => (
    <CatalogCard key={item.id} data={item} />
  ));

  return (
    <div
      className={styles.catalog}
    >
      <h1>Каталог</h1>
      <CatalogGrid>
        {goodCards}
      </CatalogGrid>
    </div>
  );
};

export default Catalog;