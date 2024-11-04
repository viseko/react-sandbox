import Icon from "../../small-parts/Icon/Icon";
import Button from "../Button";
import styles from "./CartButton.module.scss";
import classNames from "classnames";

import {useSelector, useDispatch} from "react-redux";
import { addToCart, removeFromCart, resetCart } from "../../../app/redux/actions/cartActions";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

const CartButton = () => {
  const className = classNames(styles.cartButton);
  const cartState = useSelector(state => state.cart);
  const {totalPrice, totalGoods} = cartState;

  const dispatch = useDispatch();

  const clearCart = () => {
    dispatch(resetCart());
  };

  const itemsList = cartState.allIDs.map(id => {
    const item = cartState.byID[id];
    const {name, count} = item;
    
    return (
      <div className={styles.item} key={id}>
        <div className={styles.itemName}>{name}</div>
        <div className={styles.itemControls}>
          <ButtonIcon
            icon="minus-circle"
            onClick={() => {
              dispatch(removeFromCart(item))
            }}
          />
          <div className={styles.itemCount}>{count} шт.</div>
          <ButtonIcon
            icon="plus-circle"
            onClick={() => {
              dispatch(addToCart(item))
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
};

export default CartButton;