import { get, post } from "./fetch";

async function fetchAdapterGet (url: string, data: any): Promise<any> {
  return await get(url, data)
}

async function fetchAdapterPost(url: string, data: any, conf?: any): Promise<any> {
  return await post(url, data, conf)
}

export async function fetchGet(url: string, conf: any): Promise<any> {
  return await fetchAdapterGet(url, conf)
}

export async function fetchPost(url: string, data: any, conf?: any): Promise<any> {
  return await fetchAdapterPost(url, data, conf)
}