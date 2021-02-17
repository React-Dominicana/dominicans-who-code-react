
/** 
 * 
 * @param {string} word 
 * @returns {number} -1 is the string is empty, 0 if the string is not a URL that starts
 *  with http|https and 1 is is valid URL.
 */
export const checkUrl = word => {
    return (!word) ? -1
        : (/\b((https?|ftp):\/\/.*?\.[a-z]{2,4}\b)/g.test(word)) ? 1
            : 0
}

/**
 * Check if the object is empty.
 * @param {object} obj*
 * @returns {boolean} true if the object is empty, false if not.
 */
export const isEmptyObject = obj =>
    (Object.entries(obj).length === 0 && obj.constructor === Object)

/**
 * Search for a property inside an object.
 * 
 * @param {string} dflt the value we set if the object property is undefined or null.
 * @param {*} c the property we're searching for.
 * @param {*} obj the object where we want to search.
 * 
 * @returns {defaultValue | obj[criteria]} the default value we passed or the property value we're searching for.
 */
export const pathOr = (defaultValue = '', criteria = '', obj) =>
    obj[criteria] || defaultValue

/**
 * Generate a random number.
 * @returns {number} the random number.
 */
export const randomize = () =>
    0.5 - Math.random()

/**
 * Sort an array randomly.
 * 
 * @param {*} data the array of data.
 */
export const shuffle = data =>
    data.sort(randomize)
