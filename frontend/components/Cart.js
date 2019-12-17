import React from 'react';
import gql from 'graphql-tag';
import CartStyles from './styles/CartStyles';
import Supreme from './styles/Supreme';
import CloseButton from './styles/CloseButton';
import StyleButton from './styles/StyleButton';

const Cart = () => (
  <CartStyles open>
    <header>
      <CloseButton title="close">
        &times;
      </CloseButton>
      <Supreme>Your Cart</Supreme>
      <p>You Have __ Items in your cart.</p>
    </header>

    <footer>
      <p>€10.10</p>
      <StyleButton>Checkout</StyleButton>
    </footer>
  </CartStyles>
);

export default Cart;