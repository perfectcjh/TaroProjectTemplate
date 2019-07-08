const toString = Object.prototype.toString
const getRawType = function (t: any) {
  return toString.call(t).slice(8, -1).toLowerCase()
}

export function isArray (l: any) {
  return Array.isArray(l)
}

export function isPlainObject (o: any) {
  return getRawType(o) === 'object'
}
