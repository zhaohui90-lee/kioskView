import { createInstance } from "./api";

const mode = import.meta.env.MODE


export interface FetchOption {
  baseURL: string,
  method: string,
  headers?: object,
  data?: object,
  timeout?: number,
  withCredential?: boolean,
  responseType?: string
}

async function fetchAdapter (option: FetchOption){
  if('mock' === mode) {
    // 直接获取模拟报文
  } else {
    // 真实交易
    createInstance()
  }
}

export async function fetch(option: FetchOption) {
  await fetchAdapter(option)
}