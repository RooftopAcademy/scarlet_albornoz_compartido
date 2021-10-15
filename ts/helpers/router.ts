import Product from '../app/Product'
import { store } from '../app'
import homePage from '../Views/homePage'
import productsPage from '../Views/productsPage'
import productDetailPage from '../Views/productDetailPage'
import errorPage from '../Views/errorPage'
import cartPage from '../Views/cartPage'
import orderConfirmation from '../Views/orderConfirmation'
import cartAlert from '../Views/cartAlert'
import { links, cartButtons, getCartBtns, getSortingOptions, sortingOptions } from './domElements'

const content = document.getElementById('content') as HTMLElement

interface routesInt {
  [index: string]: ()=>void
}

const routes: routesInt = {
  '/': renderHomePage,
  '/products': renderProductsPage,
  '/cart': renderCartPage,
  '/productDetail': renderProductDetailPage,
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

  getSortingOptions()
  sortProductList()
  store.catalog.sorting.key == 'id' ? sortingOptions.sortKey!.value = 'default' : sortingOptions.sortKey!.value = store.catalog.sorting.key
  sortingOptions.sortType!.value = store.catalog.sorting.sortType
  renderProductDetailPage()
  getCartBtns()
  addProductToCart()
}


function renderProductDetailPage(): void {
  
  cartButtons.details.forEach((btn) => {
    btn.addEventListener('click', async (e: Event) => {
      e.preventDefault()

      let productId: number = parseInt(btn.dataset.productId as string)
      let currentProduct = await getProductComments(productId)

      content.innerHTML = productDetailPage(currentProduct)
      router('content')
      getCartBtns()
      addProductToCart(renderProductDetailPage)
      substractFromCart()
    })
  })
}

function productAddedAlert(product: Product) {
  let alertContainer = document.getElementById('alert-container') as HTMLElement
  alertContainer.innerHTML += cartAlert(product)
}

function addProductToCart(callback?:Function): void {

  cartButtons.addToCart.forEach((btn: HTMLButtonElement) => {
    btn.addEventListener('click', (e: Event) => {
      e.preventDefault()

      let productId: number = parseInt(btn.dataset.productId as string)
      let product = store.catalog.findById(productId)

      store.cart.add(product)

      if (callback) callback()
      else productAddedAlert(product)
    })
  })

}

function substractFromCart(): void {
  
  cartButtons.substractFromCart.forEach((btn: HTMLButtonElement) => {
    btn.addEventListener('click', (e: Event) => {
      e.preventDefault()

      let productId: number = parseInt(btn.dataset.productId as string)
      let product = store.catalog.findById(productId)

      store.cart.substract(product)
      renderCartPage()
    })
  })
}

function deleteFromCart(): void {
  
  cartButtons.deleteFromCart.forEach((btn: HTMLButtonElement) => {
    btn.addEventListener('click', (e: Event) => {
      e.preventDefault()
      let productId: number = parseInt(btn.dataset.productId as string)
      let product = store.catalog.findById(productId)
  
      store.cart.delete(product)
      renderCartPage()
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

function renderCartPage(): void {
  content.innerHTML = cartPage()
  router('content')
  addProductToCart(renderCartPage)
  substractFromCart()
  deleteFromCart()
  confirmOrder()
}



function sortProductList(): void {

  let sortOptions = [sortingOptions.sortKey, sortingOptions.sortType]

  sortOptions.forEach(opt => {
    opt!.addEventListener('change', ()=>{
      let sortOrder = sortingOptions.sortType!.value
      let sortingKey

      sortingOptions.sortKey!.value == 'default' ? sortingKey = 'id' : sortingKey = sortingOptions.sortKey!.value as keyof Product

      store.catalog.sortByKey(sortingKey, sortOrder)
      renderProductsPage()
    })
  });
}


renderHomePage()