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
  