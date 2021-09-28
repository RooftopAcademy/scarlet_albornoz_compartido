import Catalog from "./Catalog.js";
import Cart from "./Cart.js";
import { productDb } from "./productDb.js";
import Product from "./Product.js";
export default class Store {
    constructor() {
        this.catalog = new Catalog();
        this.cart = new Cart();
    }
    getProducts() {
        productDb.forEach((p) => {
            let product = new Product();
            product.id = p.id;
            product.img = p.img;
            product.name = p.name;
            product.description = p.description;
            product.price = p.price;
            this.catalog.add(product);
        });
    }
}
