/**
 * @fileoverview Utils module
 * @author Thinh Nguyen
 * @version 1.0.0
 */

/**
 * Converts a string to kebab case
 * @param {String} str String to convert
 * @return {String} Converted string
 */
export function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}
