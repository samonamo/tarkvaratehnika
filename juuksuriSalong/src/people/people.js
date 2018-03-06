import {HttpClient, json} from 'aurelia-fetch-client'

export class people{

	userData = {}
	userList = []

	constructor()	{
		this.appName = "juuksuriSalong"
		this.count = 0
	}

	activate() {
		let client = new HttpClient();

		client.fetch('http://localhost:8080/service/users/all')
			.then(response => response.json())
			.then(users => this.userList = users);
	}

	addUser() {
		let client = new HttpClient();

		// let userData = {
		// 	"email":"testemail@gmail.com",
		//	"password":"testpw123"
		// 	"firstName": "MyName",
		// 	"lastName": "MyLastName",
		// 	"phoneNumber":"551231231",
		// }

		
		console.log("Selle ma saadan serverile", json(this.userData))
		client.fetch('http://localhost:8080/service/users/register', {
			'method': "POST",
			'body': json(this.userData)
			// 'body':"midagi"
			// 'body':string("midagi")
		})
			.then(response => response.json())
			.then(data => {
				console.log("Server saatis " + JSON.stringify(data));
		});

		console.log("Method executed!")
	}
}
