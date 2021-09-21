class Store {
    constructor() {
        this.catalog = new Catalog
        this.cart = new Cart
    }

    getCart() {
        return this.cart
    }

    getCatalog() {
        return this.catalog
    }

    fetchProducts() {

        productList.forEach((p) => {
            let product = new Product

            product.setId(p.id)
            product.setImg(p.img)
            product.setName(p.name)
            product.setDescription(p.description)
            product.setPrice(p.price)

            this.catalog.add(product)
        })
    }

    getUser() {
        return this.user
    }
}