import { get, post } from "./fetch";

const mode = import.meta.env.MODE

async function fetchAdapterGet (url: string, data: any){
  if('mock' === mode) {
    // 直接获取模拟报文
  } else {
    // 真实交易
    get(url, data)
  }
}

async function fetchAdapterPost(url: string, data: any) {
  if('mock' === mode) {
    // 直接获取模拟报文
  } else {
    // 真实交易
    post(url, data)
  }
}

export async function fetchGet(url: string, data: any) {
  await fetchAdapterGet(url, data)
}

export async function fetchPost(url: string, data: any) {
  await fetchAdapterPost(url, data)
}