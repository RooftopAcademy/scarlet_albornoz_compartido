import Product from "../app/Product";
import { Comment } from "../app/Product";
import commentCard from "./commentCard";

export default function productDetailPage(product: Product): string {
  let comments: Comment[] = product.comments;
  let commentsHTML: string = "";

  comments.forEach((comment: Comment) => {
    commentsHTML += commentCard(comment);
  });

  return /* html */ `
    <section class="section product-detail w-100 h-100 d-flex flex-col">
        <div class="col-card d-flex flex-col w-100 a-items-center">
            <div class="card">
                <img src="img/${product.img}" alt="product image" class="card-img">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <h6 class="card-price">$${product.price}</h6>
                    <p class="card-text">
                        ${product.description}
                    </p>
                    <a href="/products" class="btn nav-link">Back to product list</a>
                </div>
            </div>
        </div>
        <div class="product-comments col-card d-flex flex-col w-100 a-items-center">
            ${commentsHTML}
        </div>
    </section>
    `;
}
