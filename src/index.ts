import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildURL } from './helper/url'

// typescript axios
function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

// 处理参数
function processConfig(config: AxiosRequestConfig): void {
  // 转换URL
  config.url = transformURL(config)
}

// 转换URL
function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config

  // 构建URL
  return buildURL(url, params)
}

export default axios
