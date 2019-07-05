import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './launch.scss'
import Api from '../../service/api'

export default class Launch extends Component {
  config: Config = {
    navigationBarTitleText: '启动页'
  }

  constructor (props) {
    super(props)
    this.state = {
      loginCode: '',
      userEncryptedData: '',
      userIv: '',
      userRawData: '',
      userSignature: ''
    }
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

  async requestFastLogin () {
    const path = 'api/fastLogin'
    const params = {
      code: this.state.loginCode,
      encryptedData: this.state.userEncryptedData,
      iv: this.state.userIv,
      rawData: this.state.userRawData,
      signature: this.state.userSignature
    }
    const { code, data } = await Api.request(path, params)
    if (code === 200) {
      this.toLoginPage()
    }
  }

  onGetUserInfo = (res) => {
    const { errMsg, iv, encryptedData, rawData, signature } = res.detail
    if (this.checkIsOk(errMsg)) {
      this.setState({
        userEncryptedData: encryptedData,
        userIv: iv,
        userRawData: rawData,
        userSignature: signature
      }, () => {
        this.requestFastLogin()
      })
    } else {
      Taro.showToast({
        title: errMsg
      })
    }
  }

  async miniAppLogin () {
    const { errMsg, code } = await Taro.login()
    if (this.checkIsOk(errMsg)) {
      this.setState({ 
        loginCode: code 
      })
    } else {
      Taro.showToast({
        title: errMsg
      })
    }
  }

  checkIsOk (errMsg) {
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
