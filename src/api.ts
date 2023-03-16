import { config } from "./config";

interface ApiConfig {
	[key: string]: {
		dev: string;
		mock: string;
	}
}

interface Api {
	[key: string]: string;
}

export const apiConfig: ApiConfig = {

	getSwVersion: { dev: "/api/device/getSoftwareVersion", mock: "/mock/softwareVersion.json" },

	getMenuByDeviceNo: { dev: "/device/getMenuByDeviceNo", mock: "/mock/menuInfo.json" },

	getConfig: { dev: "/device/getConfig", mock: "/mock/config.json" },

	getDeviceInfo: { dev: "/device/getDeviceInfo", mock: "/mock/deviceInfo.json" },
}

const __api__: Api = Object.keys(apiConfig).reduce((acc, item) => {
	Object.defineProperty(acc, item, {
		get: () => (config.__env__ === 'mock' ? apiConfig[item].mock : apiConfig[item].dev)
	})
	return acc;
}, {});

// let __api__: any = {}

// Object.keys(apiConfig).forEach(item => {
// 	Object.defineProperty(__api__, item, {
// 		get() {
// 			if (config.__env__ === 'mock') {
// 				return apiConfig[item]['mock']
// 			} else {
// 				return apiConfig[item]['dev']
// 			}
// 		},
// 	})
// })

export default __api__