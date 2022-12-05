/**
 * 适配器模式通过把一个类的接口变换成客户端所期待的另一种接口，可以帮我们解决不兼容
 * 的问题。旧接口格式和使用着不兼容，中间加一个适配转换接口。
 */
// ajax适配器函数，入口和旧接口保持一致
async function AjaxAdapter(type, url, data, success, failed) {
  const type = type.toUpperCase()
  let result
  try {
    // 实际的请求全部由新接口发起
    if(type === 'get') {
      result = await HttpUtils.get(url) || {}
    } else if(type === 'post') {
      result = await HttpUtils.post(url, data) || {}
    }
    // 假设请求成功的状态码是1
    result.statusCode === 1 && success ? success(result): failed(result.statusCode)
  } catch (error) {
    // 捕捉网络错误
    if(failed) {
      failed(error.statusCode)
    }
  }
}

// 用适配器适配就的Ajax方法
async function Ajax(type, url, data, success, failed) {
  await AjaxAdapter(type, url, data, success, failed)
}