import { get, post } from "./fetch";
import type { AxiosRequestConfig } from "axios";

async function fetchAdapterGet (url: string, conf?: AxiosRequestConfig): Promise<any> {
  return await get(url, conf)
}

async function fetchAdapterPost(url: string, data: any, conf?: AxiosRequestConfig): Promise<any> {
  return await post(url, data, conf)
}

export async function fetchGet(url: string, conf?: AxiosRequestConfig): Promise<any> {
  return await fetchAdapterGet(url, conf)
}

export async function fetchPost(url: string, data: any, conf?: AxiosRequestConfig): Promise<any> {
  return await fetchAdapterPost(url, data, conf)
}