import { AxiosRequestConfig, AxiosPromise } from './types'
import xhr from './xhr'
import { buildURL } from './helper/url'
import { transformRequest } from './helper/data'
import { processHeaders } from './helper/headers'

// typescript axios
function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config)
}

// 处理参数
function processConfig(config: AxiosRequestConfig) {
  // 转换URL
  config.url = transformURL(config)
  // 处理headers
  config.headers = transformHeaders(config)
  // 处理数据
  config.data = transformRequestData(config)
}

// 转换URL
function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

// 处理headers
function transformHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

// 处理数据
function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

export default axios
