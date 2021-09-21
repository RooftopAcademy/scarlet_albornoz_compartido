function productDetail(product) {

    let comments = product.comments
    let commentList = ''
    comments.forEach(comment => {
        commentList += commentCard(comment)
    });

    return /* html */ `
    <div class="col-card d-flex flex-col w-100 a-items-center">
        <div class="card">
            <img src="img/${product.img}" alt="product image" class="card-img">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <h6 class="card-price">$${product.price}</h6>
                <p class="card-text">
                    ${product.description}
                </p>
                <a href="products.html" class="btn">Go back to product list</a>
            </div>
        </div>
    </div>
    <div class="product-comments col-card d-flex flex-col w-100 a-items-center h-100">
        ${commentList}
    </div>
    `
}