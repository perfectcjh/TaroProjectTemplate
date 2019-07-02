import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtButton } from 'taro-ui'

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <View className='title'>
          <Text>啦啦啦</Text>
          <AtButton type='primary'>按钮文案</AtButton>
        </View>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
