import { store } from "../app.js";
import productCard from "./productCard.js";
export default function productsPage() {
    let products = store.catalog.products;
    let productList = "";
    products.forEach((product) => {
        productList += productCard(product);
    });
    return /* html */ `
    <section class="section products w-100 h-100 d-flex wrap">
        ${productList}
    </section>
    `;
}
