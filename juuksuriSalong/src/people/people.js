import {HttpClient, json} from 'aurelia-fetch-client'

export class people{

	constructor()	{
		this.appName = "juuksuriSalong"
		this.count = 0
	}

	addUser() {
		let client = new HttpClient();

		let userData = {
			"firstName": "MyName",
			"lastName": "MyLastName",
			"numOfPets": 11,
			"email":"testemail@gmail.com",
			"phoneNumber":"551231231",
		}
		console.log(json(userData))
		client.fetch('http://localhost:8080/greeting', {
			'method': "POST",
			'body': json(userData)
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