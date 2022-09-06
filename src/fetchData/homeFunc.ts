import axios from "axios";

/**
 * 获取服务版本号
 */
export async function fetchSoftwareVersion(): Promise<any> {
  let result;
  await axios.post('http://localhost:3000/software')
    .then(res => {
      // 判断是否交易成功
      if ('0' === res.data.code) {
        result = res.data
      } else {
        result = 'device交易失败！'
      }
    })
    .catch(error => {
      console.log(error);
      result = 'axios交易异常: ' + error
    })
  return result;
}

/**
 * 获取设备信息
 * @inparam deviceNo 设备编号
 */
export async function fetchDeviceInfo(deviceNo?: string): Promise<any> {
  let result;
  await axios.post('http://localhost:3000/device')
    .then(res => {
      // 判断是否交易成功
      if ('0' === res.data.code) {
        result = res.data
      } else {
        result = 'device交易失败！'
      }
    })
    .catch(error => {
      console.log(error);
      result = 'axios交易异常: ' + error
    })
  return result;
}

/**
 * 获取菜单信息
 * @inparam deviceNo 设备编号
 */
export async function fetchMenuInfo(deviceNo?: string): Promise<any> {
  let result;
  await axios.post('http://localhost:3000/menu')
    .then(res => {
      // 判断是否交易成功
      if ('0' === res.data.code) {
        result = res.data
      } else {
        result = 'menu交易失败！'
      }
    })
    .catch(error => {
      console.log(error);
      result = 'axios交易异常: ' + error
    })
  return result
}