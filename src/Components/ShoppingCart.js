import React from 'react'
import { Offcanvas, OffcanvasHeader, OffcanvasTitle, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../Context/ShoppingCartContext';
import CartItem from './CartItem';
import { FormatCurr } from './FormateCurr';
import Data from '../Data/Data.json';
export default function ShoppingCart({ isOpen }) {
  const { cartItems, closeCart } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <OffcanvasHeader closeButton>
        <OffcanvasTitle>Cart</OffcanvasTitle>
      </OffcanvasHeader>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className='ms-auto fw-bold fs-2'>
            Total:
            {FormatCurr(cartItems.reduce((total, CartItem) => {
            const item = Data.find(item => item.id === CartItem.id);
            return total + (item?.price || 0) * CartItem.quantity;
          },0))}</div>
          
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
