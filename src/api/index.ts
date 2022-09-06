import axios from "axios";

axios.interceptors.request.use((config) => {
  // 请求前拦截 处理
  console.log('这里是请求拦截....');
  
  return config
},
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  })

