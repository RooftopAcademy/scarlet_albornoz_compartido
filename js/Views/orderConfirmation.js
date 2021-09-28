import { store } from "../app.js";
export default function orderConfirmation() {
    let data = store.cart.products;
    let productList = "";
    let cartTotal = 0;
    data.forEach((product) => {
        productList += `- ${product.name}%0A
           ${product.qty}%0A
           ${product.price * product.qty}%0A`;
        cartTotal += product.price * product.qty;
    });
    productList.replace(/ /g, "%20");
    return `https://api.whatsapp.com/send?phone=5491159451640&text=*_MUSHI_*%0A*Articles*%0A%0A${productList}%0A*Grand%20Total:*%0A${cartTotal}%0A%0APlease,%20pay%20your%20total%20amount%20to%20the%20following%20alias:%20smichelle05a.mp`;
}
