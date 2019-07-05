import HttpClient from './http-client'
import { AppServerUrl } from '../global/app-config'
import Taro from '@tarojs/taro'

// '/api/fastLogin'
// '/api/bindMobile'
// '/api/getEncryptedData'

class Api {

  request (path: string, params: object) {
    var httpClient = new HttpClient()
    const url = `${AppServerUrl}${path}`
    return httpClient.post(url, params)
  }
}

export default new Api() 