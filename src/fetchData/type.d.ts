/**
 * 设备数据 json value
 */
interface deviceInfo {
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
interface softwareVersion {
  msg: string,
  code: string,
  data: string
}

/**
 * 菜单结构
 */
interface menu {
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