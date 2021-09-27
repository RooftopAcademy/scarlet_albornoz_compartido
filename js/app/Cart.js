import Catalog from "./Catalog.js";
import { store } from "../app.js";
export default class Cart extends Catalog {
    findProduct(pId) {
        let product = this.products.findIndex((p) => p.id == pId);
        return product;
    }
    addToCart(pId) {
        let index = this.findProduct(pId);
        let product;
        if (index < 0) {
            product = store.catalog.findById(pId);
            product.qty += 1;
            this.products.push(product);
        }
        else {
            product = this.products[index];
            product.qty += 1;
        }
        return product;
    }
    remove(pId) {
        let index = this.findProduct(pId);
        let product = this.products[index];
        if (this.products[index].qty > 1) {
            product.qty -= 1;
        }
        else {
            this.removeFromCart(index);
        }
        return product;
    }
    removeFromCart(pId) {
        let index = this.findProduct(pId);
        let product = this.products[index];
        this.products.splice(index, 1);
        return product;
    }
    clearCart() {
        this.products = [];
    }
}
