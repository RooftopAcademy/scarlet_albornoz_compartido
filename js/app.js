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
import cartPage from "./Views/cartPage.js";
import orderConfirmation from "./Views/orderConfirmation.js";
import hamburger from "./helpers/hamburger.js";
import toggleTheme from "./helpers/theme.js";
/**
 * This variable represents the store app
 */
export let store = new Store();
/**
 * Esta variable presenta al producto en el que clickeo
 * o que va a agregar al carrito
 *
 * @todo This variable belongs to detail product
 * @deprecated
 */
let currentProduct;
/**
 * Initialize the hamburguer menu
 */
hamburger(document, {
    buttonId: 'hamburger'
});
toggleTheme(document);
const content = document.getElementById("content");
store.getProducts();
const routes = {
    "/": renderHomePage,
    "/products": renderProductsPage,
    "/cart": rendercartPage,
    "/productDetail": renderProductDetailPage,
    // '/about': aboutPage
    "/404": renderErrorPage,
};
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
        currentProduct = yield store.catalog.findComments(productId);
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
    detailsBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            let productId = parseInt(btn.dataset.productId);
            getCurrentProduct(productId);
        });
    });
    addToCartBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            let productId = parseInt(btn.dataset.productId);
            store.cart.addToCart(productId);
        });
    });
}
function renderProductDetailPage() {
    content.innerHTML = productDetailPage(currentProduct);
    findNavLinks();
}
function addOneProduct() {
    let addOneBtn = Array.from(document.getElementsByClassName("js-add-1"));
    addOneBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            let productId = parseInt(btn.dataset.productId);
            store.cart.addToCart(productId);
            rendercartPage();
        });
    });
}
function removeOneProduct() {
    let removeOneBtn = Array.from(document.getElementsByClassName("js-remove-1"));
    removeOneBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            let productId = parseInt(btn.dataset.productId);
            store.cart.remove(productId);
            rendercartPage();
        });
    });
}
function removeFromCart() {
    let removeProductBtn = Array.from(document.getElementsByClassName("js-remove-from-cart"));
    removeProductBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            let productId = parseInt(btn.dataset.productId);
            store.cart.removeFromCart(productId);
            rendercartPage();
        });
    });
}
function confirmOrder() {
    let confirmBtn = document.getElementById("confirmOrder");
    let url = orderConfirmation();
    confirmBtn.addEventListener("click", (e) => {
        var _a;
        e.preventDefault();
        (_a = window.open(url, "_blank")) === null || _a === void 0 ? void 0 : _a.focus();
    });
}
function rendercartPage() {
    content.innerHTML = cartPage();
    findNavLinks();
    addOneProduct();
    removeOneProduct();
    removeFromCart();
    confirmOrder();
}
renderHomePage();
