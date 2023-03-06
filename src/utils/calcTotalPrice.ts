import { CartItem } from "../redux/types/dataTypes";

export const calcTotalPrice = (items: CartItem[]) => {
  //A function that calculates the total price of pizzas in the cart
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
