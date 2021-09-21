class Product {
    constructor() {
        this.id = Number
        this.name = String
        this.price = Number
        this.description = String
        this.img = String
        this.stock = Number
        this.comments = []
    }

    setId(n) {
        if (typeof n === 'number') this.id = n
        else throw new Error('El id del producto debe ser un número')
    }

    setName(n) {
        if (typeof n === 'string') this.name = n
        else throw new Error('El nombre del producto debe ser una cadena de texto')
    }

    setPrice(n) {
        if (typeof n === 'number') this.price = n
        else throw new Error('El precio del producto debe ser un número')
    }

    setDescription(n) {
        if (typeof n === 'string') this.description = n
        else throw new Error('La descripción del producto debe ser una cadena de texto')
    }

    setImg(n) {
        if (typeof n === 'string') this.img = n
        else throw new Error('La imagen del producto debe ser una cadena de texto')
    }

    setStock(n) {
        if (typeof n === 'number') this.stock = n
        else throw new Error('El stock del producto debe ser un número')
    }

    async getComments() {
        let res = await fetch('https://jsonplaceholder.typicode.com/comments')
        let json = await res.json()
        this.comments = json.filter(item => item.postId == this.id)
        return this
    }

    getName() {
        return this.name
    }

    getPrice() {
        return this.price
    }

    getDescription() {
        return this.description
    }

    getImg() {
        return this.img
    }

    getStock() {
        return this.stock
    }
}