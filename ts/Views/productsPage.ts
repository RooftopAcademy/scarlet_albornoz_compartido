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
      <div class="sorting-type d-flex flex-col j-space-between">
          <label>
            <input type="radio" id="asc" name="sorting-type" value="asc" checked>
            Ascending
          </label>
          <label>
            <input type="radio" id="desc" name="sorting-type" value="desc">
            Descending
          </label>
      </div>
      <label class="d-flex flex-col">
        Sort by:
        <select id="name" class="sort-by">
          <option value="default">Default</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </label>

      <label class="d-flex">

      </label>

    </div>

    <button class="btn btn-square"><i class="fas fa-undo"></i></button>

    </div>

    <section class="section products w-100 h-100 d-flex wrap">
        ${productList}
    </section>
    `;
}
