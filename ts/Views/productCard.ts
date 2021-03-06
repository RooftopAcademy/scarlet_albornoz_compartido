import Product from "../app/Product";

export default function productCard(product: Product) {
    let price = product.price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })
  return /* html */ `
    <div class="col-card">
        <div class="card">
            <div class="card-img">
                <img src="img/${product.img}" alt="product image" class="product-img"/>
            </div>
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <h6 class="card-price">${price}</h6>
                <div class="card-btns">
                    <a href="/productDetail" class="btn nav-link js-product-detail" data-product-id="${product.id}">Go to product detail</a>
                    <button class="btn js-add" data-product-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
    `;
}
