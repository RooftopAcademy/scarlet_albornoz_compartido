class ProductFactory {
    static create(pr) {
        let product = new Product

        product.setId(pr.id)
        product.setImg(pr.img)
        product.setName(pr.name)
        product.setDescription(pr.description)
        product.setPrice(pr.price)

        return product
    }

}