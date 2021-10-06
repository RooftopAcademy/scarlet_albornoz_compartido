import { store } from "../app";
import Product from "../app/Product";
import cartProduct from "./cartProduct";

export default function cartPage(): string {
  let cartProducts = store.cart.products;
  let cartProductsHTML = "";
  let cartProductsCounter = 0;
  let cartProductsTotal = 0;
  if (cartProducts.length == 0) {
    cartProductsHTML = /* html */ `<h2 class="brand-title">You have nothing in your cart</h2>`;
  } else {
    cartProducts.forEach((product: Product) => {
      cartProductsHTML += cartProduct(product);
      cartProductsCounter += product.qty;
      cartProductsTotal += product.price * product.qty;
    });
  }

  return /* html */ `
    <section class="section cart d-flex flex-col">
        <h4 class="d-flex j-space-between a-items-center cart-header">
            <span><img src="img/mushi.ico" alt="Mushi logo" class="cart-logo"></span>
            <span class="cart-title">Your cart</span>
            <span class="cart-counter">${cartProductsCounter}</span>
        </h4>
        <ul class="cart-list a-self-center d-flex flex-col">
            ${cartProductsHTML}
            <li class="cart-item total-price d-flex j-space-between">
                <p>Total (ARS)</p>
                <p>$${cartProductsTotal}</p>
            </li>
        </ul>
        <div class="d-flex j-center">
            <button class="btn" id="confirmOrder">Confirm my order</button>
        </div>
    </section>
    `;
}
