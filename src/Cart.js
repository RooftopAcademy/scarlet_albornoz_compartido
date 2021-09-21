//add, remove, refresh

class Cart {
    constructor() {
        this.products = []
    }

    add(p) {
        if (p instanceof Product) this.products.push(p)
        else throw new Error('El dato recibido no es un producto')
    }
}

// let cart = new Cart