/**
 * Initialization options for my-esm library
 */
type InitOptions = {
    /**
     * name your host env
     */
    hostname: string;
    /**
     * your port
     */
    port: number;
    /**
     * the URL of your service
     */
    url: string;
};
/**
 * Item in the basket added by the user
 */
type BasketItem = {
    /**
     * how many basket items are added
     */
    quantity: number;
    /**
     * the actual product for this basket item
     */
    product: Product;
    /**
     * if the item has been added with discout
     */
    hasDiscount: boolean;
};
/**
 * Product in the shop
 */
type Product = {
    /**
     * how the product is called
     */
    name: string;
    /**
     * internal warehouse id
     */
    ean: string;
};
declare module "basket" {
    /**
     * @module lib
     */
    /**
     * @class Basket
     * @property {User} user
     * @property {BasketItem[]} items
     */
    export class Basket {
    }
}
declare module "index" {
    /**
     * Function that initializes the module
     * @module lib
     * @param {InitOptions} options specify init options
     * @returns {void}
     */
    export default function init(options: InitOptions): void;
    /**
     * Dummy variable to generate jsdoc entry
     * @module lib
     */
    export const foobar: "foobar";
    /**
     * Dummy class with annotations
     *
     * @class MyFoobar
     * @property {string} name - name of the class
     * @property {string} message - the message to display when calling the method
     */
    export class MyFoobar {
    }
    export namespace myvar {
        const _fooobar: string | number;
    }
}
//# sourceMappingURL=index.d.ts.map