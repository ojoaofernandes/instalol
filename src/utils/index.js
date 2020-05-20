/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 */
export function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

/**
 * Checks if the length of `value` is between `min` and `max`.
 *
 * @param {*} value The value to check.
 * @param {number} min The minimum length.
 * @param {number} max The maximum length.
 * @returns {boolean} Returns `true` if the length of `value` is greater than or
 * equal to `min` and less than or equal to `max`, else `false`.
 */
export function isLengthBetween(value, min, max) {
  return isString(value) && value.length >= min && value.length <= max;
}
