import React, { createContext, useContext, useState } from "react";

const CartContexto = createContext();

export const UseCart = () => {
  return useContext(CartContexto);
};

export const CarritoContexto = ({ children }) => {
  const [cart, setCart] = useState([]);

  const AddToCart = (obj) => {
    if (!IsIn(obj.id)) {
      setCart([...cart, obj]);
    } else {
      cart.forEach((product, index) => {
        if (product.id === obj.id) {
          cart[index].amount = product.amount + obj.amount;
          setCart([...cart]);
        }
      });
    }
  };

  const IsIn = (id) => {
    const isIqual = cart.find((product) => product.id === id);
    return isIqual === undefined ? false : true;
  };

  const removeItemFromArr = (id) => {
    const deleteProduct = cart.filter((product) => product.id !== id);
    setCart(deleteProduct);
  };

  const CalculatePrice = () => {
    let total = 0;
    cart.forEach(({ amount, price }) => {
      total = total + amount * price;
    });
    return total;
  };

  const deleteAllCart = () => {
    setCart([]);
  };

  return (
    <CartContexto.Provider
      value={{
        cart,
        AddToCart,
        removeItemFromArr,
        CalculatePrice,
        deleteAllCart,
      }}>
      {children}
    </CartContexto.Provider>
  );
};
