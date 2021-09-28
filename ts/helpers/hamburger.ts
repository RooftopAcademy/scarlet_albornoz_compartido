let defaultOptions = {
    ['buttonId' as string] : 'hamburger',
    ['menuId' as string] : 'nav-menu',
    ['eventName' as string] : 'click',
    ['hideClass' as string] : 'd-none',
    ['showClass' as string] : 'show-menu'
}

let {buttonId, menuId, eventName, hideClass, showClass} = defaultOptions

let menuElement: HTMLElement = document.getElementById(menuId) as HTMLElement;
let classes: DOMTokenList = menuElement.classList;

export default function hamburger(document : Document, options = defaultOptions) {
    defaultOptions = {
        ...defaultOptions,
        ...options
    }

    const element: HTMLAnchorElement = document.getElementById(buttonId) as HTMLAnchorElement;

    element.addEventListener(eventName, () => {
        classes.toggle(hideClass)
        classes.toggle(showClass)
    });

    return element
}
