import Product from "../app/Product";

export default function cartProduct(p: Product): string {
  return /* html*/ `
  <li class="cart-item d-flex a-items-center">
      <img src="img/${p.img}" alt="product image" class="cart-item-img">
      <div class="cart-item-body w-100 d-flex a-items-center grow">
        <div class="cart-item-description">
          <p class="cart-item-name">
            ${p.name}
          </p>
          <p class="cart-item-price">$${p.price*p.qty}</p>
        </div>
        <div class="cart-footer d-flex j-space-between">
          <span class="item-qty">
            <button class="btn btn-square js-remove-1" data-product-id="${p.id}">-</button>
            ${p.qty}
            <button class="btn btn-square js-add-to-cart" data-product-id="${p.id}">+</button>
          </span>
          <button class="btn btn-square d-flex j-center a-items-center a-self-end js-remove-from-cart" data-product-id="${p.id}">
          <i class="far fa-trash-alt"></i>
        </button>
        </div>
      </div>
  </li>
  `
}
