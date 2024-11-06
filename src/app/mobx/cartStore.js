import {makeAutoObservable} from "mobx";

class CartStore {
  byID = {};
  allIDs = [];
  totalGoods = 0;
  totalPrice = 0;

  constructor() {
    const cartStorage = localStorage.getItem("cart");
    if (cartStorage) {
      try {
        const data = JSON.parse(cartStorage);

        Object.assign(this, {
          byID: data.byID,
          allIDs: data.allIDs,
          totalGoods: data.totalGoods,
          totalPrice: data.totalPrice
        });
      } catch(e) {
        localStorage.removeItem("cart");
        console.error("Некорректная запись поля cart. Поле было очищено.");
      }
    }

    makeAutoObservable(this);
  }

  reset() {
    this.byId = {};
    this.allIDs = [];
    this.totalGoods = 0;
    this.totalPrice = 0;
    localStorage.removeItem("cart");

    this.updateStorage();
  }

  add(item) {
    const {id, name, price} = item;
    const isIDadded = this.allIDs.includes(id);

    if (isIDadded) {
      // *** если добавлен, увеличиваем его количество
      this.byID[id].count += 1;
    } else {
      // *** если нет, добавляем его в состояние
      const goodData = {
        id,
        name,
        count: 1,
        price
      };

      this.byID[id] = goodData;
      this.allIDs = [...this.allIDs, id];

      this.updateStorage();
    }

    // * увеличиваем счётчики
    this.totalGoods += 1;
    this.totalPrice += price;
  }

  remove(item) {
    const {id, price} = item;

    // * проверяем, один ли товар с таким ID в корзине
    const count = this.byID[id].count;
    const isSingle = (count === 1);

    if (isSingle) {
      // ** если один, удаляем его запись
      delete this.byID[id];
      this.allIDs = this.allIDs.filter(checkingId => checkingId !== id);
    } else {
      // ** если несколько, уменьшаем счётчик
      this.byID[id].count -= 1;
    }

    // * уменьшаем счётчики
    this.totalGoods -= 1;
    this.totalPrice -= price;
  }

  updateStorage() {
    localStorage.setItem("cart", JSON.stringify({
      byID: this.byID,
      allIDs: this.allIDs,
      totalGoods: this.totalGoods,
      totalPrice: this.totalPrice,
    }));
  }
};

const cartStore = new CartStore(initialState);
export default cartStore;