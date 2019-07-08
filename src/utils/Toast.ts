import Taro from '@tarojs/taro'

export default class Toast {

  static isLoading: boolean = false

  static show (title: string, duration = 1500) {
    return Taro.showToast({
      title,
      mask: true,
      duration
    })
  }

  // 成功提示框
  static success (title: string, duration = 1500) {
    return Taro.showToast({
      duration,
      title,
      icon: 'success',
      mask: true
    })
  }

  // 失败提示框
  static fail (title: string, duration = 1500) {
    return Taro.showToast({
      duration,
      title,
      icon: 'none',
      mask: true
    })
  }

  // 弹出确认窗口
  static confirm (title: string = '提示', content: string) {
    return Taro.showModal({
      title,
      content,
      showCancel: true
    })
  }

  // 加载提示框
  static showLoading (title = '加载中') {
    if (Toast.isLoading) return
    Toast.isLoading = true
    return Taro.showLoading({
      title,
      mask: true
    })
  }

  // 隐藏加载
  static hideLoading () {
    if (Toast.isLoading) {
      Toast.isLoading = false
      return Taro.hideLoading()
    }
  }
}
