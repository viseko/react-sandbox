import {useParams} from "react-router-dom";
import goods from "../../entities/goods";
import Page from "../../shared/templates/Page";
import useRedirect from "../../shared/hooks/useRedirect";

const CatalogDetail = () => {
  const {url} = useParams();
  const item = goods.find(good => good.url == url);

  // редирект на 404 если товар не найден
  useRedirect(!item, "/404");

  return (
    <Page
      title={item?.name}
    >
      <p dangerouslySetInnerHTML={{__html: item?.desc}} />
    </Page>
  );
};

export default CatalogDetail;