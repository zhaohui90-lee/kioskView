import $axios from "./api";

/**
 * 获取设备信息
 * @param params 设备编号
 * @returns 
 */
export const deviceInfo = (params: InDeviceInfo): Promise<DeviceInfo | any> => {
  return $axios({
    url: '/device',
    method: 'post',
    params
  })
}

/**
 * 获取设备数据
 */
export interface InDeviceInfo {
  deviceNo: string
}

/**
 * 返回设备数据 json value
 */
export interface DeviceInfo {
  msg: string,
  code: string,
  data: {
    deviceNo: string,
    ip: string
  }
}

/**
 * 获取软件版本号
 * @returns 
 */
export const softwareVersion = (): Promise<SoftwareVersion | any> => {
  return $axios({
    url: '/software',
    method: 'post'
  })
}

/**
 * 软件版本
 */
export interface SoftwareVersion {
  msg: string,
  code: string,
  data: string
}

/**
 * 获取菜单信息
 * @param params 设备编号
 * @returns 
 */
export const menu = (params: InDeviceInfo): Promise<Menu | any> => {
  return $axios({
    url: '/menu',
    method: 'post',
    params
  })
}

/**
 * 菜单结构
 */
export interface Menu {
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
  cardType: Array<CardModule>,
  secMenu: string[]
}

/**
 * 读卡对象
 */
export interface CardModule {
  cardId: number,
  cardName: string,
  icon: number
}

/**
 * 用户数据接口
 */
export interface UserInfo {
  unique_id: string,        // 病人唯一号
  card_no: string,
  long_card_no: string,
  card_type: number,
  is_medical_id: boolean,       // 是否为门诊号
  phone_jd: number,      // 建档时使用
  cur_menuname: string,  // 当前菜单名称
  multi_org: boolean,         // 控制多个院区选择显示
  medinfo: string,
  name: string,
  isLogin: boolean,
  balance: number,
  logoutBtn: boolean,
  homeBtn: boolean,
  logBtn: boolean,
  returnBtn: boolean
}

export default {
  deviceInfo,
  softwareVersion,
  menu
}