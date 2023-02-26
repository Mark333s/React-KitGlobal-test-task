import React, { useEffect } from "react";
import { CartItem } from "../@types/dataTypes";
import { calcTotalPrice } from "./calcTotalPrice";

// export const getCartFromLS = () => {
//   const data = localStorage.getItem("cart");
//   const items = data ? JSON.parse(data) : [];
//   const totalPrice = calcTotalPrice(items);

//   return {
//     items: items as CartItem[],
//     totalPrice,
//   };
// };

export const GetCartFromLS = () => {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);

  return {
    items,
    totalPrice,
  };
};
