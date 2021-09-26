var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Store from "./app/Store.js";
import homePage from "./Views/homePage.js";
import productsPage from "./Views/productsPage.js";
import productDetailPage from "./Views/productDetailPage.js";
import errorPage from "./Views/errorPage.js";
export let store = new Store();
export let currentProduct;
const content = document.getElementById("content");
store.getProducts();
function findNavLinks() {
    let navLinks = Array.from(document.getElementsByClassName("nav-link"));
    navLinks.forEach((nav) => {
        nav.addEventListener("click", function (e) {
            e.preventDefault();
            let target = e.target;
            let link = target.pathname;
            if (routes[link]) {
                routes[link]();
            }
            else {
                routes["/404"]();
            }
        });
    });
}
function getCurrentProduct(productId) {
    return __awaiter(this, void 0, void 0, function* () {
        currentProduct = yield store.catalog.findById(productId);
        content.innerHTML = productDetailPage(currentProduct);
        findNavLinks();
    });
}
function renderHomePage() {
    content.innerHTML = homePage();
    findNavLinks();
}
function renderErrorPage() {
    content.innerHTML = errorPage();
    findNavLinks();
}
function renderProductsPage() {
    content.innerHTML = productsPage();
    findNavLinks();
    const detailsBtn = Array.from(document.getElementsByClassName("js-product-detail"));
    const addToCartBtn = Array.from(document.getElementsByClassName("js-add-to-cart"));
    const detailsAndCartBtns = detailsBtn.concat(addToCartBtn);
    detailsAndCartBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            let productId = parseInt(btn.dataset.productId);
            getCurrentProduct(productId);
        });
    });
}
const routes = {
    "/": renderHomePage,
    "/products": renderProductsPage,
    // '/cart': cartPage,
    // '/about': aboutPage
    "/404": renderErrorPage,
};
