let defaultTheme = {
    ['themeButtons']: 'dark-mode',
    ['themeEvent']: 'click',
    ['themeDark']: 'dark',
};
let { themeButtons, themeEvent, themeDark } = defaultTheme;
const toggleThemeBtn = Array.from(document.getElementsByClassName(themeButtons));
export default function toggleTheme(document, options = defaultTheme) {
    defaultTheme = Object.assign(Object.assign({}, defaultTheme), options);
    toggleThemeBtn.forEach((btn) => {
        btn.addEventListener(themeEvent, () => {
            document.documentElement.toggleAttribute(themeDark);
        });
    });
}
