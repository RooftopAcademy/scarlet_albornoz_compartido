let defaultTheme = {
  ['themeButtons' as string]: 'dark-mode',
  ['themeEvent' as string]: 'click',
  ['themeDark' as string]: 'dark',
}

let {themeButtons, themeEvent, themeDark} = defaultTheme

const toggleThemeBtn: HTMLButtonElement[]=Array.from(document.getElementsByClassName(themeButtons)) as HTMLButtonElement[]



export default function toggleTheme(document: Document,options=defaultTheme) {
  
  defaultTheme={
    ...defaultTheme,
    ...options
  }
  
  toggleThemeBtn.forEach((btn: HTMLButtonElement) => {
    btn.addEventListener(themeEvent, () => {
        document.documentElement.toggleAttribute(themeDark)
    })
  })
  
}
