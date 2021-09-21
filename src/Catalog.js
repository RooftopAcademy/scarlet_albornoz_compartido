class Catalog {
    constructor() {
        this.products = []
    }

    async findById(id, relations = []) {
        let product = this.products.find(p => {
            return p.id == id
        })

        await product.getComments()

        return product
    }

    add(p) {
        this.products.push(p)
    }

    showAll() {
        return this.products
    }
}