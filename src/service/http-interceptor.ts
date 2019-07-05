import Taro from '@tarojs/taro'
import EncryptData from './encrypt'
import { HttpStatus } from './http-constant'

var encryptInterceptor = ((chain) => {
  const requestParams = chain.requestParams
  requestParams.data = EncryptData(requestParams.data)
  return chain.proceed(requestParams)
})

var responseInterceptor = ((chain) => {
  const requestParams = chain.requestParams
  return chain.proceed(requestParams).then((res) => {
    const { statusCode, data, errMsg } = res
    if (statusCode === HttpStatus.SUCCESS) {
      if (data.code !== 200) {
        Taro.showToast({ title: data.message })
      }
    } else {
      Taro.showToast({ title: `${statusCode} ${errMsg}` })
    }
    return data
  })
})

var logInterceptor = ((chain) => {
  const requestParams = chain.requestParams
  const url = chain.requestParams.url
  const params = chain.requestParams.data
  return chain.proceed(requestParams).then((res) => {
    console.log({'url': url, 'params': params, 'responseData': res.data})
    return res
  })
})

export default {
  encryptInterceptor,
  responseInterceptor,
  logInterceptor
}
