const SERVER = "localhost";
const PORT = 8080;
const HTTP = "http"


var requests = {
	makeURL(scheme, domainName, port, api) {
		if (api[0] == '/') api = api.slice(1);
		var url = `${scheme}://${domainName}:${port}/${api}`;
		return url;
	},
	
	request(api, method = "GET", data = {}, header = {}) {
		var url = this.makeURL(HTTP, SERVER, PORT, api);
		console.log(url);
		
		var satoken = uni.getStorageSync("satoken");
		// #ifdef MP-WEIXIN
			if (satoken) header.Cookie = `satoken=${satoken}`;
		// #endif
		
		return new Promise((resolve, reject) => {
			uni.request({
				url: url,
				method: method,
				data: data,
				header: header,
				// enableCookie: true,
				// withCredentials: true,
				success: (res) => {
					if (Math.floor(res.statusCode / 100) === 2) {
						resolve(res);
					} else {
						// 401 登陆过期或失效
						if (res.statusCode == 401)
						uni.redirectTo({
							url: "/pages/login/login"
						})
						reject(new Error(`Request failed with status ${res.statusCode}`));
					}
				},
				fail: (err) => {
					reject(err);
				},
			});
		});
	},
	
	get(api, data={}, header={}) {
		return this.request(api, "GET", data, header);
	},
	post(api, data={}, header={}) {
		return this.request(api, "POST", data, header);
	},
	
	async download(api) {
		var header = {};
		var url = this.makeURL(HTTP, SERVER, PORT, api);
		// console.log(url)
		var satoken = uni.getStorageSync("satoken");
		// #ifdef MP-WEIXIN
			if (satoken) header.Cookie = `satoken=${satoken}`;
		// #endif
		
		
		var downloadResult = await uni.downloadFile({
			url: url,
			header: header,
		})
		
		return downloadResult.tempFilePath;
	}
	
}

export default requests;