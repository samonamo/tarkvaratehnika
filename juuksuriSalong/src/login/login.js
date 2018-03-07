import {HttpClient, json} from 'aurelia-fetch-client'

export class login{

	userData = {}

	confirmUser() {
		let client = new HttpClient();

		console.log("Selle ma saadan serverile", json(this.userData))
		client.fetch('http://localhost:8080/service/login', {
			'method': "POST",
			'body': json(this.userData)

		})	
			.then(response => response.json())
			.then(data => {
				console.log("Server saatis " + JSON.stringify(data));
				window.location.href = "http://localhost:9000/#/status";
			});
		console.log("Method executed!")
	}
}