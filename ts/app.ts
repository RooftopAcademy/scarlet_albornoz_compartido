import router from './helpers/router'
import Store from './app/Store'
import hamburger from './helpers/hamburger'
import toggleTheme from './helpers/theme'

/**
 * Initialize the hamburguer menu
 */
hamburger(document, {
  buttonId: 'hamburger',
})

/**
 * Initialize toggle theme buttons for dark mode
 */
toggleTheme(document)

/**
 * Initialize router
 */

router('navbar')

/**
 * This variable represents the store app
 */
export let store: Store = new Store()

/**
 * Get product catalog for the first time
 */

store.getProducts()
