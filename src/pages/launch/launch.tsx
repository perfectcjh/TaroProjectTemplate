import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './launch.scss'

export default class Launch extends Component {
  config: Config = {
    navigationBarTitleText: '启动页'
  }

  componentDidMount () { 
    this.miniAppLogin()
  }

  toLoginPage () {
    Taro.redirectTo({
      url: '/pages/login/login'
    })
  }

  toHomePage () {
    Taro.redirectTo({
      url: '/pages/home/home'
    })
  }

  onGetUserInfo = (res) => {
    const { errMsg } = res.detail
    if (this.checkIsOk(errMsg)) {
      this.toLoginPage()
    }
  }

  async miniAppLogin () {
    const { errMsg } = await Taro.login()
    if (this.checkIsOk(errMsg)) {
      console.log('Taro.login() ok')
    }
  }

  checkIsOk (errMsg) {
    console.log(errMsg)
    const okMsg = ':ok'
    return errMsg.includes(okMsg)
  }

  render () {
    return (
      <View className='launch-container'>
        <Button className='login-btn' openType='getUserInfo' onGetUserInfo={this.onGetUserInfo}>授权登录</Button>
        <Button className='button' type='primary' onClick={this.toHomePage}>首页</Button>
      </View>
    )
  }
}
