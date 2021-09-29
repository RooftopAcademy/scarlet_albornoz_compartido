import Product from "./app/Product";
import Store from "./app/Store";
import homePage from "./Views/homePage";
import productsPage from "./Views/productsPage";
import productDetailPage from "./Views/productDetailPage";
import errorPage from "./Views/errorPage";
import cartPage from "./Views/cartPage";
import orderConfirmation from "./Views/orderConfirmation";
import hamburger from "./helpers/hamburger";
import toggleTheme from "./helpers/theme";

/**
 * This variable represents the store app
 */
export let store: Store = new Store();

/**
 * Esta variable presenta al producto en el que clickeo
 * o que va a agregar al carrito
 * 
 * @todo This variable belongs to detail product
 * @deprecated 
 */
let currentProduct: Product;

/**
 * Initialize the hamburguer menu
 */
hamburger(document, {
  buttonId : 'hamburger'
})

toggleTheme(document)

const content: HTMLElement = document.getElementById("content") as HTMLElement;

store.getProducts();

interface routesInt {
  [index: string]: any;
}

const routes: routesInt = {
  "/": renderHomePage,
  "/products": renderProductsPage,
  "/cart": rendercartPage,
  "/productDetail": renderProductDetailPage,
  // '/about': aboutPage
  "/404": renderErrorPage,
};

function findNavLinks(): void {
  let navLinks: Array<Element> = Array.from(
    document.getElementsByClassName("nav-link")
  );

  navLinks.forEach((nav: Element) => {
    nav.addEventListener("click", function (e: Event) {
      e.preventDefault();
      let target = e.target as HTMLAnchorElement;
      let link = target.pathname;

      if (routes[link]) {
        routes[link]();
      } else {
        routes["/404"]();
      }
    });
  });
}

async function getCurrentProduct(productId: number): Promise<void> {
  currentProduct = await store.catalog.findComments(productId);
  content.innerHTML = productDetailPage(currentProduct);
  findNavLinks();
}

function renderHomePage(): void {
  content.innerHTML = homePage();
  findNavLinks();
}

function renderErrorPage(): void {
  content.innerHTML = errorPage();
  findNavLinks();
}

function renderProductsPage(): void {
  content.innerHTML = productsPage();
  findNavLinks();

  const detailsBtn: HTMLButtonElement[] = Array.from(
    document.getElementsByClassName("js-product-detail")
  ) as HTMLButtonElement[];

  const addToCartBtn: HTMLButtonElement[] = Array.from(
    document.getElementsByClassName("js-add-to-cart")
  ) as HTMLButtonElement[];

  detailsBtn.forEach((btn: HTMLButtonElement) => {
    btn.addEventListener("click", (e: Event) => {
      e.preventDefault();
      let productId: number = parseInt(btn.dataset.productId as string);
      getCurrentProduct(productId);
    });
  });

  addToCartBtn.forEach((btn: HTMLButtonElement) => {
    btn.addEventListener("click", (e: Event) => {
      e.preventDefault();
      let productId: number = parseInt(btn.dataset.productId as string);
      store.cart.addToCart(productId);
    });
  });
}

function renderProductDetailPage(): void {
  content.innerHTML = productDetailPage(currentProduct);
  findNavLinks();
}

function addOneProduct(): void {
  let addOneBtn: HTMLButtonElement[] = Array.from(
    document.getElementsByClassName("js-add-1")
  ) as HTMLButtonElement[];

  addOneBtn.forEach((btn) => {
    btn.addEventListener("click", (e: Event) => {
      e.preventDefault();
      let productId: number = parseInt(btn.dataset.productId as string);
      store.cart.addToCart(productId);
      rendercartPage();
    });
  });
}

function removeOneProduct(): void {
  let removeOneBtn: HTMLButtonElement[] = Array.from(
    document.getElementsByClassName("js-remove-1")
  ) as HTMLButtonElement[];

  removeOneBtn.forEach((btn) => {
    btn.addEventListener("click", (e: Event) => {
      e.preventDefault();
      let productId: number = parseInt(btn.dataset.productId as string);
      store.cart.remove(productId);
      rendercartPage();
    });
  });
}

function removeFromCart(): void {
  let removeProductBtn: HTMLButtonElement[] = Array.from(
    document.getElementsByClassName("js-remove-from-cart")
  ) as HTMLButtonElement[];

  removeProductBtn.forEach((btn) => {
    btn.addEventListener("click", (e: Event) => {
      e.preventDefault();
      let productId: number = parseInt(btn.dataset.productId as string);
      store.cart.removeFromCart(productId);
      rendercartPage();
    });
  });
}

function confirmOrder(): void {
  let confirmBtn: HTMLButtonElement = document.getElementById(
    "confirmOrder"
  ) as HTMLButtonElement;

  let url = orderConfirmation();

  confirmBtn.addEventListener("click", (e: Event) => {
    e.preventDefault();
    window.open(url, "_blank")?.focus();
  });
}

function rendercartPage(): void {
  content.innerHTML = cartPage();
  findNavLinks();
  addOneProduct();
  removeOneProduct();
  removeFromCart();
  confirmOrder();
}

renderHomePage();
