export type PizzaItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes?: number[];
  types?: number[];
  rating?: number;
};

export interface PizzaSliceState {
  totalPrice: number;
  pizzas: PizzaItem[];
  isLoading: Boolean;
}

export type CartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type?: string;
  size?: number;
  count: number;
};

export interface addItem extends Pick<CartItem, "id"> {
  id: string;
}

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}
