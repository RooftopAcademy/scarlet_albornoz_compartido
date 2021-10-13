import Product from '../app/Product'
import { store } from '../app'
import homePage from '../Views/homePage'
import productsPage from '../Views/productsPage'
import productDetailPage from '../Views/productDetailPage'
import errorPage from '../Views/errorPage'
import cartPage from '../Views/cartPage'
import orderConfirmation from '../Views/orderConfirmation'
import cartAlert from '../Views/cartAlert'
import { links, cartButtons, getCartBtns } from './domElements'

const content = document.getElementById('content') as HTMLElement

interface routesInt {
  [index: string]: ()=>void
}

const routes: routesInt = {
  '/': renderHomePage,
  '/products': renderProductsPage,
  '/cart': rendercartPage,
  '/productDetail': renderProductDetailPage,
  // '/about': aboutPage
  '/404': renderErrorPage,
}

export default function router(element:keyof typeof links): void {

  links[element]().forEach((nav: Element) => {
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

function renderHomePage(): void {
  content.innerHTML = homePage()
  router('content')
}

function renderErrorPage(): void {
  content.innerHTML = errorPage()
  router('content')
}


function renderProductsPage(): void {
  content.innerHTML = productsPage()
  router('content')

  renderProductDetailPage()

  addProductToCart()
}


function renderProductDetailPage(): void {
  getCartBtns()
  const detailsBtn = cartButtons.details

  detailsBtn.forEach((btn) => {
    btn.addEventListener('click', async (e: Event) => {
      e.preventDefault()

      let productId: number = parseInt(btn.dataset.productId as string)
      let currentProduct = await getProductComments(productId)

      content.innerHTML = productDetailPage(currentProduct)
      router('content')
    })
  })
}

// export async function renderProductDetailPage(pId: number): Promise<void> {
//   let currentProduct = await getProductComments(pId)
//   content.innerHTML = productDetailPage(currentProduct)
//   router('content')
// }

function productAddedAlert(product: Product) {
  let alertContainer = document.getElementById('alert-container') as HTMLElement
  alertContainer.innerHTML += cartAlert(product)
  
  let alerts = Array.from(document.getElementsByClassName('alert')) as HTMLElement[]
  
  function removeAlert() {alertContainer.removeChild(alerts[0])}

  let interval=setInterval(removeAlert,3000)
  clearInterval(interval)
}

function addProductToCart(render?:string): void {
  let addToCartBtn = Array.from(document.getElementsByClassName('js-add-to-cart')) as HTMLButtonElement[]

  addToCartBtn.forEach((btn: HTMLButtonElement) => {
    btn.addEventListener('click', (e: Event) => {
      e.preventDefault()

      let productId: number = parseInt(btn.dataset.productId as string)
      let product = store.catalog.findById(productId)

      store.cart.add(product)

      if (render) rendercartPage()
      else productAddedAlert(product)
    })
  })
}

function removeFromCart(): void {
  let removeOneBtn = Array.from( document.getElementsByClassName('js-remove-1') ) as HTMLButtonElement[]

  removeOneBtn.forEach((btn: HTMLButtonElement) => {
    btn.addEventListener('click', (e: Event) => {
      e.preventDefault()

      let productId: number = parseInt(btn.dataset.productId as string)
      let product = store.catalog.findById(productId)

      store.cart.remove(product)
      rendercartPage()
    })
  })
}

function deleteFromCart(): void {
  let removeProductBtn = Array.from( document.getElementsByClassName('js-remove-from-cart') ) as HTMLButtonElement[]

  removeProductBtn.forEach((btn: HTMLButtonElement) => {
    btn.addEventListener('click', (e: Event) => {
      e.preventDefault()
      let productId: number = parseInt(btn.dataset.productId as string)
      let product = store.catalog.findById(productId)
  
      store.cart.delete(product)
      rendercartPage()
    })
  })
}

function confirmOrder(): void {
  let confirmBtn = document.getElementById( 'confirmOrder' ) as HTMLButtonElement

  let url = orderConfirmation()

  confirmBtn.addEventListener('click', (e: Event) => {
    e.preventDefault()
    window.open(url, '_blank')?.focus()
  })
}

function rendercartPage(): void {
  content.innerHTML = cartPage()
  router('content')
  addProductToCart('render')
  removeFromCart()
  deleteFromCart()
  confirmOrder()
}

renderHomePage()