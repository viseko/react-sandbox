import styles from "./CatalogCard.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Button from "../../buttons/Button";

const CatalogCard = ({data}) => {
  const className = classNames(styles.catalogCard)

  return (
    <div
      className={className}
    >
      <figure className={styles.image}>
        <img
          src={`/img/goods/${data.id}.jpg`}
          alt={data.name}
        />
      </figure>
      <div className={styles.main}>
        <Link to={`/catalog/${data.url}`} className={styles.title}>{data.name}</Link>
        <div className={styles.desc} dangerouslySetInnerHTML={{__html: data.desc}} />
        <div className={styles.footer}>
          <div className={styles.price}>{data.price} денег</div>
          <Button
            className={styles.cartButton}
            size="sm"
            icon="cart"
          />
        </div>
      </div>
    </div>
  );
};

export default CatalogCard;