import React from 'react';
import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { COLORS } from '@assets/theme/theme';
import CartItem from './objects/CartItem';
import axios from 'axios';
import {CartContext} from '@assets/utils/CartContext';


const Container = styled.div`
  margin-top: 44px;
  display: flex;
  flex-flow: column nowrap;
  right: 0;
  position: fixed;
  height: 90vh;
  padding-bottom: 50px;
  width: ${(props) => (props.showCart ? '500px' : '0')};
  background-color: ${COLORS.white};
  border-left: 3px solid black;
  border-top: 18px solid black;
  overflow: hidden;
  transition: width 0.2s;
`;

const ListContainer = styled.div`
  margin: 0px 40px;
  display: flex;
  flex-flow: column nowrap;
  background-color: white;
  height: auto;
  padding: 5px;
  overflow-y: scroll;
`;

const ButtonContainer = styled.div`
  margin: 15px 40px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
`;

const Checkout = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 200px;
  color: white;
  background-color: ${COLORS.orange};
  padding: 5px;
  justify-content: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Total = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const CartBar = (props) => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  useEffect(() => {
    const data = localStorage.getItem('cart');
    if (data){
    setCart(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  })

  const removeItem = (id) => {
    localStorage.removeItem('cart')
  }

  return (
    <Container showCart={props.showCart}>
      <ButtonContainer>
        <Checkout>Proceed to chekcout</Checkout>
        <Total> Total: $ {totalPrice}</Total>
        </ButtonContainer>
      <ListContainer>
        <h1>number of products: {cart.length}</h1>
        {cart.map((cart, index) => (
          <><CartItem 
            key={index}
            id={cart.id}
            fullDescription={cart.fullDescription}
            display={cart.display}
            subDisplay={cart.subDisplay}
            price={cart.price}
            packSize={cart.packSize}
          />
          <button onClick={() => removeItem(cart.id)}>remove</button></>
        ))}
      </ListContainer>
    </Container>
  );
};

export default CartBar;
