import Product from "../app/Product";

export default function cartProduct(p: Product): string {
  return /* html*/ `
    <li class="cart-list-item d-flex j-space-between">
        <div class="item-description d-flex grow a-items-center j-space-between">
            <p class="w-100 d-flex">
                ${p.name}
            </p>
            <p>$${p.price * p.qty}</p>
        </div>
        <div class="cart-controls d-flex flex-col j-space-between">
        <span class="item-qty">
                <button class="btn js-add-to-cart" data-product-id="${
                  p.id
                }">+</button>
                 ${p.qty} 
                <button class="btn js-remove-1" data-product-id="${
                  p.id
                }">-</button>
                </span>
            <button class="btn js-remove-from-cart btn-remove" data-product-id="${
              p.id
            }">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
    </li>
  `;
}
