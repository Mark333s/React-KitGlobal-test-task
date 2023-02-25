import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { PizzaItem } from "../../@types/dataTypes";
import {
  getPizzasFailure,
  getPizzasSuccess,
} from "../slices/pizzasSlice";

const getPizzas = async () => {
  const { data } = await axios.get<PizzaItem[]>(
    "https://63d2bb2406556a0fdd4353c4.mockapi.io/items"
  );
  return data;
};

function* workGetPizzasFetch() {
  try {
    const pizzas: PizzaItem[] = yield call(getPizzas);
    yield put(getPizzasSuccess(pizzas));
  } catch (error) {
    yield put(getPizzasFailure());
    alert(error);
  }
}

function* pizzaSaga() {
  yield takeEvery("pizza/getPizzasFetch", workGetPizzasFetch);
}

export default pizzaSaga;
