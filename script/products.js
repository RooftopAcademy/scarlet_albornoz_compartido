const getCurrentProd = async () => {
    let currentProduct = await store.getCatalog().findById(sessionStorage.currentProduct, ['comments'])
    document.getElementsByClassName('product-detail')[0].innerHTML = productDetail(currentProduct)
    console.log(productDetail(currentProduct))

}

let store = new Store

store.fetchProducts()

let myProductList = document.getElementsByClassName('products')[0]

let products = store.getCatalog().showAll()

if (window.location.pathname == '/products.html') {
    products.forEach((product) => {
        myProductList.innerHTML += productCard(product)
    })
}

let detailsBtn = Array.from(document.getElementsByClassName('js-product-detail'))
let addToCartBtn = Array.from(document.getElementsByClassName('js-add-to-cart'))

detailsBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        sessionStorage.setItem('currentProduct', btn.dataset.productId)
        // productDetail(currentProduct)
        window.location.pathname = '/product-detail.html'
    })
})

if (window.location.pathname == '/product-detail.html') {
    getCurrentProd()
}

addToCartBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        let currentProduct = store.getCatalog().findById(btn.dataset.productId)
        sessionStorage.setItem('currentProduct', currentProduct)
        console.log(currentProduct)
    })
})