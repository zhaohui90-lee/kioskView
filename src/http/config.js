export default {
  method: 'post',
  // 基础URL
  baseURL: 'http://localhost:3000/',
  // 请求头信息
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  // 参数
  data: {},
  // 设置超时时间
  timeout: 10000,
  // 携带凭证
  withCredential: false,
  // 返回数据类型
  responseType: 'json'
}