import axios from "axios";
import { useRouter } from "vue-router";

axios.defaults.timeout = 90000
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8"
axios.defaults.headers.post["Accpet"] = "application/json"
axios.defaults.baseURL = ""

const instance = axios.create({
  baseURL: ""
})

/**
 * 请求拦截器 先进后出
 */
instance.interceptors.request.use(
  config => {
    
    // Tip: 1
    // 请求开始的时候可以结合 vuex 开启全屏的 loading 动画

    // Tip: 2 
    // 带上 token , 可以结合 vuex 或者重 localStorage
    // if (store.getters.token) {
    //     config.headers['X-Token'] = getToken() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    // } else {
    //     // 重定向到登录页面    
    // }

    if (config.method?.toLocaleLowerCase() === 'post'
      || config.method?.toLocaleLowerCase() === 'put'
      || config.method?.toLocaleLowerCase() === 'delete') {

      config.data = JSON.stringify(config.data)
    }

    return config
  },
  error => {
    // 请求错误时做些事(接口错误、超时等)
    // Tip: 4
    // 关闭loadding
    console.error('request:', error);
    //  1.判断请求超时
    if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
      console.error('根据你设置的timeout/真的请求超时 判断请求现在超时了，你可以在这里加入超时的处理方案');

    }

    //  2.需要重定向到错误页面
    const errorInfo = error.response
    if (errorInfo) {
      // error = errorInfo.data//页面那边catch的时候就能拿到详细的错误信息,看最下边的Promise.reject
      const errorStatus = errorInfo.status; // 404 403 500 ... 等
      const router = useRouter();
      router.push({
        path: `/error/${errorStatus}`
      })
    }
    return Promise.reject(error) // 在调用的那边可以拿到(catch)你想返回的错误信息
  }
)

/**
 * 相应拦截器 先进先出
 */
instance.interceptors.response.use(
  response => {
    let data
    // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
    if (response.data === undefined) {
      data = JSON.parse(response.request.responseText)
    } else {
      data = response.data
    }

    // 根据返回的code值来做不同的处理（和后端约定）
    switch (data.code) {
      case '':
        break;
      default:
    }
    // 若不是正确的返回code，且已经登录，就抛出错误
    // const err = new Error(data.description)

    // err.data = data
    // err.response = response

    // throw err
    return data
  },
  err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误'
          break

        case 401:
          err.message = '未授权，请登录'
          break

        case 403:
          err.message = '拒绝访问'
          break

        case 404:
          err.message = `请求地址出错: ${err.response.config.url}`
          break

        case 408:
          err.message = '请求超时'
          break

        case 500:
          err.message = '服务器内部错误'
          break

        case 501:
          err.message = '服务未实现'
          break

        case 502:
          err.message = '网关错误'
          break

        case 503:
          err.message = '服务不可用'
          break

        case 504:
          err.message = '网关超时'
          break

        case 505:
          err.message = 'HTTP版本不受支持'
          break

        default:
      }
    }

    console.error(err);

    return Promise.reject(err)// 返回接口返回的错误信息
  }
)

/**
 * 这里提供的get交易
 * @param url 
 * @param conf 
 * @returns 
 */
export function get(url: string, conf?: any): Promise<any> {
  if (url.indexOf("[SOCKETIOERROR]") > -1) {
    return Promise.reject({
      code: "-1",
      msg: "数据服务网络异常",
    })
  }

  return new Promise((resolve, reject) => {
    instance.get(url, conf).then(res => {
      resolve(res)
    })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 * 
 * @param url 
 * @param data 
 * @param conf
 */
export function post(url: string, data: any, conf?: any): Promise<any> {
  if (url.indexOf("[SOCKETIOERROR]") > -1) {
    return Promise.reject({
      code: "-1",
      msg: "数据服务网络异常",
    })
  }

  return new Promise((resolve, reject) => {
    instance.post(url, data, conf).then(res => {
      resolve(res)
    })
      .catch(error => {
        reject(error)
      })
  })
}

export default instance