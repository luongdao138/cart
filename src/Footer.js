import React from 'react';
import { useGlobalContext } from './context';

const Footer = () => {
  const { state, removeAll } = useGlobalContext();
  if (state.carts.length > 0) {
    return (
      <div className='footer'>
        <div className='total'>
          <span>Total</span>
          <span>{state.total.toFixed(2)}</span>
        </div>
        <button className='clear-cart-btn' onClick={removeAll}>
          {' '}
          Clear cart
        </button>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Footer;
