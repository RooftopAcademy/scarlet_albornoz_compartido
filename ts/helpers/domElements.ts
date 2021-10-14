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
    removeFromCart: [] as Array<HTMLButtonElement>,
    deleteFromCart: [] as Array<HTMLButtonElement>
}

export function getCartBtns(): void {
    cartButtons.details = Array.from(content!.getElementsByClassName('js-product-detail')) as Array<HTMLButtonElement>
    cartButtons.addToCart = Array.from(content!.getElementsByClassName('js-add')) as Array<HTMLButtonElement>
    cartButtons.removeFromCart = Array.from(content!.getElementsByClassName('js-remove')) as Array<HTMLButtonElement>
    cartButtons.deleteFromCart = Array.from(content!.getElementsByClassName('js-delete')) as Array<HTMLButtonElement>
}