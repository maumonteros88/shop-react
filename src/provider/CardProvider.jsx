import React, { createContext, useContext, useState } from "react";

const CartContexto = createContext();

export function UseCart() {
  return useContext(CartContexto);
}

export function CarritoContexto({ children }) {
  const [cart, setCart] = useState([]);

  function AddToCart(obj) {
    if (!IsIn(obj)) {
      setCart([...cart, obj]);
    } else {
      cart.forEach((product, index) => {
        if (cart[index].id === obj.id) {
          cart[index].amount = cart[index].amount + obj.amount;
          setCart([...cart]);
        }
      });
    }
  }

  function IsIn(obj) {
    const esIgual = cart.find((product) => product.id === obj.id);
    return esIgual === undefined ? false : true;
  }

  function removeItemFromArr(id) {
    const deleteProduct = cart.filter((product) => product.id !== id);
    setCart(deleteProduct);
  }

  function CalculatePrice() {
    let total = 0;
    cart.forEach(({ amount, price }) => {
      total = total + amount * price;
    });
    return total;
  }

  return (
    <CartContexto.Provider
      value={{
        cart,
        AddToCart,
        removeItemFromArr,
        CalculatePrice,
      }}>
      {children}
    </CartContexto.Provider>
  );
}
