import "@tarojs/async-await"
import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import Launch from './pages/launch/launch'
import configStore from './reduce/store'

import './app.scss'
import 'taro-ui/dist/style/index.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config: Config = {
    pages: [
      'pages/launch/launch',
      'pages/login/login',
      'pages/home/home'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}></Provider>
        <Launch />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
