import { should } from "vitest";
import getId from "../utils/getId";
import CartItem from "./CartItem";

class ShoppingCart {
  #cartItems;
  static #allCarts = []
  constructor() {
    // this.#cartItems = CartItem(name)]
    this.#cartItems = []
    this.id = getId();
    ShoppingCart.#allCarts.push(this);
  }
  createItem(name, price) {
    const newItem = new CartItem(name, price)
    this.#cartItems.push(newItem)
    return newItem
  }
  getItems() {
    return [...this.#cartItems]
  }
  removeItem(id) {
    this.#cartItems.splice(this.#cartItems.findIndex((cartItem) => cartItem.id === id), 1)
  }
  getTotal() {
    return this.#cartItems.reduce((a, b) => a += b.price, 0)
  }
  static listAll() {
    return [...ShoppingCart.#allCarts]
  }
  static findBy(id) {
    return ShoppingCart.#allCarts.find((cart) => cart.id === id)
  }
}

export default ShoppingCart;