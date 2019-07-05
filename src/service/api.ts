import HttpClient from './http-client'
import { AppServerUrl } from '../global/app-config'

// '/api/fastLogin'
// '/api/bindMobile'
// '/api/getEncryptedData'
// 'api/feedBack'

class Api {
  
  // 统一调用方法
  request (path: string, params: object) {
    var httpClient = new HttpClient()
    const url = `${AppServerUrl}${path}`
    return httpClient.post(url, params)
  }
}

export default new Api() 