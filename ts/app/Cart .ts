import Product from "./Product.js";
import Catalog from "./Catalog.js";

export default class Cart extends Catalog {
    remove(p: Product): Product {
        this.products.splice(this.products.findIndex((item: Product) => {
            item.id == p.id
        }),1)
        return p
    }
    
    clearCart(): void {
        this.products = []
    }
}