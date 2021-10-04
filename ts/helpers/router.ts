import Product from '../app/Product'
import { store } from '../app'
import homePage from '../Views/homePage'
import productsPage from '../Views/productsPage'
import productDetailPage from '../Views/productDetailPage'
import errorPage from '../Views/errorPage'
import cartPage from '../Views/cartPage'
import orderConfirmation from '../Views/orderConfirmation'
import cartAlert from '../Views/cartAlert'

const content: HTMLElement=document.getElementById('content') as HTMLElement

interface routesInt {
  [index: string]: any
}

const routes: routesInt = {
  '/': renderHomePage,
  '/products': renderProductsPage,
  '/cart': rendercartPage,
  '/productDetail': renderProductDetailPage,
  // '/about': aboutPage
  '/404': renderErrorPage,
}

export function router(document: Document): void {
  let navLinks: Array<Element> = Array.from(
    document.getElementsByClassName('nav-link')
  )

  navLinks.forEach((nav: Element) => {
    nav.addEventListener('click', function (e: Event) {
      e.preventDefault()
      let target = e.target as HTMLAnchorElement
      let link = target.pathname

      if (routes[link]) {
        routes[link]()
      } else {
        routes['/404']()
      }
    })
  })
}

async function getProductComments(productId: number): Promise<Product> {

  let currentProduct = await store.catalog.findComments(productId)
  
  return currentProduct
  
}

function renderHomePage(document: Document): void {
  content.innerHTML = homePage()
  router(document)
}

function renderErrorPage(document: Document): void {
  content.innerHTML = errorPage()
  router(document)
}


function renderProductsPage(document: Document): void {
  content.innerHTML = productsPage()
  router(document)

  renderProductDetailPage(document)

  addProductToCart(document)
}


function renderProductDetailPage(document: Document): void {
  const detailsBtn: HTMLButtonElement[] = Array.from(
    document.getElementsByClassName('js-product-detail')
  ) as HTMLButtonElement[]

  detailsBtn.forEach((btn: HTMLButtonElement) => {
    btn.addEventListener('click', async (e: Event) => {
      e.preventDefault()

      let productId: number = parseInt(btn.dataset.productId as string)
      let currentProduct = await getProductComments(productId)

      content.innerHTML = productDetailPage(currentProduct)
      router(document)
    })
  })
}

function productAddedAlert(document: Document,product: Product) {
  let alertContainer: HTMLElement=document.getElementById('alert-container') as HTMLElement
  alertContainer.innerHTML += cartAlert(product)
  
  let alerts: HTMLElement[]=Array.from(document.getElementsByClassName('alert')) as HTMLElement[]
  
  function removeAlert() {alertContainer.removeChild(alerts[0])}

  let interval=setInterval(removeAlert,3000)
  clearInterval(interval)
}

function addProductToCart(document: Document, render?:string): void {
  let addToCartBtn: HTMLButtonElement[]=Array.from(document.getElementsByClassName('js-add-to-cart')) as HTMLButtonElement[]
  let alertContainer: HTMLElement = document.getElementById('alert-container') as HTMLElement

  addToCartBtn.forEach(btn => {
    btn.addEventListener('click',(e: Event) => {

      e.preventDefault()

      let productId: number=parseInt(btn.dataset.productId as string)
      let product=store.catalog.findById(productId)
      
      store.cart.addToCart(productId)

      if(render) rendercartPage(document)
      else productAddedAlert(document, product)
    })
  })
}

function removeOneProduct(document: Document): void {
  let removeOneBtn: HTMLButtonElement[] = Array.from(
    document.getElementsByClassName('js-remove-1')
  ) as HTMLButtonElement[]

  removeOneBtn.forEach(btn => {
    btn.addEventListener('click', (e: Event) => {
      e.preventDefault()

      let productId: number = parseInt(btn.dataset.productId as string)
      store.cart.remove(productId)
      rendercartPage(document)
    })
  })
}

function removeFromCart(document: Document): void {
  let removeProductBtn: HTMLButtonElement[] = Array.from(
    document.getElementsByClassName('js-remove-from-cart')
  ) as HTMLButtonElement[]

  removeProductBtn.forEach(btn => {
    btn.addEventListener('click', (e: Event) => {
      e.preventDefault()
      let productId: number = parseInt(btn.dataset.productId as string)
      store.cart.removeFromCart(productId)
      rendercartPage(document)
    })
  })
}

function confirmOrder(document: Document): void {
  let confirmBtn: HTMLButtonElement = document.getElementById(
    'confirmOrder'
  ) as HTMLButtonElement

  let url = orderConfirmation()

  confirmBtn.addEventListener('click', (e: Event) => {
    e.preventDefault()
    window.open(url, '_blank')?.focus()
  })
}

function rendercartPage(document: Document): void {
  content.innerHTML = cartPage()
  router(document)
  addProductToCart(document, 'render')
  removeOneProduct(document)
  removeFromCart(document)
  confirmOrder(document)
}

renderHomePage(document)

