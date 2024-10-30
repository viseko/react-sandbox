import Page from "../../shared/templates/Page";
import CatalogGrid from "../../shared/grids/CatalogGrid/CatalogGrid";
import CatalogCard from "../../shared/cards/CatalogCard/CatalogCard";
import goods from "../../entities/goods";

const Catalog = () => {
  const goodCards = goods.map(item => (
    <CatalogCard key={item.id} data={item} />
  ));

  return (
    <Page
      title="Каталог"
    >
      <CatalogGrid>
        {goodCards}
      </CatalogGrid>
    </Page>
  );
};

export default Catalog;