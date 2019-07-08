import Taro from '@tarojs/taro'

export function switchTab (url: string) {
  return Taro.switchTab({ url })
}

export function reLaunch (url: string) {
  return Taro.reLaunch({ url })
}

export function redirectTo (url: string) {
  return Taro.redirectTo({ url })
}

export function navigateTo (url: string) {
  return Taro.navigateTo({ url })
}

export function navigateBack (delta: number) {
  return Taro.navigateBack({ delta })
}

export function getCurrentPages () {
  return Taro.getCurrentPages()
}