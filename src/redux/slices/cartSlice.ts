import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartSliceState, PizzaItem } from "../../@types/dataTypes";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { GetCartFromLS } from "../../utils/getCartFromLS";
import { RootState } from "../store";

const { items, totalPrice } = GetCartFromLS();
//Here we get the pizzas and their total cost

const initialState: CartSliceState = {
  totalPrice,
  items,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      //Here we add pizza to cart or increase the number of pizzas in the cart
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        //If this type of pizza is already added to the cart, then we increase the number of pizzas of this type in the cart
        findItem.count++;
      } else {
        //If we don't have this type of pizza in cart, we add it to cart
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = calcTotalPrice(state.items);
      //Here we get totalPrice
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem && findItem.count > 1) {
         //If this type of pizza is already added to the cart and it's count more than one we decrease it
        findItem.count--;
        state.totalPrice = state.items.reduce((sum, obj) => {
          //Here we correct the total price
          return obj.price * obj.count + sum;
        }, 0);
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      //Here we remove item from cart
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
       //Here we get totalPrice
    },
    clearItems(state) {
      //Here we clear our cart
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const selectCart = (state: RootState) => state.cart;
export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((obj: PizzaItem) => obj.id === id);

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
