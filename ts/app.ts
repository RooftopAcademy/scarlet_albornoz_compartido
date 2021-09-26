import Store from "./app/Store.js";
import homePage from "./Views/homePage.js";
import productsPage from "./Views/productsPage.js";
import productDetailPage from "./Views/productDetailPage.js";
import errorPage from "./Views/errorPage.js";
import Product from "./app/Product.js";

export let store: Store = new Store();
export let currentProduct: Product;

const content: HTMLElement = document.getElementById("content") as HTMLElement;

store.getProducts();

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
  currentProduct = await store.catalog.findById(productId);
  content.innerHTML = productDetailPage(currentProduct);
  findNavLinks();
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

  const detailsBtn: HTMLButtonElement[] = Array.from(
    document.getElementsByClassName("js-product-detail")
  ) as HTMLButtonElement[];

  const addToCartBtn: HTMLButtonElement[] = Array.from(
    document.getElementsByClassName("js-add-to-cart")
  ) as HTMLButtonElement[];

  const detailsAndCartBtns: HTMLButtonElement[] =
    detailsBtn.concat(addToCartBtn);

  detailsAndCartBtns.forEach((btn: HTMLButtonElement) => {
    btn.addEventListener("click", (e: Event) => {
      e.preventDefault();
      let productId: number = parseInt(btn.dataset.productId as string);
      getCurrentProduct(productId);
    });
  });
}

// renderHomePage();

interface routesInt {
  [index: string]: any;
}

const routes: routesInt = {
  "/": renderHomePage,
  "/products": renderProductsPage,
  // '/cart': cartPage,
  // '/about': aboutPage
  "/404": renderErrorPage,
};
