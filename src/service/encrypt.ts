import MD5 from 'blueimp-md5'

interface RequestData {
  [key: string]: any
}

export default (params: RequestData) => {
  const commonParams = {
    os: 'wap',
    version: '0.0.1',
    timestamp: Math.round(new Date().getTime() / 1000)
  }
  const body = params || {}
  Object.assign(body, commonParams)
  const keys = Object.keys(body).sort()
  let s = ''
  for (const key of keys) {
    if (key !== 'sign') {
      s += key + body[key]
    }
  }
  body.sign = MD5(s + 'c2ZBcGlXYXAyMDE3MDIyOA==')
  return body
}
