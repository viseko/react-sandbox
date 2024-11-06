import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = JSON.stringify({
  byID: {},
  allIDs: [],
  totalGoods: 0,
  totalPrice: 0,
});

const getInitialState = () => JSON.parse(initialState);

const addItem = (state, item) => {
  const { id, name, price } = item;
  const isIDadded = state.allIDs.includes(id);

  if (isIDadded) {
    state.byID[id].count += 1;
  } else {
    const goodData = {
      id,
      name,
      count: 1,
      price
    };
    state.byID[id] = goodData;
    state.allIDs.push(id);
  }

  const newState = {
    ...state,
    totalGoods: state.totalGoods + 1,
    totalPrice: state.totalPrice + price
  };

  return newState;
};

const removeItem = (state, item) => {
  const { id, price } = item;
  const count = state.byID[id].count;
  const isSingle = count === 1;

  if (isSingle) {
    delete state.byID[id];
    state.allIDs = state.allIDs.filter(checkingId => checkingId !== id);
  } else {
    state.byID[id].count -= 1;
  }

  const newState = {
    ...state,
    totalGoods: state.totalGoods - 1,
    totalPrice: state.totalPrice - price
  };

  return newState;
};

const useCartStore = create(
  persist(
    (set) => ({
      byID: {},
      allIDs: [],
      totalGoods: 0,
      totalPrice: 0,

      add: (item) => set((state) => addItem(state, item)),

      remove: (item) => set((state) => removeItem(state, item)),

      reset: () => set(getInitialState()),
    }),
    {
      name: "cart",
    }
  )
);

export default useCartStore;
