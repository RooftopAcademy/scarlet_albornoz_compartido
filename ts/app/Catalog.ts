import Product from "./Product";
import ProductListInterface from "./ProductListInterface";

export default class Catalog implements ProductListInterface {
  products: Product[] = [];

  async findComments(id: number): Promise<Product> {

    let product: Product = this.findById(id);

    await product.getComments();

    return product;
  }

  findById(id: number): Product {
    let product = this.products.find( (p: Product) => p.id == id ) as Product;
    return product;
  }

  add(p: Product): void {
    this.products.push(p);
  }
}
