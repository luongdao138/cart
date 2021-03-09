import React from 'react';
import { useGlobalContext } from './context';

const Cart = ({ id, price, title, img, amount }) => {
  const { increaseNumber, decreaseNumber, remove } = useGlobalContext();

  return (
    <article className='cart-item'>
      <div className='product-wrapper'>
        <div className='img-wrapper'>
          <img src={img} alt='' />
        </div>
        <div className='infor-wrapper'>
          <p className='name'>{title}</p>
          <p className='price'>${price.toFixed(2)}</p>
          <button
            className='remove-btn'
            onClick={() => {
              remove(id);
            }}
          >
            remove
          </button>
        </div>
      </div>
      <div className='action'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          onClick={() => {
            increaseNumber(id);
          }}
        >
          <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
        </svg>
        <span className='number'>{amount}</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          onClick={() => decreaseNumber(id, amount)}
        >
          <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
        </svg>
      </div>
    </article>
  );
};

export default Cart;
