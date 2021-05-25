import React, {useContext} from 'react';
import {CartContext} from '@assets/utils/CartContext';

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
      <span>items in cart : {cart.length}</span>
      <br />
      <span>total price : {totalPrice}</span>
    </div>
  )
}

export default Cart