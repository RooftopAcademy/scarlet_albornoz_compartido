import Catalog from "./Catalog.js";
import Cart from "./Cart.js";
import { productDb, ProductType } from "./productDb.js";
import Product from "./Product.js";

export default class Store {
  catalog: Catalog = new Catalog();
  cart: Cart = new Cart();

  getProducts() {
    productDb.forEach((p: ProductType) => {
      let product: Product = new Product();

      product.id = p.id;
      product.img = p.img;
      product.name = p.name;
      product.description = p.description;
      product.price = p.price;

      this.catalog.add(product);
    });
  }
}
