import Product from "./Product";
import Catalog from "./Catalog";
import { store } from "../app";

export default class Cart extends Catalog {

  findInCart(pId: number): number {
    let productIndex: number = this.products.findIndex((p: Product) => p.id == pId);

    return productIndex;
  }

  override add(p: Product): void {

    let product = p
    let index = this.findInCart(product.id)

    if (index < 0) {
      product.qty += 1
      this.products.push(product)
    } else {
      product = this.products[index]
      product.qty += 1
    }
  }

  remove(p: Product): void {

    let product = p
    let index = this.findInCart(product.id)

    if (this.products[index].qty > 1) {
      product.qty -= 1;
    } else {
      this.delete(product);
    }
  }

  delete(p: Product): void {

    let product = p
    let index = this.findInCart(product.id)

    product.qty = 0
    this.products.splice(index, 1);
  }
}
