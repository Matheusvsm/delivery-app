import React, { createContext, useContext, useState } from 'react';
import { CartType } from '../types/cart';
import { ProductType } from '../types/product';

type CartContextProps = {
  cart: CartType;
  setCart: React.Dispatch<React.SetStateAction<CartType>>;
  addToCart: (product: ProductType, quantity: number) => void;
};

const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CartType>([]);

  const addToCart = (product: ProductType, quantity: number) => {
    const productIndex = cart.findIndex((item) => item.product == product);
    // se o carrinho ja tiver esse produto
    if (productIndex !== -1) {
      const newQuantity = cart[productIndex].quantity + quantity;
      if (newQuantity === 0) {
        setCart(cart.filter((item, index) => productIndex !== index));
      } else {
        setCart([
          ...cart.slice(0, productIndex),
          { product, quantity: newQuantity },
          ...cart.slice(productIndex + 1),
        ]);
      }
    }
    // se o carrinho nao tiver ainda, adiciona ao carrinho com a quantidade indicada
    else {
      setCart([...cart, { product, quantity }]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context)
    throw new Error('Cart context must be used within CartProvider');
  return context;
};
