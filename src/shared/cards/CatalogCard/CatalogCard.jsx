import styles from "./CatalogCard.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Button from "../../buttons/Button";

const CatalogCard = ({data}) => {
  const className = classNames(styles.catalogCard)

  return (
    <Link
      to={`/catalog/${data.url}`}
      className={className}
    >
      <figure className={styles.image}>
        <img
          src={`/img/goods/${data.id}.jpg`}
          alt={data.name}
        />
      </figure>
      <div className={styles.main}>
        <div className={styles.title}>{data.name}</div>
        <div className={styles.desc} dangerouslySetInnerHTML={{__html: data.desc}} />
        <div className={styles.footer}>
          <div className={styles.price}>{data.price} денег</div>
          <Button
            icon="cart"
          />
        </div>
      </div>
    </Link>
  );
};

export default CatalogCard;