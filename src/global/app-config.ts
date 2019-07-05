enum AppEnv {
  release,
  test
}

const ReleaseServerBaseUrl = 'https://test-pioneermini.cgs18.com' // 生产环境
const TestServerBaseUrl = 'https://test-pioneermini.cgs18.com'    // 测试环境
const VersionSuffix = '/v1/'

// 当前app环境
export const appEnv = AppEnv.test

// 服务器地址
export const AppServerUrl = appEnv === AppEnv.test ? `${TestServerBaseUrl}${VersionSuffix}` : `${ReleaseServerBaseUrl}${VersionSuffix}`
