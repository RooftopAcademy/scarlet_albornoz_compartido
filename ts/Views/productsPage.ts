import Product from "../app/Product.js";
import Catalog from "../app/Catalog.js";
import { store } from "../app.js";
import productCard from "./productCard.js";

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
