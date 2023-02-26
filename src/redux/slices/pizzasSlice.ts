import { createSlice } from "@reduxjs/toolkit";
import { PizzaSliceState } from "../../@types/dataTypes";
import { RootState } from "../store";



const initialState: PizzaSliceState = {
  totalPrice: 0,
  pizzas: [],
  isLoading: false,
};

export const pizzasSlize = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    getPizzasFetch(state){
      //Request to the server
      state.isLoading = true;
    },
    getPizzasSuccess(state, action){
      //Request is succes
      state.pizzas = action.payload;
      state.isLoading = false;
    },
    getPizzasFailure(state){
      //Request is failure
      state.isLoading = false;
    }


},
});

export const selectPizzas = (state: RootState) => state.pizza.pizzas;


export const { getPizzasFetch, getPizzasSuccess, getPizzasFailure } = pizzasSlize.actions;

export default pizzasSlize.reducer;
