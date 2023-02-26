import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartSliceState, PizzaItem } from "../../@types/dataTypes";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { GetCartFromLS } from "../../utils/getCartFromLS";
import { RootState } from "../store";

const { items, totalPrice } = GetCartFromLS();

const initialState: CartSliceState = {
  totalPrice,
  items,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem && findItem.count > 1) {
        findItem.count--;
        state.totalPrice = state.items.reduce((sum, obj) => {
          return obj.price * obj.count + sum;
        }, 0);
      } else {
        state.items = state.items.filter((obj) => obj.id !== action.payload);
        state.totalPrice = state.items.reduce((sum, obj) => {
          return obj.price * obj.count + sum;
        }, 0);
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearItems(state) {
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
