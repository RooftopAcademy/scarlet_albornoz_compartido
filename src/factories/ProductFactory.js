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

    static async createCommentsHTML(cmnts) {

        let productCommentsHTML
        let comnts = await cmnts

        comnts.forEach(cmnt => {
            productCommentsHTML += new commentCard(cmnt)
        })

        return productCommentsHTML
    }
}