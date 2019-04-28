import { AxiosRequestConfig } from './types'

// 创建 XMLHttpRequest
export default function xhr(config: AxiosRequestConfig): void {
  const { url, data = null, method = 'get' } = config

  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true)

  request.send(data)
}
