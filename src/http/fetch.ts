import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { useRouter } from "vue-router";

axios.defaults.timeout = 90000
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8"
axios.defaults.headers.post["Accpet"] = "application/json"
axios.defaults.baseURL = ""

const instance: AxiosInstance = axios.create({
  baseURL: ""
})

/**
 * 请求拦截器 先进后出
 */
instance.interceptors.request.use(

  (config: AxiosRequestConfig): AxiosRequestConfig => {
    // Tip: 1
    // 请求开始的时候可以结合 vuex 开启全屏的 loading 动画

    // Tip: 2 
    // 带上 token , 可以结合 vuex 或者重 localStorage
    // if (store.getters.token) {
    //     config.headers['X-Token'] = getToken() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    // } else {
    //     // 重定向到登录页面    
    // }
    if (["post", "put", "delete"].includes(config.method?.toLocaleLowerCase() || "")) {
      config.data = JSON.stringify(config.data);
    }
    return config;
  },

  (error: any): Promise<any> => {
    console.error('request: ', error);
    if (error.code === 'ECONNABORTED' && error.message.includes('timeout')) {
      console.error("请求超时处理");
    }

    //  2.需要重定向到错误页面
    const errorInfo = error.response
    if (errorInfo) {
      const errorStatus = errorInfo.status;
      const router = useRouter();
      router.push({
        path: `/error/${errorStatus}`
      })
    }
    return Promise.reject(error) // 在调用的那边可以拿到(catch)你想返回的错误信息
  }

  // config => {



  //   if (config.method?.toLocaleLowerCase() === 'post'
  //     || config.method?.toLocaleLowerCase() === 'put'
  //     || config.method?.toLocaleLowerCase() === 'delete') {

  //     config.data = JSON.stringify(config.data)
  //   }

  //   return config
  // },
  // error => {
  //   // 请求错误时做些事(接口错误、超时等)
  //   // Tip: 4
  //   // 关闭loadding
  //   console.error('request:', error);
  //   //  1.判断请求超时
  //   if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
  //     console.error('根据你设置的timeout/真的请求超时 判断请求现在超时了，你可以在这里加入超时的处理方案');

  //   }

  //   //  2.需要重定向到错误页面
  //   const errorInfo = error.response
  //   if (errorInfo) {
  //     // error = errorInfo.data//页面那边catch的时候就能拿到详细的错误信息,看最下边的Promise.reject
  //     const errorStatus = errorInfo.status; // 404 403 500 ... 等
  //     const router = useRouter();
  //     router.push({
  //       path: `/error/${errorStatus}`
  //     })
  //   }
  //   return Promise.reject(error) // 在调用的那边可以拿到(catch)你想返回的错误信息
  // }
)

/**
 * 相应拦截器 先进先出
 */
instance.interceptors.response.use(
  (response: AxiosResponse): any => {
    // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
    const data = response.data ?? JSON.parse(response.request.responseText);
    // if (response.data === undefined) {
    //   data = JSON.parse(response.request.responseText)
    // } else {
    //   data = response.data
    // }

    // 根据返回的code值来做不同的处理（和后端约定）
    // switch (data.code) {
    //   case '':
    //     break;
    //   default:
    // }
    // 若不是正确的返回code，且已经登录，就抛出错误
    // const err = new Error(data.description)

    // err.data = data
    // err.response = response

    // throw err
    return data
  },
  (err: any): Promise<any> => {
    if (err && err.response) {
      const statusMessages: Record<number, string> = {
        400: "请求错误",
        401: "未授权，请登录",
        403: "拒绝访问",
        404: `请求地址出错: ${err.response.config.url}`,
        408: "请求超时",
        500: "服务器内部错误",
        501: "服务未实现",
        502: "网关错误",
        503: "服务不可用",
        504: "网关超时",
        505: "HTTP版本不受支持"
      };
      err.message = statusMessages[err.response.status] ?? "未知错误"
    }

    console.error(err);

    return Promise.reject(err)// 返回接口返回的错误信息
  }
)

type AxiosMethod = "get" | "post" | "put" | "delete" | "patch";

async function requestWrapper(
  method: AxiosMethod,
  url: string,
  data: any = null,
  conf?: AxiosRequestConfig
): Promise<any> {
  if (url.includes("SOCKETIOERROR")) {
    throw {
      code: '-1',
      msg: '数据服务网络异常'
    }
  }

  try {
    const response = await instance[method](url, data, conf);
    return response;
  } catch (error) {
    throw error;
  }
}

/**
 * 这里提供的get交易
 * @param url 
 * @param conf 
 * @returns 
 */
export function get(url: string, conf?: AxiosRequestConfig): Promise<any> {
  return requestWrapper("get", url, null, conf)
}

/**
 * 
 * @param url 
 * @param data 
 * @param conf
 */
export function post(url: string, data: any, conf?: AxiosRequestConfig): Promise<any> {
  return requestWrapper("post", url, data, conf)
}

export default instance