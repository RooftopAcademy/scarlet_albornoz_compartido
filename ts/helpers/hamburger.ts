interface defaultOptionsInterface {
    [index: string]: string
}

let defaultOptions: defaultOptionsInterface = {
    'buttonId': 'hamburger',
    'menuId': 'nav-menu',
    'eventName': 'click',
    'hideClass': 'd-none',
    'showClass': 'show-menu'
}

const {buttonId, menuId, eventName, hideClass, showClass} = defaultOptions

const menuElement = document.getElementById(menuId) as HTMLElement;
const classes: DOMTokenList = menuElement.classList;

export default function hamburger(document : Document, options = defaultOptions) {
    defaultOptions = {
        ...defaultOptions,
        ...options
    }

    const hamburgerElement = document.getElementById(buttonId) as HTMLAnchorElement;

    hamburgerElement.addEventListener(eventName, () => {
        classes.toggle(hideClass)
        classes.toggle(showClass)
    });

    return hamburgerElement
}
