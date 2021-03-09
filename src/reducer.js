// import { useCountTotal } from './context';

const countTotal = (carts) => {
  return carts.reduce((acc, cart) => {
    return acc + cart.amount * cart.price;
  }, 0);
};

const countTotalItems = (carts) => {
  return carts.reduce((acc, cart) => {
    return acc + cart.amount;
  }, 0);
};

export const reducer = (state, action) => {
  // console.log(state);
  if (action.type === 'INCREASE') {
    let newCarts = state.carts.map((cart) => {
      if (cart.id === action.payload) {
        return { ...cart, amount: cart.amount + 1 };
      } else {
        return cart;
      }
    });
    return {
      ...state,
      totalItems: countTotalItems(newCarts),
      total: countTotal(newCarts),
      carts: newCarts,
    };
  }
  if (action.type === 'DECREASE') {
    let newCarts = state.carts.map((cart) => {
      if (cart.id === action.payload) {
        return { ...cart, amount: cart.amount - 1 };
      } else {
        return cart;
      }
    });
    return {
      ...state,
      totalItems: countTotalItems(newCarts),
      total: countTotal(newCarts),
      carts: newCarts,
    };
  }

  if (action.type === 'REMOVE') {
    let newCarts = state.carts.filter((cart) => {
      return cart.id !== action.payload;
    });
    return {
      ...state,
      totalItems: countTotalItems(newCarts),
      total: countTotal(newCarts),
      carts: newCarts,
    };
  }
  if (action.type === 'REMOVE_ALL') {
    return { ...state, totalItems: 0, carts: [], total: 0 };
  }
  return state;
};
