import {useParams} from "react-router-dom";
import goods from "../../entities/goods";
import Page from "../../shared/templates/Page";

const CatalogDetail = () => {
  const {id} = useParams();
  const item = goods.find(good => good.id == Number(id));

  return (
    <Page
      title={item?.name}
    >
      <p dangerouslySetInnerHTML={{__html: item.desc}} />
    </Page>
  );
};

export default CatalogDetail;