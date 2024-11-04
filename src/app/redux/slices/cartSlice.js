import {createSlice} from "@reduxjs/toolkit";

const cartStorage = localStorage.getItem("cart");
const initialState = cartStorage ? JSON.parse(cartStorage) : {
  byID: {},
  allIDs: [],
  totalGoods: 0,
  totalPrice: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // * добавление товара в корзину
    add(state, action) {
      const item = action.payload;
      const {id, name, price} = item;
      const isIDadded = state.allIDs.includes(id);

      // ** проверяем, добавлен ли уже товар с таким ID
      if (isIDadded) {
        // *** если добавлен, увеличиваем его количество
        state.byID[id].count += 1;
      } else {
        // *** если нет, добавляем его в состояние
        const goodData = {
          id,
          name,
          count: 1,
          price
        };

        state.byID[id] = goodData;
        state.allIDs = [...state.allIDs, id];
      }
      
      // * увеличиваем счётчики
      state.totalGoods += 1;
      state.totalPrice += price;
    },
    remove(state, action) {
      const item = action.payload;
      const {id, price} = item;

      // * проверяем, один ли товар с таким ID в корзине
      const count = state.byID[id].count;
      const isSingle = (count === 1);

      if (isSingle) {
        // ** если один, удаляем его запись
        delete state.byID[id];
        state.allIDs = state.allIDs.filter(checkingId => checkingId !== id);
      } else {
        // ** если несколько, уменьшаем счётчик
        state.byID[id].count -= 1;
      }

      // * уменьшаем счётчики
      state.totalGoods -= 1;
      state.totalPrice -= price;
    },
    reset(state) {
      state.byID = {};
      state.allIDs = [];
      state.totalGoods = 0;
      state.totalPrice = 0;
    }
  }
});

export const {add, remove, reset} = cartSlice.actions;
export default cartSlice.reducer;