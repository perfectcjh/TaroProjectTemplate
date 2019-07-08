interface ElementInArray {
  include: boolean
  index: number
}

interface Money {
  int: string
  zero: string
}

export function inArray (ele: string | number, array: any[]): ElementInArray {
  const i = array.indexOf(ele)
  return {
    include: i !== -1,
    index: i
  }
}

export function splitMoney (money: string): Money {
  let [int, zero] = money.split('.')
  zero = !zero ? '00' : (zero.length < 2 ? zero + '0' : zero.substr(0, 2))
  return {int, zero}
}

export function toFixed2 (num: number) {
  let res = parseInt((num * 10000) + '') / 10000
  let {int, zero} = splitMoney(res + '')
  return `${int}.${zero}`
}

export function isNotPlainObj (obj: object): boolean {
  return Object.keys(obj).length > 0
}

export function sliceStr (str: string, defaultLength: number = 6) {
  if (str.length > defaultLength) {
    str = str.substr(0, defaultLength) + '...'
  }
  return str
}

export function toJson (d: any) {
  return JSON.stringify(d)
}

export function parseJson (d: string) {
  return JSON.parse(d)
}

export function cloneDeep (d: any) {
  return parseJson(toJson(d))
}
