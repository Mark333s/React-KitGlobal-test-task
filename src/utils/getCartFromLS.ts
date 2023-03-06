import { CartItem } from "../redux/types/dataTypes";
import { calcTotalPrice } from "./calcTotalPrice";

export const GetCartFromLS = () => {
  //Here we get pizzas from local storage and return pizzas & total price of them
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);

  return {
    items: items as CartItem[],
    totalPrice,
  };
};
