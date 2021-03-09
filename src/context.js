import React, { useContext, useState, useReducer } from 'react';
import { data } from './data';
import { reducer } from './reducer';

const AppContext = React.createContext();

const initState = {
  totalItems: data.length,
  total: data.reduce((acc, cart) => {
    return acc + cart.amount * cart.price;
  }, 0),
  carts: data,
};

const AppProvider = ({ children }) => {
  const [carts, setCarts] = useState(data);

  const [state, dispatch] = useReducer(reducer, initState);

  const increaseNumber = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };

  const decreaseNumber = (id, prevAmount) => {
    console.log(id, prevAmount);
    if (prevAmount === 1) {
      dispatch({ type: 'REMOVE', payload: id });
    } else {
      dispatch({ type: 'DECREASE', payload: id });
    }
  };

  const removeAll = () => {
    dispatch({ type: 'REMOVE_ALL' });
  };

  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  return (
    <AppContext.Provider
      value={{ state, increaseNumber, decreaseNumber, remove, removeAll }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export const useCountTotal = (carts) => {
  return carts.reduce((cart, acc) => {
    return acc + cart.amount * cart.price;
  }, 0);
};

export default AppProvider;
