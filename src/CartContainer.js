import React from 'react';
import { useGlobalContext } from './context';
import Cart from './Cart';

const CartContainer = () => {
  const { state } = useGlobalContext();
  if (state.carts.length > 0) {
    return (
      <div className='cart-container'>
        <h1 className='big-title'>Your cart</h1>
        {state.carts.map((cart) => {
          return <Cart key={cart.id} {...cart} />;
        })}
      </div>
    );
  } else {
    return (
      <>
        <h1 className='big-title'>Your cart</h1>
        <span className='message'>is currently empty</span>
      </>
    );
  }
};

export default CartContainer;
