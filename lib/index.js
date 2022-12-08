// Include type definitions
import "./typedef.js"

/**
 * Function that initializes the module
 * @module lib
 * @param {InitOptions} options specify init options
 * @returns {void} 
 */
export default function init(options) {
    console.log('>> Options', {
        parmas: `${options.hostname} - ${options.url}`
    })
}
/**
 * Dummy variable to generate jsdoc entry
 * @module lib
 */
export const foobar = "foobar"

/**
 * Dummy class with annotations
 * 
 * @class MyFoobar
 * @property {string} name - name of the class
 * @property {string} message - the message to display when calling the method
 */
export class MyFoobar {
}

/** 
 * @namespace
 * 
 * @field _fooobar is private
 * @field foobar getter and setter
 */
export const myvar = {
    /**
     * Private property for {@link myvar} space
     * @type {string|number}
     */
    _fooobar: '1',
    /**
     * getter for private property {@link myvar._foobar}
     */
    get foobar() {
        return this["_fooobar"]
    },
    /**
     * setter foobar method
     * @param {any} val
     */
    set foobar(val) {
        this["_fooobar"] = `set with a setter ${val}`
    },
}

console.log(myvar["_fooobar"])