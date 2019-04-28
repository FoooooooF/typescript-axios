const toString = Object.prototype.toString

// 判断是否为日期对象
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

// 判断是否为对象
export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}
