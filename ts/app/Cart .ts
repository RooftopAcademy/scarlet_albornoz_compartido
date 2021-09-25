import Product from "./Product";
import Catalog from "./Catalog";

class Cart extends Catalog {
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