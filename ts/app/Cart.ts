import Product from "./Product.js";
import Catalog from "./Catalog.js";

export default class Cart extends Catalog {
  findProduct(pr: Product): number {
    let product: number = this.products.findIndex(
      (p: Product) => p.id == pr.id
    );

    return product;
  }

  add(p: Product): Product {
    let index = this.findProduct(p);

    if (index >= 0) {
      this.products[index].qty++;
    } else {
      p.qty++;
      this.products.push(p);
    }

    return p;
  }

  remove(p: Product): Product {
    let index = this.findProduct(p);

    if (this.products[index].qty > 1) {
      this.products[index].qty--;
    } else {
      this.removeFromCart(p);
    }
    return p;
  }

  removeFromCart(p: Product): Product {
    let index = this.findProduct(p);

    this.products.splice(index, 1);
    return p;
  }

  clearCart(): void {
    this.products = [];
  }
}
