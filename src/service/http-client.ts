import Taro from '@tarojs/taro'
import { HttpMethod } from './http-constant'
import HttpInterceptor from './http-interceptor'

class HttpClient {

  get (url: string, params: object) {
    return this.request(HttpMethod.GET, url, params)
  }

  post (url: string, params: object) {
    return this.request(HttpMethod.POST, url, params)
  }

  request (method: HttpMethod, url: string, params: object) {
    Taro.addInterceptor(HttpInterceptor.encryptInterceptor)
    Taro.addInterceptor(HttpInterceptor.responseInterceptor)
    Taro.addInterceptor(HttpInterceptor.logInterceptor)
    return Taro.request({
      url: url,
      method: method,
      data: params,
      header: {
        'content-type': 'application/json'
      }
    })
  } 
}

export default HttpClient
