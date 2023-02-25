import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import createSagaMiddleware from "redux-saga";
import pizzasReducer from "./slices/pizzasSlice";
import cartReducer from "./slices/cartSlice";
import pizzaSaga from "./saga/pizzaSaga";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: { pizza: pizzasReducer, cart: cartReducer },
  middleware: [saga],
});
saga.run(pizzaSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
