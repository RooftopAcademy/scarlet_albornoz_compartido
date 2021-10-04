import Product from './app/Product'
import Store from './app/Store'
import hamburger from './helpers/hamburger'
import toggleTheme from './helpers/theme'
import { router} from './helpers/router'

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
 * This variable represents the store app
 */
export let store: Store = new Store()

/**
 * Get product catalog for the first time
 */

store.getProducts()

/**
 * Initialize router
 */

router(document)
