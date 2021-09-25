import Product from './Product.js'
import ProductListInterface from "./ProductListInterface.js";

export default class Catalog implements ProductListInterface {
    products: Product[] = []

    async findById(id: number): Promise<Product> {
    
        let product: Product = this.products.find((p: Product) => p.id == id) as Product

        await product.getComments()

        return product

    }

    add(p: Product): Product {
        this.products.push(p)
        return p
    }

    showAll(): Product[]{
        return this.products
    }
}