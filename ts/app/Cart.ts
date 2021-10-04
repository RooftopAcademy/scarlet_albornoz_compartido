import Product from "./Product";
import Catalog from "./Catalog";
import { store } from "../app";

export default class Cart extends Catalog {
  findProduct(pId: number): number {
    let product: number = this.products.findIndex((p: Product) => p.id == pId);

    return product;
  }

  addToCart(pId: number): Product {
    let index = this.findProduct(pId);
    let product: Product;

    if (index < 0) {
      product = store.catalog.findById(pId);
      product.qty += 1;
      this.products.push(product);
    } else {
      product = this.products[index];
      product.qty += 1;
    }

    return product;
  }

  remove(pId: number): Product {
    let index = this.findProduct(pId);
    let product = this.products[index];

    if (this.products[index].qty > 1) {
      product.qty -= 1;
    } else {
      this.removeFromCart(index);
    }
    return product;
  }

  removeFromCart(pId: number): Product {
    let index = this.findProduct(pId);
    let product = this.products[index];

    this.products.splice(index, 1);
    return product;
  }

  clearCart(): void {
    this.products = [];
  }
}
