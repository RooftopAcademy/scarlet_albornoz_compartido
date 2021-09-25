type Comment = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

export default class Product {
    id = 0
    name = ''
    price = 0
    description = ''
    img = ''
    comments: Comment[] = []

    async getComments(): Promise<Product> {
        let res: Response = await fetch('https://jsonplaceholder.typicode.com/comments')
        let json: Comment[] = await res.json()
        this.comments = json.filter((item: Comment) => item.postId == this.id)
        return this
    }
}