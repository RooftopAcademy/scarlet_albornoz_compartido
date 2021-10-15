let navbar = document.getElementById('navbar')
let header = document.getElementById('header')
let content = document.getElementById('content')

export let links = {
  navbar: navbarLinks,
  content: contentLinks,
}

function navbarLinks(): Array<Element> {
    return Array.from(navbar!.getElementsByClassName('nav-link')).concat(Array.from(header!.getElementsByClassName('nav-link')))
}

function contentLinks(): Array<Element> {
    return Array.from(content!.getElementsByClassName('nav-link'))
}


export let cartButtons = {
    details: [] as Array<HTMLButtonElement>,
    addToCart: [] as Array<HTMLButtonElement>,
    substractFromCart: [] as Array<HTMLButtonElement>,
    deleteFromCart: [] as Array<HTMLButtonElement>
}

export function getCartBtns(): void {
    let details = Array.from(content!.getElementsByClassName('js-product-detail')) as Array<HTMLButtonElement>
    let addToCart = Array.from(content!.getElementsByClassName('js-add')) as Array<HTMLButtonElement>
    let substractFromCart = Array.from(content!.getElementsByClassName('js-substract')) as Array<HTMLButtonElement>
    let deleteFromCart = Array.from(content!.getElementsByClassName('js-delete')) as Array<HTMLButtonElement>

    console.log(`details: ${details}, addToCart: ${addToCart}, substractFromCart: ${substractFromCart}, deleteFromCart: ${deleteFromCart}`)

    details.length > 0 ? cartButtons.details = details : cartButtons.details = []
    addToCart.length > 0 ? cartButtons.addToCart = addToCart : cartButtons.addToCart = []
    substractFromCart.length > 0 ? cartButtons.substractFromCart = substractFromCart : cartButtons.substractFromCart = []
    deleteFromCart.length > 0 ? cartButtons.deleteFromCart = deleteFromCart : cartButtons.deleteFromCart = []
}

export let sortingOptions =  {
    sortType: null as null | HTMLSelectElement,
    sortKey: null as null | HTMLSelectElement
}

export function getSortingOptions():void {
    sortingOptions.sortType = document.getElementById('sorting-type') as HTMLSelectElement
    sortingOptions.sortKey = document.getElementById('key') as HTMLSelectElement
}