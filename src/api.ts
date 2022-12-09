import { config } from "./config";

export const apiConfig: any = {

	getSwVersion: { dev: "/api/device/getSoftwareVersion", mock: "/mock/softwareVersion.json" },

	getMenuByDeviceNo: { dev: "/device/getMenuByDeviceNo", mock: "/mock/menuInfo.json" },

	getConfig: { dev: "/device/getConfig", mock: "/mock/config.json" },

	getDeviceInfo: { dev: "/device/getDeviceInfo", mock: "/mock/deviceInfo.json" },
}

let __api__: any = {}

Object.keys(apiConfig).forEach(item => {
	Object.defineProperty(__api__, item, {
		get() {
			if (config.__env__ === 'mock') {
				return apiConfig[item]['mock']
			} else {
				return apiConfig[item]['dev']
			}
		},
	})
})

export default __api__