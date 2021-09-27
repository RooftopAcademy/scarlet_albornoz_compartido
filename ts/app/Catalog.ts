import Product from "./Product.js";
import ProductListInterface from "./ProductListInterface.js";

export default class Catalog implements ProductListInterface {
  products: Product[] = [];

  async findComments(id: number): Promise<Product> {
    // let product: Product = this.products.find(
    //   (p: Product) => p.id == id
    // ) as Product;

    let product: Product = this.findById(id);

    await product.getComments();

    return product;
  }

  findById(id: number): Product {
    let product: Product = this.products.find(
      (p: Product) => p.id == id
    ) as Product;

    return product;
  }

  add(p: Product): Product {
    this.products.push(p);
    return p;
  }
}
