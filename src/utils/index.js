/* eslint-disable import/prefer-default-export */

/**
 * 判断obj参数是否是可以正确枚举的对象
 * 主要是为了排除form-data对象产生的异常现象
 * @param {object|Array} obj 要判断的元素
 * @returns {bool}
 */
export function isEnumerable(obj) {
  if (Array.isArray(obj)) {
    return true
  }
  return Object.prototype.toString.call(obj) === '[object Object]'
}
