import Product from "../app/Product";
import { store } from "../app";
import productCard from "./productCard";

export default function productsPage(): string {
  let products: Product[] = store.catalog.products;

  let productList: string = "";

  products.forEach((product: Product) => {
    productList += productCard(product);
  });

  return /* html */ `
    <section class="section products w-100 h-100 d-flex wrap">
        ${productList}
    </section>
    `;
}
