import Product from "../app/Product";

export default function productCard(product: Product) {
  return /* html */ `
    <div class="col-card">
        <div class="card">
            <img src="img/${product.img}" alt="product image" class="card-img"/>
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <a href="/productDetail" class="btn nav-link js-product-detail" data-product-id="${product.id}">Go to product detail</a>
                <button class="btn js-add-to-cart" data-product-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    </div>
    `;
}
