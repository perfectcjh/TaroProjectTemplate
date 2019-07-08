import Taro from '@tarojs/taro'

export function setItem (key: string, value: any) {
  return Taro.setStorageSync(key, value)
}

export function getItem (key: string) {
  return Taro.getStorageSync(key)
}

export function removeItem (key: string) {
  return Taro.removeStorageSync(key)
}

export function clear () {
  return Taro.clearStorageSync()
}
