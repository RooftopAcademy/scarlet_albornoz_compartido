export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export default class Product {
  id: number = 0;
  name: string = "";
  price: number = 0;
  description: string = "";
  img: string = "";
  comments: Comment[] = [];
  qty: number = 0;

  async getComments(): Promise<Product> {
    let res: Response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    let json: Comment[] = await res.json();
    this.comments = json.filter((item: Comment) => item.postId == this.id);
    return this;
  }
}
