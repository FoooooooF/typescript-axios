import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildURL } from './helper/url'
import { transformRequest } from './helper/data'

// typescript axios
function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

// 处理参数
function processConfig(config: AxiosRequestConfig): void {
  // 转换URL
  config.url = transformURL(config)
  // 处理数据
  config.data = transformRequestData(config)
}

// 转换URL
function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

// 处理数据
function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

export default axios
