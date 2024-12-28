import { ICoffee } from "../../components/CoffeeCard";
import { createContext } from "react";

export interface ICartItem {
  coffee: ICoffee;
  amount: number;
}

interface CartContextProps {
  cartItems: ICartItem[];
  addNewItem: (item: ICartItem) => void;
  decrementAmount: (id: string) => void;
  incrementAmount: (id: string) => void;
  removeItem: (id: string) => void;
}

export const CartItemsContext = createContext({} as CartContextProps);
