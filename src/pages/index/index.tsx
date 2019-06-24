import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.styl'

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
        <View className='carouselViewContainer'>
          <Swiper
           className='carouselView'
           indicatorColor='#000000'
           indicatorActiveColor='#333333'
           indicatorDots
           autoplay
           circular>
           <SwiperItem>
             <View className='carouselItem'>xxx</View>
           </SwiperItem>
           <SwiperItem>
             <View className='carouselItem'>xxx</View>
           </SwiperItem>
          </Swiper>
        </View>
        <Text className='text'>Hello world!</Text>
        <AtButton type='primary'>xxx</AtButton>
      </View>
    )
  }
}
