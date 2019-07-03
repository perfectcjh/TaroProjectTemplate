import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Button } from '@tarojs/components'
import './login.scss'

export default class Login extends Component {
  config: Config = {
    navigationBarTitleText: '登录'
  }

  componentDidMount () { }

  checkIsOk (errMsg) {
    console.log(errMsg)
    const okMsg = ':ok'
    return errMsg.includes(okMsg)
  }
  
  requestLogin () {
    Taro.redirectTo({
      url: 'pages/home/home'
    })
  }

  onGetPhoneNumber (res) {
    const { errMsg } = res.detail
    if (this.checkIsOk(errMsg)) {
      this.requestLogin()
    }
  }

  goProtocalDetail () {
    console.log('goProtocalDetail')
  }

  protocalBtnClick () {
    console.log('protocalBtnClick')
  }

  render () {
    return (
      <View className='login-container'>
        <View className='user-avatar-container'>
          <View className='user-avatar'>
            <Image src='https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eq8Y3mv27zrOnVW2xYIAUNc6C0HxK4icREWEX86hiam4UX7ZTpr1tE5JNMoXrHEsBaLEUf9oxAITJtg/132'></Image>
          </View>
        </View>
        <View className='login-btn-container'>
          <Button className='login-btn' type='primary' openType='getPhoneNumber' onGetPhoneNumber={this.onGetPhoneNumber}>微信手机号快速登录</Button>
        </View>
        <View className='login-protocal-container'>
          <View className='protocal-btn' onClick={this.protocalBtnClick}></View>
          <View className='protocal-text-black'>同意</View>
          <View className='protocal-text-yellow' onClick={this.goProtocalDetail}>《xxx服务协议》</View>
        </View>
      </View>
    )
  }
}
