import Icon from "../../small-parts/Icon/Icon";
import Button from "../Button";
import styles from "./CartButton.module.scss";
import classNames from "classnames";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import cartStore from "../../../app/mobx/cartStore";

import {observer} from "mobx-react-lite";

const CartButton = observer(() => {
  const className = classNames(styles.cartButton);
  const {totalPrice, totalGoods} = cartStore;

  const clearCart = () => {
    cartStore.reset();
  };

  const itemsList = cartStore.allIDs.map(id => {
    const item = cartStore.byID[id];
    const {name, count} = item;
    
    return (
      <div className={styles.item} key={id}>
        <div className={styles.itemName}>{name}</div>
        <div className={styles.itemControls}>
          <ButtonIcon
            icon="minus-circle"
            onClick={() => {
              cartStore.remove(item)
            }}
          />
          <div className={styles.itemCount}>{count} шт.</div>
          <ButtonIcon
            icon="plus-circle"
            onClick={() => {
              cartStore.add(item);
            }}
          />
        </div>
      </div>
    )
  });

  return (totalPrice > 0) && (
    <div
      className={className}
    >
      <div className={styles.button}>
        <Icon
          name="cart"
          width="24"
          height="24"
        />
        <div className={styles.badge}>{totalGoods}</div>
      </div>
      <div className={styles.dropdown}>
        <div className={styles.dropdownList}>
          {itemsList}
        </div>
        <div className={styles.dropdownFooter}>
          <div className={styles.totalPrice}>{totalPrice}</div>
          <Button
            size="sm"
            text="Покупаю"
          />
          <ButtonIcon
            icon="trash"
            onClick={clearCart}
          />
        </div>
      </div>
    </div>
  );
});

export default CartButton;