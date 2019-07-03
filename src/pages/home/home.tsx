import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './home.scss'

export default class Home extends Component {
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentDidMount () { }

  render () {
    return (
      <View className=''>
        <Text>首页</Text>
      </View>
    )
  }
}
