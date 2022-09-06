/**
 * 设备数据 json value
 */
interface DeviceInfo {
  msg: string,
  code: string,
  data: {
    deviceNo: string,
    ip: string
  }
}

/**
 * 软件版本
 */
interface SoftwareVersion {
  msg: string,
  code: string,
  data: string
}

/**
 * 菜单结构
 */
interface Menu {
  id: number,
  name: string,
  sort: number,
  logo: string,
  url: string,
  flag: string,
  tips: string,
  function: {
    id: number,
    name: string,
    description: string,
    url: string,
    stat: boolean,
    topic: string,
    dept: string,
    type: string
  },
  secMenu: []
}

/**
 * 用户数据接口
 */
interface User {
  
}