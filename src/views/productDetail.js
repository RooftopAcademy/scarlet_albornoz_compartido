function productDetail(product) {

    let comments = product.comments
    let commentList = ''
    comments.forEach(comment => {
        commentList += commentCard(comment)
    });

    return /* html */ `
    <div class="col-card">
        <div class="card">
            <img src="${product.img}" alt="product image" class="card-img">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <h6 class="card-subtitle">${product.price}</h6>
                <p class="card-text">
                    ${product.description}
                </p>
                <a href="products.html" class="btn">Go back to product list</a>
            </div>
        </div>
        <!-- Here goes the comment card -->
        <div class="product-comments">
            ${commentList}
        </div>
    </div>
    `
}