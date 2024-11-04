import { add, remove, reset } from "../slices/cartSlice";

// Функция для обновления localStorage
const updateLocalStorage = (getState) => {
  const cartState = getState().cart;
  localStorage.setItem("cart", JSON.stringify(cartState));
};

// Обёртка для действий с записью в localStorage
const createWrappedAction = (action) => (item) => (dispatch, getState) => {
  dispatch(action(item));
  updateLocalStorage(getState);
};

// Экспортируем действия с обёрткой
export const addToCart = createWrappedAction(add);
export const removeFromCart = createWrappedAction(remove);

// Обёртка для сброса корзины
export const resetCart = () => (dispatch) => {
  dispatch(reset());
  localStorage.removeItem("cart");
};
