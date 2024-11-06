import styles from "./CatalogDetail.module.scss";
import {useParams} from "react-router-dom";
import goods from "../../entities/goods";
import Page from "../../shared/templates/Page";
import useRedirect from "../../shared/hooks/useRedirect";
import Button from "../../shared/buttons/Button";

import useCartStore from "../../app/zustand/useCartStore";

const CatalogDetail = () => {
  const {url} = useParams();
  const item = goods.find(good => (good.url === url));
  const {add} = useCartStore();

  // редирект на 404 если товар не найден
  useRedirect(!item, "/404");
  
  const addHandler = () => {
    add(item);
  };
  
  if (!item) {
    return null;
  }

  return (
    <Page
      title={item.name}
    >
      <p dangerouslySetInnerHTML={{__html: item.desc}} />
      <img
        className={styles.img}
        src={`/img/goods/${item.id}.jpg`}
        alt=""
      />
      <br />
      <br />
      <Button
        icon="cart"
        text="Добавить в корзину"
        onClick={addHandler}
      />
    </Page>
  );
};

export default CatalogDetail;