import Catalog from "./Catalog.js";
export default class Cart extends Catalog {
    findProduct(pr) {
        let product = this.products.findIndex((p) => p.id == pr.id);
        return product;
    }
    add(p) {
        let index = this.findProduct(p);
        if (index >= 0) {
            this.products[index].qty++;
        }
        else {
            p.qty++;
            this.products.push(p);
        }
        return p;
    }
    remove(p) {
        let index = this.findProduct(p);
        if (this.products[index].qty > 1) {
            this.products[index].qty--;
        }
        else {
            this.removeFromCart(p);
        }
        return p;
    }
    removeFromCart(p) {
        let index = this.findProduct(p);
        this.products.splice(index, 1);
        return p;
    }
    clearCart() {
        this.products = [];
    }
}
