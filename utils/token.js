import requests from "@/utils/requests";

var token = {
	async getToken(studentId, password) {
		var satoken;
		var api = "/api/accounts/token/";
		var data = {
			studentId: studentId,
			password: password
		}
		await requests.post(api, data).then(resp => {
			console.log(resp);
			satoken = resp.data.tokenValue;
		}).catch(err => {
			console.log(err);
		})
		return satoken;
	}
}

export default token;