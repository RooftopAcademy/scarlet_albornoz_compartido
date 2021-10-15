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
  <div class="d-flex j-space-between w-100 a-items-center sorting-div">
    <div class="d-flex j-space-between sorting-selects">
      <label class="d-flex flex-col">
        Sort:
        <select id="sorting-type" class="sort-by">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
      <label class="d-flex flex-col">
        Sort by:
        <select id="key" class="sort-by">
          <option value="default">Default</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </label>

      <label class="d-flex">

      </label>

    </div>

    </div>

    <section class="section products w-100 h-100 d-flex wrap">
        ${productList}
    </section>
    `;
}
