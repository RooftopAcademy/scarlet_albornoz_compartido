let defaultOptions = {
    ['buttonId']: 'hamburger',
    ['menuId']: 'nav-menu',
    ['eventName']: 'click',
    ['hideClass']: 'd-none',
    ['showClass']: 'show-menu'
};
let { buttonId, menuId, eventName, hideClass, showClass } = defaultOptions;
let menuElement = document.getElementById(menuId);
let classes = menuElement.classList;
export default function hamburger(document, options = defaultOptions) {
    defaultOptions = Object.assign(Object.assign({}, defaultOptions), options);
    const element = document.getElementById(buttonId);
    element.addEventListener(eventName, () => {
        classes.toggle(hideClass);
        classes.toggle(showClass);
    });
    return element;
}
