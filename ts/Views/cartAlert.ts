import Product from "../app/Product";

export default function cartAlert(p: Product) {
    return /* html */ `
    <div class="alert d-flex a-items-center j-space-between show-alert">
                <div class="d-flex a-items-center">
                    <i class="fas fa-shopping-cart"></i>
                    <img src="img/${p.img}" alt="${p.name}" class="alert-img">
                </div>
                <span class="alert-msg">
                    ${p.name} <br /> added to cart
                </span>
                <button class="btn close-alert-btn d-flex a-items-center j-center" onclick="this.parentNode.remove()">
                    <span class="fas fa-times"></span>
                </button>
            </div>
    `
}