import styles from "./CatalogCard.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";

const CatalogCard = ({data}) => {
  const className = classNames(styles.catalogCard)

  return (
    <Link
      to={`/catalog/${data.url}`}
      className={className}
    >
      <figure className={styles.catalogCard__image}>
        <img
          src={`/img/goods/${data.id}.jpg`}
          alt={data.name}
        />
      </figure>
      <div className={styles.catalogCard__main}>
        <div className={styles.catalogCard__title}>{data.name}</div>
        <div className={styles.catalogCard__desc} dangerouslySetInnerHTML={{__html: data.desc}} />
        <div className={styles.catalogCard__price}>{data.price} денег</div>
      </div>
    </Link>
  );
};

export default CatalogCard;