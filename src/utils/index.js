
/**
 * TODO: make an stronger regex
 * 
 * @param {string} word 
 * @returns {number} -1 is the string is empty, 0 if the string is not a URL that starts
 *  with http|https and 1 is is valid URL
 */
export const checkUrl = word => {
    return (!word) ? -1 
    : (/^(http|https|ftp)/.test(word)) ? 1
    : 0
}
