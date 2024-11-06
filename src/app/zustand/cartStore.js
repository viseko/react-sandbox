import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  byID: {},
  allIDs: [],
  totalGoods: 0,
  totalPrice: 0,
};

const useCartStore = create(
  persist(
    (set) => ({
      ...initialState,    
      add: (item) => set((state) => {
        const {id, name, price} = item;
        const isIDadded = state.allIDs.includes(id);

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
          state.allIDs.push(id);
        }

        // * увеличиваем счётчики
        state.totalGoods += 1;
        state.totalPrice += price;
      }),


      remove: (item) => set((state) => {
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
      }),
      
      reset: () => set(initialState)
    }),
    {
      name: "cart"
    }
  )
);

export default useCartStore;