/**
 * Initialization options for my-esm library
 * 
 * @typedef InitOptions
 * @property {string} hostname name your host env
 * @property {number} port your port
 * @property {string} url the URL of your service
 */

/**
 * Item in the basket added by the user
 * @typedef BasketItem
 * @property {number} quantity how many basket items are added
 * @property {Product} product the actual product for this basket item
 * @property {boolean} hasDiscount if the item has been added with discout
 */

/**
 * Product in the shop
 * @typedef Product
 * @property {string} name how the product is called
 * @property {string} ean internal warehouse id
 */